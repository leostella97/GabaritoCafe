/* ============================================================
   GABARITO CAFÉ — js/edital.js
   Tela "Meu edital": recebe o PDF, lê o texto com PDF.js,
   chama a análise e desenha o resultado (cargos, matérias,
   trechos e plano de estudo) com botão para gerar simulado.
   ============================================================ */

// Objeto global da tela do edital
const EditalUI = {

  ultimaAnalise: null,               // guarda a última análise (para gerar simulado depois)

  // Liga os eventos da tela (chamado uma vez no início do app)
  iniciar() {
    if (this._ligado) return;                               // já ligado? Não duplica eventos
    this._ligado = true;                                    // marca como ligado para sempre

    const zona = document.getElementById('zona-pdf');       // pega a zona de soltar arquivo
    const input = document.getElementById('input-pdf');     // pega o campo de arquivo invisível

    // Clique (ou Enter) na zona abre o seletor de arquivos
    zona.addEventListener('click', () => input.click());    // clica no input escondido
    zona.addEventListener('keydown', (e) => {               // acessível por teclado
      if (e.key === 'Enter' || e.key === ' ') {             // se apertou Enter ou espaço
        e.preventDefault();                                 // evita rolagem no espaço
        input.click();                                      // abre o seletor
      }
    });

    // Quando um arquivo é escolhido, processa
    input.addEventListener('change', () => {                // arquivo selecionado
      if (input.files[0]) this.processarArquivo(input.files[0]); // manda processar o primeiro
      input.value = '';                                     // limpa para permitir reenviar o mesmo
    });

    // Arrastar e soltar: destaca a zona enquanto o arquivo está "no ar"
    zona.addEventListener('dragover', (e) => {              // arquivo sobre a zona
      e.preventDefault();                                   // permite o "soltar"
      zona.classList.add('arrastando');                     // acende o destaque
    });
    zona.addEventListener('dragleave', () => {              // arquivo saiu da zona
      zona.classList.remove('arrastando');                  // apaga o destaque
    });
    zona.addEventListener('drop', (e) => {                  // arquivo solto
      e.preventDefault();                                   // evita abrir o arquivo na aba
      zona.classList.remove('arrastando');                  // apaga o destaque
      const arquivo = e.dataTransfer.files[0];              // pega o arquivo solto
      if (arquivo) this.processarArquivo(arquivo);          // manda processar
    });

    // Botão de analisar texto colado (plano B sem PDF)
    document.getElementById('btn-analisar-cola').addEventListener('click', () => { // clique no botão
      const texto = document.getElementById('edital-cola').value.trim(); // pega o texto colado
      if (texto.length < 40) {                              // texto curto demais
        App.torrada(T('toast_cola_curto'), 'erro'); // avisa
        return;                                             // para por aqui
      }
      const analise = AnaliseEdital.analisar(texto);        // analisa o texto colado
      this.ultimaAnalise = analise;                         // guarda a análise
      this.renderizarResultado(analise);                    // desenha o resultado
    });

    // Botão de guardar o cargo focado
    document.getElementById('btn-salvar-cargo').addEventListener('click', () => { // clique no botão
      const cargo = document.getElementById('edital-cargo').value.trim(); // pega o cargo digitado
      Auth.salvarFoco(cargo);                               // salva no perfil
      App.atualizarPerfil();                                // atualiza lateral e saudação
      // Confirma o que aconteceu (com foco salvo ou limpo), traduzido
      App.torrada(cargo ? T('toast_foco_guardado', { cargo: cargo }) : T('toast_foco_limpo'), 'sucesso');
    });

    // Pré-preenche o campo de foco com o que já estava salvo
    document.getElementById('edital-cargo').value = Auth.focoAtual(); // carrega o foco salvo

    // Delegação: clique (ou Enter) no nome da matéria abre o modal de tópicos
    const resultado = document.getElementById('edital-resultado'); // caixa do resultado
    resultado.addEventListener('click', (e) => {              // clique na matéria
      const alvo = e.target.closest('.materia-nome[data-materia]'); // nome clicável
      if (alvo) this.abrirModalMateria(alvo.dataset.materia); // abre o modal dela
      // TEAM_003: clique num tópico (chip do programa ou nome no plano) abre o modal direto na explicação
      const chip = e.target.closest('[data-topico]');         // qualquer tópico clicável da tela
      if (chip) this.abrirModalTopico(chip.dataset.materia, chip.dataset.topico); // abre o modal do tópico
      const mais = e.target.closest('.ver-mais');           // botão "Ver mais…"
      if (mais) {                                           // clicou no expandir
        const corpo = mais.parentElement.querySelector('.plano-corpo'); // o corpo do item
        const aberto = corpo.classList.toggle('aberto');    // alterna o estado
        mais.textContent = aberto ? T('ed_ver_menos') : T('ed_ver_mais'); // troca o rótulo
      }
    });
    resultado.addEventListener('keydown', (e) => {            // acessível por teclado
      if (e.key !== 'Enter' && e.key !== ' ') return;         // só Enter e espaço
      const alvo = e.target.closest('.materia-nome[data-materia]'); // nome clicável
      if (alvo) { e.preventDefault(); this.abrirModalMateria(alvo.dataset.materia); } // abre o modal
    });

    this.iniciarModal();                                    // liga os eventos do modal (também em edital)
  },

  // TEAM_004: liga os eventos do modal (✕, véu, Esc e cliques internos).
  // Separado de iniciar() porque o modal abre fora da tela do edital também
  // (ex.: "Temas que caem") — antes só ligava ao visitar o edital e o modal
  // ficava travado nas outras telas. Idempotente; abrirModalMateria e
  // abrirModalTopico chamam para garantir a fiação em qualquer tela.
  iniciarModal() {
    if (this._modalLigado) return;                            // já ligado? Não duplica eventos
    this._modalLigado = true;                                 // marca como ligado para sempre

    // Modal: fecha no X, no véu escuro e na tecla Esc
    const modal = document.getElementById('modal-materia');   // o véu do modal
    document.getElementById('modal-fechar').addEventListener('click', () => this.fecharModal()); // botão X
    modal.addEventListener('click', (e) => {                  // clique no véu
      if (e.target === modal) this.fecharModal();             // só fecha clicando fora da caixa
    });
    document.addEventListener('keydown', (e) => {             // tecla Esc
      if (e.key === 'Escape') this.fecharModal();             // fecha o modal
    });
    // Delegação dos tópicos do modal: clique mostra a explicação + aula do tópico
    document.getElementById('modal-conteudo').addEventListener('click', (e) => { // clique no conteúdo
      // TEAM_003: tópico da lista abre a mesma visão do chip (explicação + aula no modal)
      const alvo = e.target.closest('.topico-item');          // tópico clicável da lista
      if (alvo) this.abrirModalTopico(alvo.dataset.materia, alvo.dataset.topico); // mostra a explicação
      // TEAM_003: "todos os tópicos" volta da explicação para a visão da matéria
      const todos = e.target.closest('.link-todos-topicos');  // link de voltar aos tópicos
      if (todos) this.abrirModalMateria(todos.dataset.materia); // reabre o modal da matéria
      // TEAM_005: botão "montar simulado" do modal de banca (tela Bancas)
      const simBanca = e.target.closest('[data-sim-banca]');  // botão de simulado da banca
      if (simBanca) {                                         // se clicou nele
        this.fecharModal();                                   // fecha o modal
        SimuladoUI.abrir({ banca: simBanca.dataset.simBanca, origem: 'bancas' }); // abre o simulado filtrado
        App.irPara('simulado');                               // navega para a tela do simulado
      }
    });
  },

  // Recebe o arquivo PDF e cuida de todo o fluxo de leitura
  async processarArquivo(arquivo) {
    const estado = document.getElementById('edital-estado'); // caixa de status
    estado.classList.remove('oculto');                     // mostra a caixa
    estado.innerHTML = '<div class="girando"></div><p class="mensagem">' + T('ed_lendo') + '</p>'; // estado "lendo"

    try {
      const texto = await this.textoDoPdf(arquivo);         // extrai o texto do PDF
      const analise = AnaliseEdital.analisar(texto);        // analisa o texto extraído
      this.ultimaAnalise = analise;                         // guarda a análise
      this.renderizarResultado(analise);                    // desenha o resultado na tela
      App.torrada(T('toast_edital_ok'), 'sucesso'); // avisa que deu certo
    } catch (erro) {
      console.warn('Falha ao ler o PDF', erro);             // registra o erro no console
      // Aviso honesto com o plano B (traduzido)
      estado.innerHTML = '<p class="mensagem">' + T('ed_erro_t') + '</p><p class="texto-suave">' + T('ed_erro_sub') + '</p>'; // orienta
      App.torrada(T('toast_edital_erro'), 'erro'); // torrada de erro
    }
  },

  // Extrai o texto de um PDF usando a biblioteca PDF.js
  async textoDoPdf(arquivo) {
    if (!window.pdfjsLib) {                                 // se a biblioteca não carregou (sem internet)
      throw new Error('pdfjs-indisponivel');                // avisa o problema
    }
    const buffer = await arquivo.arrayBuffer();             // lê o arquivo em bytes
    const pdf = await window.pdfjsLib.getDocument({ data: buffer }).promise; // abre o documento
    let texto = '';                                         // acumulador de texto
    for (let pagina = 1; pagina <= pdf.numPages; pagina++) { // percorre todas as páginas
      const pag = await pdf.getPage(pagina);                // carrega a página
      const conteudo = await pag.getTextContent();          // pega o texto da página
      for (const item of conteudo.items) {                  // percorre os pedaços de texto
        texto += item.str + (item.hasEOL ? '\n' : ' ');     // junta respeitando quebras de linha
      }
      texto += '\n';                                        // separa as páginas
    }
    return texto;                                           // devolve o texto completo
  },

  // Desenha o resultado da análise na tela
  renderizarResultado(analise) {
    const estado = document.getElementById('edital-estado'); // caixa de status
    estado.classList.add('oculto');                        // esconde o "lendo"

    if (!analise.valido) {                                  // análise vazia (texto curto)
      document.getElementById('edital-resultado').innerHTML = '<div class="nota">' + T('ed_curto_aviso') + '</div>'; // avisa
      return;                                               // para
    }

    const caixa = document.getElementById('edital-resultado'); // onde o resultado aparece
    let html = '';                                          // acumulador de HTML

    // ---- Cartão 1: o edital em resumo (título, confiança e trechos citados) ----
    html += '<div class="cartao destaque bloco-edital aparecer">'; // abre o cartão
    html += '<h3>📋 ' + this.escape(analise.titulo || T('ed_resumo')) + '</h3>'; // título do concurso
    // Barra de confiança da análise (o quanto o robô conseguiu entender)
    const corConfianca = analise.confianca >= 70 ? 'var(--verde)' : (analise.confianca >= 40 ? 'var(--caramelo)' : 'var(--vermelho)'); // cor pela nota
    html += '<div style="display:flex;align-items:center;gap:0.6rem;margin:0.6rem 0">'; // linha da confiança
    html += '<span style="font-weight:900;font-size:0.85rem;white-space:nowrap">' + T('ed_confianca') + ' ' + analise.confianca + '%</span>'; // rótulo
    html += '<div class="barra-progresso" style="flex:1"><span style="width:' + analise.confianca + '%;background:' + corConfianca + '"></span></div>'; // barra
    html += '</div>';                                       // fecha a linha
    html += '<p class="texto-suave" style="font-size:0.8rem;margin:0">' + T('ed_confianca_aviso') + '</p>'; // aviso curto
    if (analise.trechos.length === 0) {                     // se não achamos trechos
      html += '<p class="texto-suave">' + T('ed_sem_trechos') + '</p>'; // explica
    }
    for (const trecho of analise.trechos) {                 // percorre os trechos achados
      html += '<p style="font-weight:800;margin:0.7rem 0 0.2rem">' + this.escape(trecho.nome) + '</p>'; // nome da seção
      html += '<div class="trecho-citado">' + this.escape(trecho.texto) + '</div>'; // citação do edital
    }
    html += '</div>';                                       // fecha o cartão

    // ---- Cartão 2: banca organizadora + datas (o "prazo de validade" do estudo) ----
    html += '<div class="cartao bloco-edital aparecer">';   // abre o cartão
    html += '<h3>' + T('ed_banca_t') + '</h3>';             // título da seção
    if (analise.banca) {                                    // se identificamos a banca
      html += '<p style="font-weight:900;font-size:1.1rem;color:var(--cafe);margin:0.3rem 0">' + this.escape(analise.banca.rotulo) + '</p>'; // nome da banca
      html += '<p class="texto-suave" style="font-size:0.8rem">…' + this.escape(analise.banca.trecho) + '…</p>'; // trecho de onde tiramos
      html += '<button class="botao botao-contorno pequeno" id="btn-ver-banca">' + T('ed_banca_ver') + '</button>'; // botão para as pegadinhas
      // Dicas de estratégia dessa banca (quando o catálogo a conhece)
      const auto = AnaliseEdital.dicasDaBanca(analise.banca.rotulo); // busca dicas pelo rótulo detectado
      if (auto && auto.conhecida) {                         // só exibe quando reconhecemos a banca
        html += this.blocoDicasBanca(auto);                 // desenha a lista de dicas
      }
    } else {                                                // se não identificamos
      html += '<p class="texto-suave">' + T('ed_banca_nenhuma') + '</p>'; // avisa
      // Campo manual: o usuário digita a banca e recebe dicas do catálogo
      html += '<div class="campo" style="margin-top:0.6rem">'; // abre o campo
      html += '<label for="input-banca-manual">' + T('ed_banca_manual_l') + '</label>'; // rótulo do input
      html += '<div style="display:flex;gap:0.5rem">';      // linha input+botão
      html += '<input id="input-banca-manual" type="text" data-i18n-ph="ed_banca_manual_ph" placeholder="' + this.escape(T('ed_banca_manual_ph')) + '" style="flex:1">'; // campo de texto
      html += '<button class="botao botao-contorno pequeno" id="btn-banca-manual" type="button">' + T('ed_banca_manual_btn') + '</button>'; // botão de análise
      html += '</div>';                                     // fecha a linha
      html += '<div id="dicas-banca-manual"></div>';        // onde as dicas são desenhadas
      html += '</div>';                                     // fecha o campo
    }
    // TEAM_005: simulado por banca (opcional) — dropdown com as bancas do banco.
    // Vem pré-selecionada quando a detectada existe no banco de questões;
    // se a detecção errou (ou não achou banca), o usuário escolhe a certa aqui.
    const bancaSugerida = this.bancaBancoDaDetectada(analise.banca && analise.banca.rotulo); // detectada → nome no banco
    html += '<div class="campo" style="margin-top:0.8rem">'; // abre o campo
    html += '<label for="sim-banca-edital">' + T('ed_sim_banca_l') + '</label>'; // rótulo traduzido
    html += '<div style="display:flex;gap:0.5rem">';        // linha select + botão
    html += '<select id="sim-banca-edital" style="flex:1">'; // abre o select
    html += '<option value="">' + T('ed_sim_banca_sel') + '</option>'; // opção "escolha"
    for (const b of MotorSimulado.bancasDoBanco()) {        // percorre as bancas do banco
      const marcada = b.nome === bancaSugerida ? ' selected' : ''; // pré-seleciona a detectada
      html += '<option value="' + this.escape(b.nome) + '"' + marcada + '>' + this.escape(b.nome) + ' (' + b.quantidade + ')</option>'; // opção com contagem
    }
    html += '</select>';                                    // fecha o select
    html += '<button class="botao botao-contorno pequeno" id="btn-sim-banca" type="button">' + T('ed_sim_banca_btn') + '</button>'; // botão de montar
    html += '</div></div>';                                 // fecha linha e campo
    // Datas importantes + contagem regressiva
    html += '<div class="titulo-secao" style="margin:1.2rem 0 0.6rem"><h3>' + T('ed_datas_t') + '</h3></div>'; // subtítulo
    html += this.blocoDatas(analise);                       // desenha as datas e o contador
    html += '</div>';                                       // fecha o cartão

    // ---- Cartão 3: os números do edital ----
    html += '<div class="cartao bloco-edital aparecer">';   // abre o cartão
    html += '<h3>' + T('ed_numeros_t') + '</h3>';           // título da seção
    html += this.blocoNumeros(analise);                     // desenha vagas, salário, taxa, questões e validade
    html += '</div>';                                       // fecha o cartão

    // ---- Cartão 4: cargos encontrados ----
    html += '<div class="cartao bloco-edital aparecer">';   // abre o cartão
    html += '<h3>' + T('ed_cargos_t') + '</h3>';            // título da seção
    if (analise.cargos.length > 0) {                        // se achamos cargos
      html += '<div class="lista-chips">';                  // abre a fileira de chips
      for (const cargo of analise.cargos) {                 // percorre os cargos
        html += '<span class="chip materia">' + this.escape(cargo) + '</span>'; // chip de cada cargo
      }
      html += '</div>';                                     // fecha a fileira
      // Escolaridade exigida (quando o edital fala dela)
      if (analise.escolaridade.length > 0) {                // se achamos escolaridade
        html += '<p style="font-weight:900;font-size:0.85rem;margin:0.9rem 0 0.3rem">' + T('ed_escolaridade_t') + '</p>'; // rótulo
        html += '<div class="lista-chips">';                // fileira de chips
        for (const nivel of analise.escolaridade) {         // percorre os níveis
          html += '<span class="chip caramelo">🎓 ' + this.escape(nivel) + '</span>'; // chip do nível
        }
        html += '</div>';                                   // fecha a fileira
      }
      // Requisitos típicos detectados (CNH, TAF, quitação, antecedentes...)
      if (analise.requisitos && analise.requisitos.length > 0) { // se achamos requisitos
        html += '<p style="font-weight:900;font-size:0.85rem;margin:0.9rem 0 0.3rem">' + T('ed_requisitos_t') + '</p>'; // rótulo
        html += '<div class="lista-chips">';                // fileira de chips
        for (const req of analise.requisitos) {             // percorre os requisitos
          html += '<span class="chip">' + this.escape(req) + '</span>'; // chip de cada requisito
        }
        html += '</div>';                                   // fecha a fileira
      }
    } else {                                                // se não achamos
      html += '<p class="texto-suave">' + T('ed_cargos_vazio') + '</p>'; // pede ajuda
    }
    html += '</div>';                                       // fecha o cartão

    // ---- Cartão 5: matérias identificadas ----
    html += '<div class="cartao bloco-edital aparecer">';   // abre o cartão
    html += '<h3>' + T('ed_materias_t') + '</h3>';          // título da seção
    if (analise.materias.length > 0) {                      // se achamos matérias
      html += '<div class="lista-chips">';                  // abre a fileira de chips
      for (const materia of analise.materias) {             // percorre as matérias
        const peso = materia.questoes ? ' (×' + materia.questoes + ')' : ''; // peso da matéria no edital, se achado
        const rotulo = materia.rotulo + peso + (materia.temBanco ? ' ✓' : ' 🕮'); // marca peso e se temos questões
        html += '<span class="chip ' + (materia.temBanco ? 'verde' : '') + '">' + this.escape(rotulo) + '</span>'; // chip de cada matéria
      }
      html += '</div>';                                     // fecha a fileira
      html += '<p class="texto-suave" style="font-size:0.8rem;margin-top:0.6rem">' + T('ed_legenda') + '</p>'; // legenda
    } else {                                                // se não achamos
      html += '<p class="texto-suave">' + T('ed_materias_vazio') + '</p>'; // orienta
    }
    html += '</div>';                                       // fecha o cartão

    // ---- Cartão 6: o conteúdo programático, matéria por matéria ----
    html += '<div class="cartao bloco-edital aparecer">';   // abre o cartão
    html += '<h3>' + T('ed_programa_t') + '</h3>';          // título da seção
    html += this.blocoPrograma(analise);                    // desenha os tópicos que o edital pede
    html += '</div>';                                       // fecha o cartão

    // ---- Edital Verticalizado Interativo ----
    if (typeof EditalVerticalUI !== 'undefined') {
      html += EditalVerticalUI.renderizar(analise);
    }

    // ---- Comparador de Editais ----
    if (typeof ComparadorEditalUI !== 'undefined') {
      html += ComparadorEditalUI.renderizarInterface();
    }

    // ---- Cartão 7: plano de estudo sugerido (com cronograma inteligente) ----
    html += '<div class="cartao bloco-edital aparecer">';   // abre o cartão
    html += '<h3>' + T('ed_plano_t') + '</h3>';             // título da seção
    html += this.blocoCronograma(analise);                  // dica de ritmo conforme os dias que faltam
    if (analise.materias.length > 0) {                      // se temos matérias para planejar
      for (const materia of analise.materias) {             // percorre as matérias
        html += this.planoDeMateria(materia.rotulo);        // monta o item de plano de cada uma
      }
    } else {                                                // sem matérias, sem plano
      html += '<p class="texto-suave">' + T('ed_plano_vazio') + '</p>'; // orienta
    }
    html += '</div>';                                       // fecha o cartão

    // ---- Botão: gerar simulado com as matérias do edital ----
    if (analise.materias.some(m => m.temBanco)) {           // só mostra se há questões disponíveis
      html += '<button id="btn-simulado-edital" class="botao botao-primario grande">' + T('ed_btn_simulado') + '</button>'; // botão de ação
    }

    caixa.innerHTML = html;                                 // despeja o HTML na tela

    // Liga o "Ver mais…" dos itens do plano que passam de 2 linhas
    for (const corpo of caixa.querySelectorAll('.plano-corpo')) { // percorre os corpos colapsáveis
      if (corpo.scrollHeight > corpo.clientHeight + 2) {    // conteúdo cortado?
        const botao = corpo.parentElement.querySelector('.ver-mais'); // botão irmão
        if (botao) botao.classList.remove('oculto');        // mostra o "Ver mais…"
      }
    }

    // Liga eventos do Edital Verticalizado Interativo e Comparador
    if (typeof EditalVerticalUI !== 'undefined') {
      EditalVerticalUI.ligarEventos();
    }
    if (typeof ComparadorEditalUI !== 'undefined') {
      ComparadorEditalUI.ligarEventos();
    }

    // Liga o botão de gerar simulado (se ele existe)
    const btn = document.getElementById('btn-simulado-edital'); // pega o botão criado
    if (btn) {                                              // se o botão existe
      btn.addEventListener('click', () => {                 // no clique
        const materias = this.ultimaAnalise.materias        // matérias detectadas
          .filter(m => m.temBanco)                          // só as que têm questões
          .map(m => m.rotulo);                              // pega os nomes
        const ensinos = this.ensinosDoEdital(this.ultimaAnalise); // nível de ensino sugerido pelo edital
        SimuladoUI.abrir({ materias: materias, ensinos: ensinos, origem: 'edital' }); // abre o simulado filtrado
        App.irPara('simulado');                             // navega para a tela do simulado
      });
    }

    // Liga o botão "ver as pegadinhas dessa banca"
    const btnBanca = document.getElementById('btn-ver-banca'); // pega o botão criado
    if (btnBanca) {                                         // se o botão existe
      btnBanca.addEventListener('click', () => App.irPara('bancas')); // leva para a tela de bancas
    }

    // Liga o botão da banca manual (quando o edital não diz quem organiza)
    const btnManual = document.getElementById('btn-banca-manual'); // pega o botão criado
    if (btnManual) {                                        // se o botão existe
      btnManual.addEventListener('click', () => {           // no clique
        const campo = document.getElementById('input-banca-manual'); // o input da banca
        const destino = document.getElementById('dicas-banca-manual'); // onde desenhar as dicas
        if (!campo || !destino) return;                     // segurança: elementos devem existir
        const info = AnaliseEdital.dicasDaBanca(campo.value); // busca dicas pelo nome digitado
        if (!info) {                                        // campo vazio
          destino.innerHTML = '';                           // limpa as dicas
          return;                                           // e para por aqui
        }
        destino.innerHTML = this.blocoDicasBanca(info);     // desenha as dicas achadas
      });
    }

    // TEAM_005: liga o botão "montar simulado desta banca" (dropdown do cartão da banca)
    const btnSimBanca = document.getElementById('btn-sim-banca'); // pega o botão criado
    if (btnSimBanca) {                                      // se o botão existe
      btnSimBanca.addEventListener('click', () => {         // no clique
        const sel = document.getElementById('sim-banca-edital'); // o dropdown de banca
        if (!sel || !sel.value) {                           // nenhuma banca escolhida?
          App.torrada(T('toast_sim_banca'), 'erro');        // avisa para escolher uma
          return;                                           // não segue
        }
        SimuladoUI.abrir({ banca: sel.value, origem: 'edital' }); // abre o simulado já com a banca filtrada
        App.irPara('simulado');                             // navega para a tela do simulado
      });
    }
  },

  // TEAM_005: converte o rótulo da banca detectada ("Vunesp", "FATEC") no nome
  // que o banco de questões usa ("Vunesp", "FATEC/ETEC (vestibular)").
  // Ordem: igualdade exata → nomes que se contêm (prefere o mais curto) →
  // primeiro nome antes da "/" contido no banco ("COMVEST" → "Unicamp (Comvest)").
  bancaBancoDaDetectada(rotulo) {
    if (!rotulo) return '';                                 // sem banca detectada, sem sugestão
    const normal = AnaliseEdital.normalizar(rotulo);        // rótulo normalizado
    // TEAM_005: achata os espaços em volta da "/" para igualar "CESPE / Cebraspe"
    // e "CESPE/Cebraspe" — sem isso a contenção jogava CEBRASP no lugar.
    const achatar = s => AnaliseEdital.normalizar(s).replace(/\s*\/\s*/g, '/'); // normaliza + achata a barra
    const plano = achatar(rotulo);                          // rótulo achatado
    const bancas = MotorSimulado.bancasDoBanco();           // bancas que existem no banco
    let alvo = bancas.find(b => achatar(b.nome) === plano); // 1) igualdade exata (com "/" achatada)
    if (!alvo) {                                            // não achou exata? tenta contenção
      const candidatas = bancas.filter(b => {               // nomes que se contêm
        const n = AnaliseEdital.normalizar(b.nome);         // nome do banco normalizado
        return n.includes(normal) || normal.includes(n);    // um contém o outro?
      });
      alvo = candidatas.sort((a, b) => a.nome.length - b.nome.length)[0]; // prefere o mais curto (o puro, não o combinado)
    }
    if (!alvo) {                                            // ainda não? tenta o nome principal
      const principal = normal.split('/')[0].trim();        // "COMVEST/UNICAMP" → "COMVEST"
      if (principal.length >= 3) {                          // evita sigla curta demais
        const candidatas = bancas.filter(b => AnaliseEdital.normalizar(b.nome).includes(principal)); // contém o principal?
        alvo = candidatas.sort((a, b) => a.nome.length - b.nome.length)[0]; // prefere o mais curto
      }
    }
    return alvo ? alvo.nome : '';                           // devolve o nome no banco (ou vazio)
  },

  // Desenha o bloco de dicas de uma banca (detectada ou digitada pelo usuário)
  blocoDicasBanca(info) {
    let html = '<div class="nota" style="margin-top:0.8rem">'; // caixinha de dicas
    html += '<p style="font-weight:900;font-size:0.85rem;margin:0 0 0.4rem">🕵️ ' + T('ed_dicas_t') + ' <span style="color:var(--cafe)">' + this.escape(info.rotulo) + '</span></p>'; // título com o nome
    if (!info.conhecida) {                                  // se a banca não está no catálogo
      html += '<p class="texto-suave" style="font-size:0.78rem;margin:0 0 0.4rem">' + T('ed_banca_desconhecida') + '</p>'; // explica que são dicas gerais
    }
    html += '<ul style="margin:0;padding-left:1.1rem">';    // abre a lista
    for (const dica of info.dicas) {                        // percorre as dicas
      html += '<li style="font-size:0.82rem;margin-bottom:0.25rem">' + this.escape(dica) + '</li>'; // cada dica
    }
    html += '</ul></div>';                                  // fecha lista e caixa
    return html;                                            // devolve o HTML pronto
  },

  // Traduz a escolaridade do edital em filtro de ensino do simulado
  // Só sugere quando o edital pede UM único nível (senão fica livre)
  ensinosDoEdital(analise) {
    const esc = analise.escolaridade || [];                 // níveis achados no edital
    if (esc.length !== 1) return [];                        // nenhum ou mais de um: sem sugestão
    if (esc[0] === 'Superior') return ['superior'];         // só superior → filtra superior
    return ['medio'];                                       // só médio ou fundamental → filtra médio
  },

  // Desenha as datas importantes com contagem regressiva para a prova
  blocoDatas(analise) {
    const d = analise.datas;                                // atalho para as datas
    const linhas = [];                                      // lista de linhas a mostrar
    // Formata uma data no padrão brasileiro (ou vazio)
    const fmt = (data) => data ? data.toLocaleDateString('pt-BR') : null; // formata dd/mm/aaaa
    if (fmt(d.inscricoesInicio) || fmt(d.inscricoesFim)) {  // se temos datas de inscrição
      const periodo = fmt(d.inscricoesInicio) + (fmt(d.inscricoesFim) ? ' a ' + fmt(d.inscricoesFim) : ''); // período
      linhas.push({ rotulo: T('ed_data_inscricoes'), valor: periodo, destaque: false }); // adiciona a linha
    }
    if (fmt(d.prova)) linhas.push({ rotulo: T('ed_data_prova'), valor: fmt(d.prova), destaque: true }); // data da prova
    if (fmt(d.taf)) linhas.push({ rotulo: T('ed_data_taf'), valor: fmt(d.taf), destaque: false }); // teste físico
    if (fmt(d.resultado)) linhas.push({ rotulo: T('ed_data_resultado'), valor: fmt(d.resultado), destaque: false }); // resultado

    if (linhas.length === 0) return '<p class="texto-suave">' + T('ed_sem_datas') + '</p>'; // nada achado

    // Monta o contador regressivo quando há data de prova
    let html = '';                                          // acumulador
    if (d.prova) {                                          // se sabemos a data da prova
      const dias = this.diasAte(d.prova);                   // quantos dias faltam
      let aviso;                                            // texto do aviso
      let estilo = 'nota';                                  // estilo do aviso
      if (dias > 0) { aviso = T('ed_faltam', { dias: dias }); }          // faltam N dias
      else if (dias === 0) { aviso = T('ed_prova_hoje'); estilo = 'cartao'; } // é hoje!
      else { aviso = T('ed_prova_passou'); estilo = 'nota'; }            // já passou
      html += '<div class="' + estilo + '" style="margin-bottom:0.8rem"><strong>' + T('ed_contagem') + ':</strong> ' + aviso + '</div>'; // mostra o contador
    }

    // Tabelinha de datas
    html += '<div class="lista-datas">';                    // abre a lista
    for (const linha of linhas) {                           // percorre as linhas
      html += '<div class="linha-dado' + (linha.destaque ? ' destaque' : '') + '">'; // abre a linha
      html += '<span class="dado-rotulo">' + this.escape(linha.rotulo) + '</span>'; // rótulo
      html += '<span class="dado-valor">' + this.escape(linha.valor) + '</span>';   // valor
      html += '</div>';                                     // fecha a linha
    }
    html += '</div>';                                       // fecha a lista
    return html;                                            // devolve o bloco
  },

  // Desenha os números do edital (vagas, salário, taxa, questões, validade)
  blocoNumeros(analise) {
    const n = analise.numeros;                              // atalho para os números
    const linhas = [];                                      // linhas a mostrar
    if (n.vagas) linhas.push({ rotulo: T('ed_num_vagas'), valor: String(n.vagas) }); // vagas
    if (n.salarioMin) {                                     // se temos salário
      const faixa = n.salarioMax && n.salarioMax !== n.salarioMin // faixa ou valor único?
        ? this.moeda(n.salarioMin) + ' a ' + this.moeda(n.salarioMax) // faixa
        : this.moeda(n.salarioMin);                         // valor único
      linhas.push({ rotulo: T('ed_num_salario'), valor: faixa }); // salário
    }
    if (n.taxa) linhas.push({ rotulo: T('ed_num_taxa'), valor: this.moeda(n.taxa) }); // taxa
    if (n.questoes) linhas.push({ rotulo: T('ed_num_questoes'), valor: String(n.questoes) }); // questões
    if (n.validade) {                                       // validade
      const unidade = n.validade.unidade === 'anos' ? T('ed_anos') : T('ed_meses'); // traduz a unidade
      linhas.push({ rotulo: T('ed_num_validade'), valor: n.validade.quantidade + ' ' + unidade }); // valor
    }
    if (n.cargaHoraria) linhas.push({ rotulo: T('ed_num_horas'), valor: n.cargaHoraria + 'h/' + T('ed_semana') }); // carga horária
    if (n.cadastroReserva) linhas.push({ rotulo: T('ed_num_cr'), valor: T('ed_cr_sim') }); // cadastro reserva
    if (linhas.length === 0) return '<p class="texto-suave">' + T('ed_numeros_vazio') + '</p>'; // nada achado

    let html = '<div class="lista-datas">';                 // abre a lista
    for (const linha of linhas) {                           // percorre as linhas
      html += '<div class="linha-dado">';                   // abre a linha
      html += '<span class="dado-rotulo">' + this.escape(linha.rotulo) + '</span>'; // rótulo
      html += '<span class="dado-valor">' + this.escape(linha.valor) + '</span>';   // valor
      html += '</div>';                                     // fecha a linha
    }
    html += '</div>';                                       // fecha a lista
    return html;                                            // devolve o bloco
  },

  // Desenha o conteúdo programático que o edital pede, matéria por matéria
  blocoPrograma(analise) {
    const comTopicos = analise.materias.filter(m => m.topicos && m.topicos.length > 0); // matérias com tópicos
    if (comTopicos.length === 0) return '<p class="texto-suave">' + T('ed_programa_vazio') + '</p>'; // nada achado
    let html = '<p class="texto-suave" style="font-size:0.85rem">' + T('ed_programa_sub') + '</p>'; // explicação
    for (const materia of comTopicos) {                     // percorre as matérias com tópicos
      html += '<div class="plano-item">';                   // abre o bloco da matéria
      html += '<span class="materia-nome clicavel" data-materia="' + this.escape(materia.rotulo) + '" role="button" tabindex="0" title="' + T('ed_modal_dica') + '">' + this.escape(materia.rotulo) + (materia.temBanco ? ' ✓' : '') + '</span>'; // nome clicável da matéria
      html += '<div class="lista-topicos">';                // abre a lista de tópicos
      for (const topico of materia.topicos) {               // percorre os tópicos do edital
        // TEAM_003: chip clicável — abre o modal com a explicação e a aula do tópico
        html += '<button type="button" class="chip chip-topico" data-materia="' + this.escape(materia.rotulo) + '" data-topico="' + this.escape(topico) + '" title="' + T('ed_modal_dica') + '">' + this.escape(topico) + '</button>'; // chip clicável de cada tópico
      }
      html += '</div>';                                     // fecha a lista
      html += '</div>';                                     // fecha o bloco
    }
    return html;                                            // devolve o bloco
  },

  // Dá uma orientação de ritmo de estudo conforme os dias que faltam para a prova
  blocoCronograma(analise) {
    if (!analise.datas.prova) {                             // sem data de prova
      return '<p class="texto-suave" style="font-size:0.88rem">' + T('ed_plano_sem_data') + '</p>'; // orienta a achar a data
    }
    const dias = this.diasAte(analise.datas.prova);          // dias restantes
    let dica;                                               // texto da dica
    if (dias <= 0) dica = T('ed_plano_passou');              // prova passou (ou é hoje)
    else if (dias <= 30) dica = T('ed_plano_dias_1', { dias: dias });   // reta final
    else if (dias <= 90) dica = T('ed_plano_dias_2', { dias: dias });   // meio de caminho
    else dica = T('ed_plano_dias_3', { dias: dias });                   // bastante tempo
    return '<div class="postit" style="margin-bottom:0.9rem">' + dica + '</div>'; // mostra em post-it
  },

  // Quantos dias faltam para uma data (0 = hoje, negativo = já passou)
  diasAte(data) {
    const hoje = new Date();                                // agora
    const alvo = new Date(data.getFullYear(), data.getMonth(), data.getDate()); // zera a hora do alvo
    const base = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()); // zera a hora de hoje
    return Math.round((alvo - base) / 86400000);            // diferença em dias
  },

  // Formata um número como dinheiro brasileiro (R$ 2.500,00)
  moeda(valor) {
    return 'R$ ' + valor.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // formata 2 casas
  },

  // Monta o bloco de plano de estudo de uma matéria
  planoDeMateria(rotuloMateria) {
    // Procura a matéria nos temas de concursos e de vestibular
    const fonte = DadosTemas.concursos.concat(DadosTemas.vestibular) // junta as duas listas
      .find(t => t.materia === rotuloMateria);              // acha pelo nome
    // Monta o item: nome clicável + corpo colapsável em 2 linhas + "Ver mais…"
    let html = '<div class="plano-item">';                  // abre o item
    html += '<span class="materia-nome clicavel" data-materia="' + this.escape(rotuloMateria) + '" role="button" tabindex="0" title="' + T('ed_modal_dica') + '">' + (fonte ? fonte.icone + ' ' : '') + this.escape(rotuloMateria) + '</span>'; // nome clicável
    html += '<div class="plano-corpo">';                    // abre o corpo colapsável
    if (!fonte) {                                           // matéria sem resumo pronto no app
      html += '<span class="texto-suave">' + T('ed_plano_sem_resumo') + '</span>'; // item honesto
    } else {                                                // matéria com resumo
      html += '<p style="font-size:0.88rem;margin:0.3rem 0">' + this.escape(fonte.resumo) + '</p>'; // resumo da matéria
      html += '<p style="font-size:0.85rem"><strong>' + T('ed_plano_comeca') + '</strong> '; // abre a lista de tópicos
      const top = fonte.topicos.slice(0, 3);                // pega os 3 tópicos que mais caem
      // TEAM_003: cada nome de tópico vira botão — clique abre o modal com explicação + aula
      html += top.map(t => '<button type="button" class="topico-texto" data-materia="' + this.escape(rotuloMateria) + '" data-topico="' + this.escape(t.nome) + '" title="' + T('ed_modal_dica') + '">' + this.escape(t.nome) + '</button>').join(' · '); // junta com pontinhos
      html += '.</p>';                                      // fecha a lista
    }
    html += '</div>';                                       // fecha o corpo
    html += '<button type="button" class="ver-mais oculto">' + T('ed_ver_mais') + '</button>'; // botão "Ver mais…" escondido
    html += '</div>';                                       // fecha o item
    return html;                                            // devolve o bloco
  },

  // Abre o modal de uma matéria: tópicos do edital + os que mais caem
  abrirModalMateria(rotulo) {
    this.iniciarModal();                                        // TEAM_004: garante a fiação em qualquer tela
    // Procura o resumo e os tópicos-chave dessa matéria nos dois catálogos
    const plano = DadosTemas.concursos.concat(DadosTemas.vestibular) // junta os catálogos
      .find(t => t.materia === rotulo);                            // acha pelo nome
    // E o que o edital pediu dela (tópicos extraídos do texto)
    const materiaEdital = this.ultimaAnalise                       // se já analisamos um edital
      ? this.ultimaAnalise.materias.find(m => m.rotulo === rotulo) // pega a matéria detectada
      : null;                                                    // senão fica sem
    this.modalMateria = { rotulo: rotulo, plano: plano };          // guarda o contexto aberto

    let html = '<h3 style="margin-top:0;padding-right:1.6rem">' + (plano ? plano.icone + ' ' : '') + this.escape(rotulo) + '</h3>'; // título com emoji
    if (plano) {                                                  // se tem resumo pronto
      html += '<p style="font-size:0.85rem;margin:0.4rem 0 0.6rem">' + this.escape(plano.resumo) + '</p>'; // mostra o resumo
    }
    html += '<p class="texto-suave" style="font-size:0.78rem;margin:0 0 0.7rem">' + T('ed_modal_dica') + '</p>'; // ensina o uso

    // Lista 1: os tópicos que o EDITAL pede (texto extraído do PDF)
    if (materiaEdital && materiaEdital.topicos && materiaEdital.topicos.length > 0) { // se achamos tópicos no edital
      html += '<p style="font-weight:900;font-size:0.8rem;margin:0.5rem 0 0.4rem">📄 ' + T('ed_modal_edital') + '</p>'; // rótulo da seção
      for (const topico of materiaEdital.topicos) {               // percorre os tópicos do edital
        // TEAM_003: data-materia junto — o clique abre a explicação sem depender de estado
        html += '<button type="button" class="topico-item" data-materia="' + this.escape(rotulo) + '" data-topico="' + this.escape(topico) + '">' + this.escape(topico) + '</button>'; // cada tópico clicável
      }
    }
    // Lista 2: os tópicos que MAIS CAEM (catálogo do app, com explicação pronta)
    if (plano && plano.topicos.length > 0) {                      // se temos tópicos-chave
      html += '<p style="font-weight:900;font-size:0.8rem;margin:0.6rem 0 0.4rem">🔥 ' + T('ed_modal_campeoes') + '</p>'; // rótulo da seção
      for (const topico of plano.topicos) {                       // percorre os campeões
        // TEAM_003: data-materia junto — o clique abre a explicação sem depender de estado
        html += '<button type="button" class="topico-item" data-materia="' + this.escape(rotulo) + '" data-topico="' + this.escape(topico.nome) + '">' + this.escape(topico.nome) + '</button>'; // cada tópico clicável
      }
    }

    document.getElementById('modal-conteudo').innerHTML = html;   // despeja no modal
    document.getElementById('modal-materia').classList.remove('oculto'); // mostra o modal
  },

  // Fecha o modal da matéria
  fecharModal() {
    document.getElementById('modal-materia').classList.add('oculto'); // esconde o modal
  },

  // Procura no catálogo da matéria aberta o tópico equivalente ao nome clicado
  infoDoTopico(nome) {
    const plano = this.modalMateria ? this.modalMateria.plano : null; // plano da matéria aberta
    if (!plano) return null;                                      // sem catálogo, sem explicação
    const alvo = AnaliseEdital.normalizar(nome);                  // normaliza o nome clicado
    return plano.topicos.find(t => {                              // procura o tópico equivalente
      const n = AnaliseEdital.normalizar(t.nome);                 // normaliza o do catálogo
      return n === alvo || n.indexOf(alvo) !== -1 || alvo.indexOf(n) !== -1; // igual ou contido
    }) || null;                                                   // devolve o tópico ou nada
  },

  // Monta o miolo da explicação: por que cai + como estudar (ou fallback) + aula
  explicacaoTopico(info, nome) {
    let html = '';                                                // acumulador de HTML
    if (info) {                                                   // achamos explicação pronta
      html += '<p><strong>' + T('ed_topico_porque') + ':</strong> ' + this.escape(info.porque) + '</p>'; // por que cai
      html += '<p><strong>' + T('ed_topico_como') + ':</strong> ' + this.escape(info.como) + '</p>'; // como estudar
    } else {                                                      // sem explicação — honesto
      html += '<p>' + T('ed_topico_generico') + '</p>';           // orientação genérica
    }
    // Link da aula: busca do YouTube com matéria + tópico
    const busca = (this.modalMateria ? this.modalMateria.rotulo + ' ' : '') + nome + ' resumo'; // termo de busca
    const url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(busca); // monta a busca
    html += '<a class="link-video" href="' + url + '" target="_blank" rel="noopener">' + T('sim_aula', { tema: this.escape(nome) }) + '</a>'; // link da aula
    return html;                                                  // devolve o miolo
  },

  // Abre o modal direto num tópico (clique no chip da seção "O que o edital pede")
  abrirModalTopico(rotuloMateria, nomeTopico) {
    this.iniciarModal();                                        // TEAM_004: garante a fiação em qualquer tela
    // Procura o plano da matéria nos dois catálogos (mesmo critério de abrirModalMateria)
    const plano = DadosTemas.concursos.concat(DadosTemas.vestibular) // junta os catálogos
      .find(t => t.materia === rotuloMateria);                     // acha pelo nome
    this.modalMateria = { rotulo: rotuloMateria, plano: plano };   // guarda o contexto aberto
    let html = '<h3 style="margin-top:0;padding-right:1.6rem">📌 ' + this.escape(nomeTopico) + '</h3>'; // título: o tópico
    html += '<p class="texto-suave" style="font-size:0.8rem;margin:0 0 0.7rem">' + (plano ? plano.icone + ' ' : '') + this.escape(rotuloMateria) + '</p>'; // matéria de origem
    html += '<div class="topico-explicacao">' + this.explicacaoTopico(this.infoDoTopico(nomeTopico), nomeTopico) + '</div>'; // explicação + aula
    html += '<button type="button" class="ver-mais link-todos-topicos" data-materia="' + this.escape(rotuloMateria) + '">' + T('ed_modal_todos', { materia: this.escape(rotuloMateria) }) + '</button>'; // volta aos tópicos
    document.getElementById('modal-conteudo').innerHTML = html;    // despeja no modal
    document.getElementById('modal-materia').classList.remove('oculto'); // mostra o modal
  },

  // Foge do HTML (segurança ao exibir texto do PDF na tela)
  escape(texto) {
    return String(texto)                                    // garante texto
      .replace(/&/g, '&amp;')                               // escapa "&"
      .replace(/</g, '&lt;')                                // escapa "<"
      .replace(/>/g, '&gt;')                                // escapa ">"
      .replace(/"/g, '&quot;')                              // escapa aspas
      .replace(/'/g, '&#39;');                              // escapa apóstrofo
  }
};
