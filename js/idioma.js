/* ============================================================
   GABARITO CAFÉ — js/idioma.js
   Sistema de idiomas do app: português (pt), inglês (en) e
   espanhol (es). Guarda a escolha no localStorage, troca os
   textos estáticos do HTML (atributo data-i18n) e oferece a
   função T("chave") para os textos montados pelo JavaScript.

   Observação importante: o CONTEÚDO de estudo (questões,
   resumos de matérias e pegadinhas das bancas) continua em
   português, porque são provas brasileiras. A INTERFACE toda
   é traduzida.
   ============================================================ */

// Função global de tradução: T('chave', { nome: 'Ana' })
function T(chave, dados) {
  return Idioma.texto(chave, dados);              // delega para o objeto Idioma
}

// Objeto global de idiomas
const Idioma = {

  // Chave onde a preferência de idioma fica salva
  CHAVE: 'gc_idioma',

  // Idioma em uso agora
  atual: 'pt',

  // Lista dos idiomas disponíveis (código, nome e bandeira)
  IDIOMAS: [
    { codigo: 'pt', nome: 'Português', bandeira: 'assets/bandeira-br.svg' }, // Brasil
    { codigo: 'en', nome: 'English', bandeira: 'assets/bandeira-us.svg' },   // EUA
    { codigo: 'es', nome: 'Español', bandeira: 'assets/bandeira-es.svg' }    // Espanha
  ],

  // ---------- Dicionário de textos da interface ----------
  DICIONARIO: {

    /* ================= PORTUGUÊS ================= */
    pt: {
      // Navegação e topo
      nav_dashboard: '🏠 Dashboard',                       // item do menu
      nav_edital: '📄 Meu edital',                          // item do menu
      nav_simulado: '📝 Simulado',                          // item do menu
      nav_bancas: '🕵️ Bancas',                              // item do menu
      nav_temas: '📚 Temas que caem',                       // item do menu
      app_slogan: 'estude com sabor de aprovação',          // slogan do login
      btn_sair: '↩ Sair da conta',                          // botão de sair
      foco_prefixo: '🎯 Foco: ',                            // prefixo do cargo focado
      tela_dashboard_t: 'Dashboard',                        // título do topo
      tela_dashboard_s: 'Seu progresso, fresquinho como café passado na hora.', // legenda
      tela_edital_t: 'Seu edital na mesa',                  // título do topo
      tela_edital_s: 'Importe o PDF e descubra cargos, matérias e por onde começar.', // legenda
      tela_simulado_t: 'Hora do simulado',                  // título do topo
      tela_simulado_s: 'Escolha o tamanho do desafio e bora.', // legenda
      tela_bancas_t: 'Conheça as bancas',                   // título do topo
      tela_bancas_s: 'Cada banca tem manias — aqui você aprende todas as pegadinhas.', // legenda
      tela_temas_t: 'O que mais cai',                       // título do topo
      tela_temas_s: 'Os temas campeões de concursos e vestibulares, com mapa de estudo.', // legenda
      saudacao_dia: 'Bom dia',                              // saudação da manhã
      saudacao_tarde: 'Boa tarde',                          // saudação da tarde
      saudacao_noite: 'Boa noite',                          // saudação da noite
      rodape: 'Feito com ☕ e muitas horas de estudo — Gabarito Café · seus dados ficam só com você', // rodapé
      rodape_priv: 'Política de Privacidade',              // TEAM_002: link da política (AdSense)
      ads_rotulo: 'Publicidade',                           // TEAM_002: rótulo acima dos anúncios
      tema_titulo: 'Alternar tema claro/escuro',            // dica do botão de tema
      idioma_titulo: 'Escolher idioma',                     // dica do seletor de idioma

      // Tela de login
      login_aba_entrar: 'Já tenho conta',                   // aba de login
      login_aba_criar: 'Criar conta',                       // aba de cadastro
      login_bemvindo: 'Bem-vindo(a) de volta ☕',            // título do login
      login_bemvindo_sub: 'Passa um café e bora revisar?',  // legenda do login
      login_email: 'E-mail',                                // rótulo do e-mail
      login_email_ph: 'voce@exemplo.com',                   // exemplo de e-mail
      login_senha: 'Senha',                                 // rótulo da senha
      login_senha_ph: 'Sua senha',                          // exemplo de senha
      login_btn: 'Entrar na cafeteria',                     // botão de entrar
      login_ou: 'ou',                                       // divisor
      login_visitante: '☕ Entrar como visitante (modo degustação)', // botão visitante
      login_aviso: '🔒 Contas e resultados ficam salvos apenas neste navegador (localStorage). Nada vai para servidores.', // aviso de privacidade
      cad_titulo: 'Criar conta grátis ☕',                   // título do cadastro
      cad_sub: 'Leva menos tempo que passar um espresso.',  // legenda do cadastro
      cad_nome: 'Seu nome',                                 // rótulo do nome
      cad_nome_ph: 'Como devemos te chamar?',               // exemplo de nome
      cad_senha_ph: 'No mínimo 4 caracteres',               // exemplo de senha
      cad_btn: 'Abrir minha conta',                         // botão de cadastrar
      login_destaque_1: '📄 Importe o edital e descubra cargos e matérias', // destaque 1
      login_destaque_2: '📝 Simulados de 5 a 50 questões, com correção comentada', // destaque 2
      login_destaque_3: '🎥 Errou? Veja a explicação e uma aula no YouTube', // destaque 3
      login_destaque_4: '🕵️ Aprenda as pegadinhas das bancas famosas', // destaque 4
      login_destaque_5: '📈 Acompanhe seu progresso no dashboard', // destaque 5
      frase_assinatura: '— o barista',                      // assinatura da frase

      // Erros de conta
      erro_nome_curto: 'Hmm, esse nome está curto demais. Como te chamam?', // nome inválido
      erro_email_invalido: 'Esse e-mail não parece certo. Confere aí?',     // e-mail inválido
      erro_senha_curta: 'Senha muito curta! Mínimo de 4 caracteres, combinado?', // senha curta
      erro_email_existe: 'Já tem uma conta com esse e-mail. Tenta entrar?', // e-mail duplicado
      erro_email_nao_encontrado: 'Não achei conta com esse e-mail. Bora criar uma?', // login sem conta
      erro_senha_errada: 'Senha errada... acontece! Tenta de novo.',        // senha incorreta

      // Avisos (torradas)
      toast_bemvindo: 'Bem-vindo(a) de volta, {nome}! ☕',   // login ok
      toast_conta_criada: 'Conta criada! A cafeteria é sua, {nome} ☕', // cadastro ok
      toast_visitante: 'Modo degustação ativado! Pode explorar à vontade ☕', // visitante
      toast_foco_guardado: 'Foco guardado! Bora mirar em {cargo} 🎯', // foco salvo
      toast_foco_limpo: 'Foco limpo. Escolhe um cargo quando quiser.', // foco removido
      toast_edital_ok: 'Edital na mesa! Olha o que encontrei 📄', // edital analisado
      toast_edital_erro: 'Não consegui ler o PDF. Tenta colar o texto abaixo!', // falha no PDF
      toast_cola_curto: 'Cola um pedaço maior do edital aí — precisa de conteúdo para analisar!', // texto curto
      toast_qtd: 'Escolhe a quantidade de questões primeiro! 😉', // sem quantidade
      toast_sim_banca: 'Escolhe uma banca no dropdown para montar o simulado!', // TEAM_005: sem banca escolhida
      toast_refazer: 'Bora refazer as {n} que escaparam! 🔄', // refazer erradas
      toast_idioma: 'Idioma: {idioma}',                     // idioma trocado
      toast_tema_escuro: 'Tema escuro ligado 🌙',           // tema escuro
      toast_tema_claro: 'Tema claro ligado ☀️',             // tema claro

      // Dashboard
      dash_ola: 'E aí, {nome}! ☕',                          // saudação com nome
      dash_ola_sem_nome: 'E aí! ☕',                         // saudação sem nome
      dash_atalho_edital_t: 'Importar edital',              // atalho
      dash_atalho_edital_s: 'Descubra cargos e matérias',   // legenda do atalho
      dash_atalho_sim_t: 'Fazer simulado',                  // atalho
      dash_atalho_sim_s: 'De 5 a 50 questões',              // legenda do atalho
      dash_atalho_bancas_t: 'Estudar bancas',               // atalho
      dash_atalho_bancas_s: 'As pegadinhas de cada uma',    // legenda do atalho
      dash_atalho_temas_t: 'Temas que caem',                // atalho
      dash_atalho_temas_s: 'O mapa das matérias',           // legenda do atalho
      dash_vazio_t: 'Sua xícara de progresso está vazia',   // estado vazio
      dash_vazio_x: 'Que tal o primeiro gole? Faz um simulado rapidinho — 5 questões bastam para começar.', // convite
      dash_vazio_btn: '☕ Fazer meu primeiro simulado',      // botão do estado vazio
      dash_stat_simulados: '📝 Simulados feitos',           // estatística
      dash_stat_aproveitamento: '🎯 Aproveitamento geral',  // estatística
      dash_stat_melhor: '🏆 Melhor resultado',              // estatística
      dash_stat_questoes: '✅ Questões respondidas',         // estatística
      dash_stat_sequencia: 'dias seguidos estudando',       // estatística
      dash_evolucao: '📈 Sua evolução',                     // seção
      dash_evolucao_sub: 'Percentual de acertos nos últimos simulados (o último é o {pct}% de hoje).', // legenda
      dash_materia: '📚 Como você está por matéria',        // seção
      dash_materia_vazio: 'Faz um simulado por matéria para ver seu desempenho aqui.', // sem dados
      dash_vaga: 'Espaço livre: faça mais simulados para preencher aqui', // dica do lugar vazio do gráfico

      // Edital
      ed_zona_t: 'Bota o edital na mesa',                   // título da zona de upload
      ed_zona_sub: 'Arraste o PDF do edital (ou manual do candidato) aqui, ou clique para escolher o arquivo.', // instrução
      ed_zona_aviso: 'O arquivo é lido no seu navegador — nada é enviado para a internet.', // privacidade
      ed_lendo: 'Passando o café... lendo seu edital ☕',    // status de leitura
      ed_erro_t: '😅 Não consegui ler esse PDF (pode estar protegido ou com layout complicado).', // erro
      ed_erro_sub: 'Plano B: abre o edital, copia o texto e cola no campo abaixo. A análise funciona do mesmo jeito!', // plano B
      ed_curto_aviso: 'Hmm, o texto estava curto demais para analisar. Tenta colar mais conteúdo (o edital inteiro, de preferência).', // texto curto
      ed_resumo: 'Seu edital em resumo',                    // título do resumo
      ed_sem_trechos: 'Não consegui separar seções claras, mas olha o que encontrei abaixo. 👇', // sem seções
      ed_cargos_t: '💼 Cargos/Vagas que encontrei',               // seção de cargos
      ed_cargos_vazio: 'Não consegui identificar cargos automaticamente (alguns editais usam tabelas complexas). Dá uma conferida no PDF e me diz o cargo no campo "Meu foco" lá embaixo. 👇', // sem cargos
      ed_materias_t: '📚 Matérias que identifiquei',        // seção de matérias
      ed_materias_vazio: 'Não identifiquei matérias nesse texto. Pode ser um edital com formatação diferente — confere o PDF e, se quiser, usa o campo de colar texto com o conteúdo programático.', // sem matérias
      ed_legenda: '✓ = temos questões prontas no simulado · 🕮 = ainda não temos questões dessa matéria (estude pelo edital)', // legenda dos chips
      ed_plano_t: '🗺️ Por onde começar (plano de estudo)',  // seção do plano
      ed_plano_vazio: 'Sem matérias detectadas, não consigo montar o plano ainda. Cola o conteúdo programático no campo abaixo! 📋', // plano vazio
      ed_plano_sem_resumo: 'Ainda não temos resumo pronto dessa matéria — estude direto pelo conteúdo programático do edital. Anota os tópicos e manda ver!', // matéria sem resumo
      ed_plano_comeca: 'Começa por:',                       // rótulo dos tópicos
      ed_btn_simulado: '📝 Gerar simulado com as matérias do edital', // ação principal
      ed_cola_t: 'Sem PDF? Cola o texto aqui',              // seção do plano B
      ed_cola_ph: 'Cole aqui o conteúdo do edital (conteúdo programático, cargos, requisitos...)', // exemplo
      ed_cola_btn: '🔍 Analisar texto colado',              // botão
      ed_foco_t: 'Meu foco 🎯',                             // seção do foco
      ed_foco_label: 'Qual cargo/vaga você vai disputar?',  // rótulo
      ed_foco_ph: 'Ex.: Técnico Administrativo, Auditor Fiscal, Medicina...', // exemplo
      ed_foco_btn: 'Guardar foco',                          // botão

      // Simulado
      sim_t: '☕ Monte seu simulado',                        // título
      sim_sub: 'Escolhe o tamanho do desafio. O café é por nossa conta.', // legenda
      sim_quantas: 'Quantas questões?',                     // rótulo
      sim_materia_l: 'Matéria',                             // rótulo do filtro
      sim_materia_todas: 'Todas as matérias (prova misturada)', // opção padrão
      sim_banca_l: 'Estilo de banca (pegadinhas)',          // rótulo do filtro
      sim_banca_todas: 'Todas as bancas (misturado)',       // opção padrão
      sim_nivel_l: 'Dificuldade (escolha uma ou mais)',     // rótulo do filtro de nível
      nivel_facil: 'Fácil',                                 // nome do nível fácil
      nivel_medio: 'Médio',                                 // nome do nível médio
      nivel_dificil: 'Difícil',                             // nome do nível difícil
      sim_ensino_l: 'Nível do concurso (escolha um ou mais)', // rótulo do filtro de ensino
      ensino_medio: 'Nível médio',                          // nome do nível médio
      ensino_superior: 'Nível superior',                    // nome do nível superior
      sim_edital_check: '🎯 Usar só as matérias do meu edital ({n} detectadas)', // filtro do edital
      sim_materias_l: 'Matérias (escolha uma ou mais)',     // rótulo da múltipla escolha
      sim_todas: 'Selecionar todas',                        // marcar todas as matérias
      sim_limpar: 'Limpar',                                 // limpar a seleção
      sim_sel_1: '1 matéria selecionada',                   // contador (singular)
      sim_sel_n: '{n} matérias selecionadas',               // contador (plural)
      sim_ligados: '🔗 Os números ao lado de cada opção se atualizam conforme os filtros escolhidos — e o que zerar fica desabilitado.', // TEAM_005: dica dos filtros ligados
      sim_disp: '☕ Com esses filtros temos {n} questões no estoque. ', // aviso de estoque
      sim_disp_poucas: 'Relaxa os filtros para liberar mais!', // estoque baixo
      sim_disp_ok: 'Escolhe o tamanho aí em cima.',         // estoque ok
      sim_btn_comecar: '▶️ Passar o café e começar',         // botão de início
      sim_dicas_t: '📝 Dicas antes de começar',             // seção de dicas
      sim_questao: 'Questão {n} de {total}',                // numeração
      sim_responder: 'Responder',                           // botão
      sim_certo: '✅ Mandou bem!',                          // feedback de acerto
      sim_errou: '❌ Ops! Você marcou a alternativa {letra}.', // feedback de erro
      sim_certa_e: 'A certa é a {letra}.',                  // gabarito
      sim_como: '🧭 Como fazer, passo a passo:',            // passo a passo
      sim_dica: '☕ Dica do barista: ',                      // dica
      sim_aula: '▶️ Assistir aula sobre "{tema}" no YouTube', // link do vídeo
      sim_proxima: 'Próxima questão →',                     // botão avançar
      sim_finalizar: '🏁 Finalizar e ver resultado',        // botão finalizar
      sim_resultado_t: '🏁 Simulado concluído!',            // título do resultado
      sim_resultado_refez: '🔄 Revisão concluída!',         // título do resultado (refez)
      sim_resumo: '{total} questões · {tempo} de prova',    // resumo do resultado
      sim_stat_acertos: '✅ Acertos',                       // estatística
      sim_stat_erros: '❌ Erros',                           // estatística
      sim_stat_aproveitamento: '🎯 Aproveitamento',         // estatística
      sim_stat_tempo: '⏱ Tempo de prova',                   // estatística
      sim_por_materia_t: '📚 Desempenho por matéria',       // seção
      sim_escorregou_t: '🔍 Onde você escorregou',          // seção
      sim_gabarito: 'gabarito: {letra}',                    // rótulo do gabarito
      sim_zero: 'Zero erros! Essa prova saiu perfeita, igual café coado na medida.', // parabéns
      sim_refazer: '🔄 Refazer as {n} que errei',           // botão
      sim_novo: '📝 Novo simulado',                         // botão
      sim_ir_dash: '🏠 Ver no dashboard',                   // botão
      sim_dicas_proxima_t: '📝 Dicas do barista para a próxima', // seção
      sim_frase_alta: 'Café forte e gabarito limpo! Você está voando! 🚀',   // desempenho 90%+
      sim_frase_boa: 'Bom demais! A aprovação está no seu radar. ☕',         // desempenho 70%+
      sim_frase_media: 'Na medida! Revise as erradas e sobe mais um degrau. 📈', // desempenho 50%+
      sim_frase_baixa: 'Todo barista queima o primeiro café. Revisa as erradas e volta! 💪', // abaixo de 50%

      // Bancas e temas
      bancas_intro: 'Conhecer a banca é metade do caminho: cada uma tem manias, e aqui a gente expõe todas. 🕵️', // introdução
      bancas_pegadinhas_t: 'Pegadinhas favoritas:',         // rótulo da lista
      bancas_cartao: 'Toque para ver as pegadinhas, a estratégia e montar um simulado desta banca', // TEAM_005: dica do cartão clicável
      bancas_modal_questoes: 'Esta banca tem {n} questões no banco do Gabarito Café.', // TEAM_005: contagem no modal
      bancas_modal_simulado: 'Montar simulado só com questões desta banca', // TEAM_005: botão do modal
      bancas_modal_sem: 'Esta banca ainda não tem questões no banco — mas as dicas já ajudam.', // TEAM_005: sem questões
      bancas_modal_aula: '▶️ Assistir vídeos sobre esta banca no YouTube', // TEAM_005: link de aulas
      conteudo_aviso: 'ℹ️ O conteúdo de estudo (resumos, pegadinhas e questões) é em português, porque são provas brasileiras.', // aviso de conteúdo
      temas_aba_concursos: '🎯 Concursos',                  // aba
      temas_aba_vest: '🎓 Vestibular',                      // aba
      temas_porque: 'Por quê: ',                             // rótulo do motivo
      temas_cartao: 'Clique no cartão para ver os tópicos da matéria', // TEAM_004: dica do box clicável

      // Tela de dicas
      nav_dicas: '💡 Dicas',                                 // item do menu
      tela_dicas_t: 'Dicas que valem ouro',                  // título do topo
      tela_dicas_s: 'O que separa quem passa de quem quase passa.', // legenda do topo
      dicas_intro: 'Não é só estudar muito: é estudar do jeito certo. Aqui vai o que a gente aprendeu na prática. 💡', // introdução
      dicas_prova_t: '📝 Dicas rápidas de prova',            // seção final

      // Edital — análise inteligente
      ed_confianca: 'Confiança da análise:',                 // rótulo da nota
      ed_confianca_aviso: 'Quanto mais alto, mais o robô entendeu do seu edital (e menos você precisa conferir no PDF).', // aviso
      ed_banca_t: '🏦 Banca organizadora',                   // seção
      ed_banca_ver: '🕵️ Ver as pegadinhas dessa banca',      // botão
      ed_banca_nenhuma: 'Não identifiquei a banca neste texto. Dá uma olhada no edital — saber a banca muda sua estratégia!', // aviso
      ed_banca_manual_l: 'Sabe qual é a banca? Digite o nome e eu te dou as dicas de prova:', // rótulo do campo manual
      ed_banca_manual_ph: 'Ex.: FCC, Cespe, Vunesp, FGV...', // placeholder do campo manual
      ed_banca_manual_btn: 'Analisar',                      // botão do campo manual
      ed_dicas_t: 'Dicas da',                               // título das dicas (nome da banca vem depois)
      ed_banca_desconhecida: 'Essa banca não está no meu catálogo — então aqui vão as dicas que valem para qualquer banca:', // aviso do fallback
      ed_sim_banca_l: 'Fazer simulado só com questões de uma banca (opcional):', // TEAM_005: rótulo do dropdown
      ed_sim_banca_sel: 'Escolha a banca…',               // TEAM_005: opção vazia do dropdown
      ed_sim_banca_btn: 'Montar simulado',                // TEAM_005: botão do dropdown
      ed_ver_mais: 'Ver mais…',                         // expande o item do plano
      ed_ver_menos: 'Ver menos',                        // recolhe o item do plano
      ed_modal_dica: 'Toque num tópico para abrir a explicação e uma aula de vídeo', // dica de uso do modal
      ed_modal_edital: 'Tópicos que o edital pede', // rótulo da lista do edital
      ed_modal_campeoes: 'Os que mais caem',        // rótulo da lista do catálogo
      ed_modal_todos: '← Todos os tópicos de {materia}', // TEAM_003: volta da explicação à lista da matéria
      ed_topico_porque: 'Por que cai',              // explicação: importância do tópico
      ed_topico_como: 'Como estudar',               // explicação: estratégia do tópico
      ed_topico_generico: 'Ainda não tenho um resumo pronto deste tópico — resolva questões dele e confira a aula abaixo:', // fallback sem resumo
      modal_fechar: 'Fechar',                       // título do botão X do modal
      ed_datas_t: '📅 Datas importantes',                    // seção
      ed_sem_datas: 'Não encontrei datas no texto. Confere no PDF do edital!', // aviso
      ed_data_inscricoes: 'Inscrições',                      // rótulo
      ed_data_prova: 'Data da prova',                        // rótulo
      ed_data_taf: 'Teste físico (TAF)',                     // rótulo
      ed_data_resultado: 'Resultado final',                  // rótulo
      ed_contagem: 'Contagem regressiva',                    // rótulo
      ed_faltam: 'Faltam {dias} dias para a prova!',         // contador
      ed_prova_hoje: 'É hoje! Respira fundo e boa prova! 🍀', // dia da prova
      ed_prova_passou: 'A data da prova já passou — confere o edital.', // já passou
      ed_numeros_t: '🔢 Os números do edital',               // seção
      ed_num_vagas: 'Vagas',                                 // rótulo
      ed_num_salario: 'Salário',                             // rótulo
      ed_num_taxa: 'Taxa de inscrição',                      // rótulo
      ed_num_questoes: 'Questões da prova',                  // rótulo
      ed_num_validade: 'Validade do concurso',               // rótulo
      ed_num_horas: 'Carga horária semanal',                 // rótulo
      ed_semana: 'semana',                                   // unidade
      ed_num_cr: 'Cadastro reserva',                         // rótulo
      ed_cr_sim: '✓ Previsto',                               // valor
      ed_numeros_vazio: 'Não encontrei os números (vagas, salário...) neste texto.', // aviso
      ed_anos: 'anos',                                       // unidade
      ed_meses: 'meses',                                     // unidade
      ed_escolaridade_t: '🎓 Escolaridade exigida',          // seção
      ed_requisitos_t: '🧾 Requisitos detectados',           // seção
      ed_programa_t: '📖 O que o edital pede em cada matéria', // seção
      ed_programa_sub: 'Estes são os tópicos que o próprio edital lista. Comece pelos que você domina menos:', // explicação
      ed_programa_vazio: 'Não consegui separar o conteúdo programático por matéria. Cola o texto do edital no campo abaixo que eu tento de novo!', // aviso
      ed_plano_sem_data: 'Não achei a data da prova no texto — cola o edital aqui que eu monto o cronograma do estudo.', // orientação
      ed_plano_dias_1: 'Faltam {dias} dias: reta final! Priorize revisão, caderno de erros e simulados cronometrados.', // reta final
      ed_plano_dias_2: 'Faltam {dias} dias: dá tempo de fechar o edital com folga. Teoria + questões todos os dias.', // meio do caminho
      ed_plano_dias_3: 'Faltam {dias} dias: ainda dá muito tempo. Monte a base com calma, sem pular etapas.', // bastante tempo
      ed_plano_passou: 'A prova já passou (ou é hoje). Boa sorte — e bora pensar na próxima!', // já passou

      // Dashboard — recomendação inteligente
      dash_fraco_t: '🎯 Onde focar agora',                   // seção
      dash_fraco_txt: 'Seu ponto mais fraco é {materia}, com {pct}% de acerto. Vamos treinar?', // diagnóstico
      dash_fraco_btn: 'Treinar {materia} (10 questões)',     // botão
      dash_fraco_bom: 'Você está indo bem em todas as matérias treinadas! Que tal aumentar o número de questões no próximo simulado?', // elogio
      dash_fraco_pouco: 'Responda algumas questões em cada matéria e eu descubro aqui onde você precisa focar. 🕵️', // sem dados
      toast_treino: 'Bora treinar {materia}! 📝',            // aviso

      // PWA — instalação do app
      pwa_instalar: '📲 Instalar o app',                     // TEAM_002: botão de instalação
      pwa_ios: 'No iPhone: toque em Compartilhar ⬆ e depois em "Adicionar à Tela de Início".', // TEAM_002: instrução iOS
      toast_instalado: 'Gabarito Café instalado! Agora é só abrir pelo ícone ☕', // TEAM_002: aviso

      // Revisão — tela das erradas + lembretes
      nav_revisao: '🔁 Revisão',                             // TEAM_002: item do menu
      tela_revisao_t: 'Hora da revisão',                     // TEAM_002: título do topo
      tela_revisao_s: 'As questões que escaparam voltam aqui até você dominar.', // TEAM_002: legenda
      rev_t: 'Seu caderno de erros ☕',                       // TEAM_002: título do cartão
      rev_sub: 'Tudo que você errou nos simulados espera aqui uma segunda dose.', // TEAM_002: legenda
      rev_pendentes: '{n} questões esperando revisão',       // TEAM_002: contagem
      rev_vazio: 'Nenhuma questão pendente — você está em dia! ✅', // TEAM_002: resumo zerado
      rev_vazio_t: 'Caderno limpinho!',                      // TEAM_002: título do vazio
      rev_vazio_x: 'Você não tem questões erradas esperando revisão. Faz um simulado e o que escapar aparece aqui.', // TEAM_002: convite
      rev_vazio_btn: '📝 Fazer um simulado',                 // TEAM_002: CTA do vazio
      rev_btn_nova: '🔁 Nova revisão ({n})',                 // TEAM_002: monta simulado das erradas
      rev_btn_detalhes: '🔍 Detalhes',                       // TEAM_002: abre a lista explicada
      rev_lembrar: 'Lembrar em:',                            // TEAM_002: rótulo dos lembretes
      rev_dias: '{n} dias',                                  // TEAM_002: rótulo de cada prazo
      rev_vencido: '⏰ Tá na hora de revisar! {n} questões esperando você.', // TEAM_002: lembrete vencido
      rev_toast_lembrete: 'Anotado! Te lembro em {n} dias. 📅', // TEAM_002: lembrete agendado
      rev_toast_lembrete_off: 'Lembrete de {n} dias desligado.', // TEAM_002: lembrete cancelado
      rev_toast_nova: 'Revisão na mesa: {n} questões! 🔁',   // TEAM_002: revisão montada
      rev_detalhes_t: 'O que precisa melhorar',              // TEAM_002: seção de detalhes
      rev_errou: 'errou {n}×',                               // TEAM_002: selo de repetição do erro
      sim_ir_revisao: '🔁 Revisão',                           // TEAM_002: atalho na tela de resultado

      nav_cadernos: '📁 Cadernos',
      nav_pomodoro: '☕ Pomodoro',
      tela_cadernos_t: 'Cadernos & Favoritos',
      tela_cadernos_s: 'Organize suas questões salvas em pastas personalizadas.',
      tela_pomodoro_t: 'Timer Pomodoro "Moendo o Café"',
      tela_pomodoro_s: '25 min de foco, 5 min de cafézinho. Mantenha o ritmo.',

      sim_historico_l: 'Filtros por histórico de resolução',
      sim_ineditas_l: 'Apenas inéditas (nunca respondi)',
      sim_erradas_l: 'Apenas questões que já errei',

      anot_grifar: 'Grifar seleção',
      anot_limpar_grifos: 'Limpar grifos',
      anot_titulo: 'Bloco de Anotações & Bizus',
      anot_ph: 'Escreva aqui seus bizus, macetes ou resumos sobre esta questão...',
      anot_toast_grifado: 'Trecho grifado! ✏️',
      anot_toast_selecione: 'Selecione um trecho do texto primeiro para grifar! 🔍',

      pomo_t: 'Timer Pomodoro',
      pomo_sub: '25 min de foco = Passando o café · 5 min de descanso = Pausa para o cafézinho',
      pomo_modo_foco: 'Passando o café (25m)',
      pomo_modo_descanso: 'Pausa para o cafézinho (5m)',
      pomo_modo_longo: 'Café Especial (15m)',
      pomo_iniciar: 'Iniciar',
      pomo_pausar: 'Pausar',
      pomo_resetar: 'Resetar',
      pomo_som_t: 'Sons Ambientais de Cafeteria',
      pomo_som_sub: 'Sintetizado via Web Audio API (sem arquivos externos)',
      pomo_som_on: 'Som Ligado',
      pomo_som_off: 'Som Desligado',
      pomo_ciclos: '{n} ciclos de foco concluídos',
      pomo_toast_foco_fim: 'Passou o café! Hora da pausa para o cafézinho! ☕',
      pomo_toast_descanso_fim: 'Pausa concluída! Bora passar mais um café? ☕',

      fidelidade_toast_carimbo: '☕ Carimbo #{n} de {total} adicionado ao Cartão Fidelidade!',
      fidelidade_relatorio_t: 'Cartão Fidelidade Completo!',
      fidelidade_relatorio_sub: 'Você completou a sua {n}ª cartela de estudos! Parabéns pela dedicação! 🎉',
      fidelidade_relatorio_premio_t: '🏆 Relatório Especial & Conquistas',
      fidelidade_relatorio_premio_txt: 'A constância é a chave da aprovação. Você provou que estuda todos os dias com ritmo de barista.',
      fidelidade_conquistas_t: 'Suas Conquistas',
      fidelidade_btn_continuar: 'Continuar estudando',
      fidelidade_cartela_t: 'Cartão Fidelidade de Estudos',
      fidelidade_cartela_sub: '{n} de {total} carimbos nesta cartela. Cada simulado ou revisão dá +1 carimbo!',
      fidelidade_completas: '{n} cartelas completadas',

      cad_fav_btn: 'Favoritar',
      cad_toast_pasta_criada: 'Pasta "{nome}" criada! 📁',
      cad_toast_padrao: 'A pasta Favoritos não pode ser excluída.',
      cad_toast_pasta_excluida: 'Pasta excluída com sucesso.',
      cad_toast_salvo: 'Questão salva na pasta "{pasta}"! ⭐',
      cad_toast_ja_existe: 'Esta questão já está nesta pasta.',
      cad_toast_removido: 'Questão removida da pasta.',
      cad_salvar_t: 'Salvar Questão em Caderno',
      cad_salvar_sub: 'Escolha em qual pasta/caderno deseja guardar esta questão:',
      cad_escolher_pasta: 'Escolha a pasta:',
      cad_btn_salvar: 'Salvar no Caderno',
      cad_criar_nova: 'Ou crie uma nova pasta:',
      cad_ph_nova: 'Nome da nova pasta...',
      cad_btn_criar: 'Criar Pasta',
      cad_t: 'Cadernos Personalizados & Favoritos',
      cad_sub: 'Organize suas questões salvas e monte simulados focados nelas.',
      cad_total_questoes: '{n} questões salvas neste caderno',
      cad_iniciar_simulado: 'Fazer simulado deste caderno',
      cad_excluir_pasta: 'Excluir pasta',

      ev_titulo: 'Edital Verticalizado Interativo',
      ev_concluido: 'concluído',
      ev_sub: 'Acompanhe seu status em cada tópico do edital.',
      ev_toast_atualizado: 'Status do tópico atualizado! 📝',
      comp_titulo: 'Comparador de Editais',
      comp_sub: 'Compare o edital anterior com o atual e veja o que mudou.',
      comp_edital_a: 'Edital A (ex: Anterior)',
      comp_edital_b: 'Edital B (ex: Atual)',
      comp_ph_a: 'Cole aqui o texto do edital anterior...',
      comp_ph_b: 'Cole aqui o texto do edital atual...',
      comp_btn_comparar: 'Comparar Editais',
      comp_toast_curto: 'Cole um texto maior em ambos os editais para comparar!',
      comp_resumo_t: 'Resultado da Comparação',
      comp_banca: 'Banca:',
      comp_vagas: 'Vagas:',
      comp_mat_novas: 'Matérias Novas',
      comp_mat_removidas: 'Matérias Removidas',
      comp_mat_mantidas: 'Matérias Mantidas & Comparação de Tópicos',
      comp_nenhuma: 'Nenhuma matéria nesta categoria.',
      comp_topicos_iguais: 'Tópicos sem alterações significativas identificadas.',

      backup_t: 'Exportação & Importação de Backup',
      backup_sub: 'Guarde seus dados em um arquivo JSON e restaure em outro navegador.',
      backup_btn_exportar: 'Exportar Backup (JSON)',
      backup_btn_importar: 'Importar Backup',
      backup_toast_exportado: 'Backup exportado com sucesso! 💾',
      backup_toast_erro_export: 'Erro ao exportar backup.',
      backup_toast_invalido: 'Arquivo de backup inválido.',
      backup_toast_sucesso: 'Backup de {n} registros restaurado com sucesso! 🔄',
      backup_toast_erro_import: 'Erro ao importar backup.',

      wrap_titulo: 'Seu Coffee Wrap',
      wrap_sub: 'Gere uma imagem estilizada com seu progresso e compartilhe!',
      wrap_btn_baixar: 'Baixar Imagem (PNG)',
      wrap_btn_copiar: 'Copiar Imagem',
      wrap_toast_copiado: 'Imagem copiada para a área de transferência! 📋',
      wrap_toast_sem_suporte: 'Navegador não suporta copiar imagem direto. Use o botão Baixar Imagem!',
      wrap_card_t: 'Card de Desempenho ("Coffee Wrap")',
      wrap_card_sub: 'Compartilhe suas conquistas e estatísticas da semana nas redes sociais.',
      wrap_card_btn: 'Gerar Coffee Wrap',

      // Exportar PDF — folha impressa do simulado e da revisão
      pdf_btn: '📄 Exportar PDF',                             // TEAM_007: botão de exportar
      pdf_toast: 'Folha pronta! Na janela de impressão, escolha "Salvar como PDF". 📄', // TEAM_007: instrução de salvamento
      pdf_titulo_sim: 'Simulado comentado',                   // TEAM_007: título da folha do simulado
      pdf_titulo_rev: 'Caderno de erros para revisão',        // TEAM_007: título da folha da revisão
      pdf_eyebrow: 'Material de estudo',                      // TEAM_007: etiqueta de topo da folha
      pdf_questao: 'Questão',                                 // TEAM_007: rótulo do número da questão
      pdf_kpi_pendentes: 'pendentes de revisão',              // TEAM_007: rótulo do tile de pendentes
      pdf_secao: '📖 Questões, explicações e aulas',           // TEAM_007: título da seção de questões
      pdf_acertou: 'você acertou',                            // TEAM_007: selo de acerto na folha
      pdf_errou: 'você errou',                                // TEAM_007: selo de erro na folha
      pdf_gabarito_tag: 'gabarito',                           // TEAM_007: etiqueta na alternativa certa
      pdf_sua_resposta: 'sua resposta',                       // TEAM_007: etiqueta na alternativa marcada
      pdf_o_que_viu: 'O que foi visto',                       // TEAM_007: título da caixa de explicação
      pdf_legenda: 'Legenda: ✔ gabarito · ✖ sua resposta',    // TEAM_007: legenda das marcas da folha
      pdf_qr_legenda: 'Aponte a câmera do celular para abrir a aula', // TEAM_007: legenda do QR code
      pdf_estudante: 'Estudante: {nome}',                     // TEAM_007: linha do estudante na folha
      pdf_gerado: 'Gerado em {data}'                          // TEAM_007: data de geração na folha
    },

    /* ================= ENGLISH ================= */
    en: {
      // Navigation
      nav_dashboard: '🏠 Dashboard',
      nav_edital: '📄 My exam notice',
      nav_simulado: '📝 Mock test',
      nav_bancas: '🕵️ Exam boards',
      nav_temas: '📚 Hot topics',
      app_slogan: 'study with a taste of approval',
      btn_sair: '↩ Sign out',
      foco_prefixo: '🎯 Goal: ',
      tela_dashboard_t: 'Dashboard',
      tela_dashboard_s: 'Your progress, fresh as a just-brewed coffee.',
      tela_edital_t: 'Your exam notice on the table',
      tela_edital_s: 'Upload the PDF and find out the positions, subjects and where to start.',
      tela_simulado_t: 'Mock test time',
      tela_simulado_s: 'Pick the size of the challenge and let’s go.',
      tela_bancas_t: 'Meet the exam boards',
      tela_bancas_s: 'Every board has its quirks — here you learn all their traps.',
      tela_temas_t: 'What shows up the most',
      tela_temas_s: 'The top topics in Brazilian public exams, with a study map.',
      saudacao_dia: 'Good morning',
      saudacao_tarde: 'Good afternoon',
      saudacao_noite: 'Good evening',
      rodape: 'Made with ☕ and many study hours — Gabarito Café · your data stays with you',
      rodape_priv: 'Privacy Policy',                       // TEAM_002: privacy link (AdSense)
      ads_rotulo: 'Advertisement',                         // TEAM_002: label above ads
      tema_titulo: 'Toggle light/dark theme',
      idioma_titulo: 'Choose language',

      // Login
      login_aba_entrar: 'I have an account',
      login_aba_criar: 'Create account',
      login_bemvindo: 'Welcome back ☕',
      login_bemvindo_sub: 'Brew a coffee and let’s review?',
      login_email: 'Email',
      login_email_ph: 'you@example.com',
      login_senha: 'Password',
      login_senha_ph: 'Your password',
      login_btn: 'Enter the coffee shop',
      login_ou: 'or',
      login_visitante: '☕ Enter as guest (tasting mode)',
      login_aviso: '🔒 Accounts and results are saved only in this browser (localStorage). Nothing goes to servers.',
      cad_titulo: 'Create a free account ☕',
      cad_sub: 'Takes less time than pulling an espresso.',
      cad_nome: 'Your name',
      cad_nome_ph: 'What should we call you?',
      cad_senha_ph: 'At least 4 characters',
      cad_btn: 'Create my account',
      login_destaque_1: '📄 Upload the exam notice and discover positions and subjects',
      login_destaque_2: '📝 Mock tests from 5 to 50 questions, with explained answers',
      login_destaque_3: '🎥 Got it wrong? See the explanation and a YouTube lesson',
      login_destaque_4: '🕵️ Learn the traps of the famous exam boards',
      login_destaque_5: '📈 Track your progress on the dashboard',
      frase_assinatura: '— the barista',

      // Account errors
      erro_nome_curto: 'Hmm, that name is too short. What do people call you?',
      erro_email_invalido: 'That email doesn’t look right. Can you check it?',
      erro_senha_curta: 'Password too short! At least 4 characters, deal?',
      erro_email_existe: 'There’s already an account with this email. Try signing in?',
      erro_email_nao_encontrado: 'No account found with this email. Shall we create one?',
      erro_senha_errada: 'Wrong password... it happens! Try again.',

      // Toasts
      toast_bemvindo: 'Welcome back, {nome}! ☕',
      toast_conta_criada: 'Account created! The coffee shop is yours, {nome} ☕',
      toast_visitante: 'Tasting mode on! Feel free to explore ☕',
      toast_foco_guardado: 'Goal saved! Let’s aim at {cargo} 🎯',
      toast_foco_limpo: 'Goal cleared. Pick a position whenever you want.',
      toast_edital_ok: 'Exam notice on the table! Look what I found 📄',
      toast_edital_erro: 'I couldn’t read that PDF. Try pasting the text below!',
      toast_cola_curto: 'Paste a bigger chunk of the notice — I need content to analyse!',
      toast_qtd: 'Pick the number of questions first! 😉',
      toast_sim_banca: 'Pick a board in the dropdown to build the mock test!', // TEAM_005
      toast_refazer: 'Let’s redo the {n} you missed! 🔄',
      toast_idioma: 'Language: {idioma}',
      toast_tema_escuro: 'Dark theme on 🌙',
      toast_tema_claro: 'Light theme on ☀️',

      // Dashboard
      dash_ola: 'Hey, {nome}! ☕',
      dash_ola_sem_nome: 'Hey there! ☕',
      dash_atalho_edital_t: 'Upload exam notice',
      dash_atalho_edital_s: 'Discover positions and subjects',
      dash_atalho_sim_t: 'Take a mock test',
      dash_atalho_sim_s: 'From 5 to 50 questions',
      dash_atalho_bancas_t: 'Study the boards',
      dash_atalho_bancas_s: 'Each one’s traps',
      dash_atalho_temas_t: 'Hot topics',
      dash_atalho_temas_s: 'The subject map',
      dash_vazio_t: 'Your progress cup is empty',
      dash_vazio_x: 'How about the first sip? Take a quick mock test — 5 questions are enough to start.',
      dash_vazio_btn: '☕ Take my first mock test',
      dash_stat_simulados: '📝 Mock tests taken',
      dash_stat_aproveitamento: '🎯 Overall accuracy',
      dash_stat_melhor: '🏆 Best result',
      dash_stat_questoes: '✅ Questions answered',
      dash_stat_sequencia: 'days studying in a row',
      dash_evolucao: '📈 Your progress',
      dash_evolucao_sub: 'Accuracy in your latest mock tests (the last one is today’s {pct}%).',
      dash_materia: '📚 How you are doing by subject',
      dash_materia_vazio: 'Take a mock test by subject to see your performance here.',
      dash_vaga: 'Free slot: take more mock tests to fill it',

      // Exam notice
      ed_zona_t: 'Put the exam notice on the table',
      ed_zona_sub: 'Drag the notice PDF (or candidate handbook) here, or click to choose the file.',
      ed_zona_aviso: 'The file is read inside your browser — nothing is sent to the internet.',
      ed_lendo: 'Brewing... reading your exam notice ☕',
      ed_erro_t: '😅 I couldn’t read that PDF (it may be protected or have a tricky layout).',
      ed_erro_sub: 'Plan B: open the notice, copy the text and paste it in the field below. The analysis works the same way!',
      ed_curto_aviso: 'Hmm, that text was too short to analyse. Try pasting more content (the whole notice, preferably).',
      ed_resumo: 'Your exam notice in short',
      ed_sem_trechos: 'I couldn’t separate clear sections, but look what I found below. 👇',
      ed_cargos_t: '💼 Positions/Vacancies I found',
      ed_cargos_vazio: 'I couldn’t identify positions automatically (some notices use complex tables). Check the PDF and tell me your position in the "My goal" field below. 👇',
      ed_materias_t: '📚 Subjects I identified',
      ed_materias_vazio: 'I didn’t identify subjects in this text. It may be a notice with a different layout — check the PDF and, if you want, paste the syllabus in the text field.',
      ed_legenda: '✓ = we have questions ready in the mock test · 🕮 = no questions for this subject yet (study from the notice)',
      ed_plano_t: '🗺️ Where to start (study plan)',
      ed_plano_vazio: 'Without detected subjects I can’t build the plan yet. Paste the syllabus in the field below! 📋',
      ed_plano_sem_resumo: 'We don’t have a summary for this subject yet — study straight from the notice syllabus. Write down the topics and go for it!',
      ed_plano_comeca: 'Start with:',
      ed_btn_simulado: '📝 Generate a mock test with the notice subjects',
      ed_cola_t: 'No PDF? Paste the text here',
      ed_cola_ph: 'Paste the notice content here (syllabus, positions, requirements...)',
      ed_cola_btn: '🔍 Analyse pasted text',
      ed_foco_t: 'My goal 🎯',
      ed_foco_label: 'Which position/vacancy are you going for?',
      ed_foco_ph: 'E.g.: Administrative Technician, Tax Auditor, Medicine...',
      ed_foco_btn: 'Save goal',

      // Mock test
      sim_t: '☕ Build your mock test',
      sim_sub: 'Pick the size of the challenge. The coffee is on us.',
      sim_quantas: 'How many questions?',
      sim_materia_l: 'Subject',
      sim_materia_todas: 'All subjects (mixed test)',
      sim_banca_l: 'Exam board style (traps)',
      sim_banca_todas: 'All boards (mixed)',
      sim_nivel_l: 'Difficulty (pick one or more)',
      nivel_facil: 'Easy',
      nivel_medio: 'Medium',
      nivel_dificil: 'Hard',
      sim_ensino_l: 'Exam level (pick one or more)',
      ensino_medio: 'High-school level',
      ensino_superior: 'Higher-ed level',
      sim_edital_check: '🎯 Use only my notice subjects ({n} detected)',
      sim_materias_l: 'Subjects (pick one or more)',
      sim_todas: 'Select all',
      sim_limpar: 'Clear',
      sim_sel_1: '1 subject selected',
      sim_sel_n: '{n} subjects selected',
      sim_ligados: '🔗 The numbers next to each option update as you pick filters — whatever hits zero gets disabled.', // TEAM_005: linked filters hint
      sim_disp: '☕ With these filters we have {n} questions in stock. ',
      sim_disp_poucas: 'Loosen the filters to unlock more!',
      sim_disp_ok: 'Pick the size up there.',
      sim_btn_comecar: '▶️ Brew the coffee and start',
      sim_dicas_t: '📝 Tips before you start',
      sim_questao: 'Question {n} of {total}',
      sim_responder: 'Answer',
      sim_certo: '✅ Nice one!',
      sim_errou: '❌ Oops! You picked option {letra}.',
      sim_certa_e: 'The right one is {letra}.',
      sim_como: '🧭 How to solve it, step by step:',
      sim_dica: '☕ Barista’s tip: ',
      sim_aula: '▶️ Watch a lesson on "{tema}" on YouTube',
      sim_proxima: 'Next question →',
      sim_finalizar: '🏁 Finish and see the result',
      sim_resultado_t: '🏁 Mock test finished!',
      sim_resultado_refez: '🔄 Review finished!',
      sim_resumo: '{total} questions · {tempo} of test',
      sim_stat_acertos: '✅ Correct',
      sim_stat_erros: '❌ Wrong',
      sim_stat_aproveitamento: '🎯 Accuracy',
      sim_stat_tempo: '⏱ Time on test',
      sim_por_materia_t: '📚 Performance by subject',
      sim_escorregou_t: '🔍 Where you slipped',
      sim_gabarito: 'answer: {letra}',
      sim_zero: 'Zero mistakes! That test came out perfect, like a well-brewed coffee.',
      sim_refazer: '🔄 Redo the {n} I missed',
      sim_novo: '📝 New mock test',
      sim_ir_dash: '🏠 See it on the dashboard',
      sim_dicas_proxima_t: '📝 Barista’s tips for next time',
      sim_frase_alta: 'Strong coffee and a clean answer sheet! You’re flying! 🚀',
      sim_frase_boa: 'Really good! Approval is on your radar. ☕',
      sim_frase_media: 'Right on track! Review the misses and climb one more step. 📈',
      sim_frase_baixa: 'Every barista burns the first coffee. Review the misses and come back! 💪',

      // Boards and topics
      bancas_intro: 'Knowing the exam board is half the way: each one has quirks, and here we expose them all. 🕵️',
      bancas_pegadinhas_t: 'Favourite traps:',
      bancas_cartao: 'Tap to see the traps, the strategy and build a mock exam with this board', // TEAM_005: clickable card hint
      bancas_modal_questoes: 'This board has {n} questions in the Gabarito Café bank.', // TEAM_005: count in the modal
      bancas_modal_simulado: 'Build a mock exam with only this board’s questions', // TEAM_005: modal button
      bancas_modal_sem: 'This board has no questions in the bank yet — but the tips already help.', // TEAM_005: no questions
      bancas_modal_aula: '▶️ Watch videos about this board on YouTube', // TEAM_005: lessons link
      conteudo_aviso: 'ℹ️ The study content (summaries, traps and questions) is in Portuguese, because these are Brazilian exams.',
      temas_aba_concursos: '🎯 Public exams',
      temas_aba_vest: '🎓 University entrance',
      temas_porque: 'Why: ',
      temas_cartao: 'Click the card to see the subject topics', // TEAM_004: clickable box hint

      // Tips screen
      nav_dicas: '💡 Tips',
      tela_dicas_t: 'Tips worth gold',
      tela_dicas_s: 'What separates those who pass from those who almost pass.',
      dicas_intro: 'It is not only about studying a lot: it is about studying the right way. Here is what we learned in practice. 💡',
      dicas_prova_t: '📝 Quick test-day tips',

      // Exam notice — smart analysis
      ed_confianca: 'Analysis confidence:',
      ed_confianca_aviso: 'The higher it is, the more the robot understood your notice (and the less you need to double-check the PDF).',
      ed_banca_t: '🏦 Exam board',
      ed_banca_ver: '🕵️ See this board’s traps',
      ed_banca_nenhuma: 'I could not identify the board in this text. Take a look at the notice — knowing the board changes your strategy!',
      ed_banca_manual_l: 'Know the board? Type its name and I’ll give you exam tips:',
      ed_banca_manual_ph: 'E.g.: FCC, Cespe, Vunesp, FGV...',
      ed_banca_manual_btn: 'Analyze',
      ed_dicas_t: 'Tips for',
      ed_banca_desconhecida: 'This board is not in my catalog — so here are tips that work for any board:',
      ed_sim_banca_l: 'Take a mock test with questions from one board (optional):', // TEAM_005
      ed_sim_banca_sel: 'Choose the board…',              // TEAM_005
      ed_sim_banca_btn: 'Build mock test',                // TEAM_005
      ed_ver_mais: 'See more…',
      ed_ver_menos: 'See less',
      ed_modal_dica: 'Tap a topic to open the explanation and a video lesson',
      ed_modal_edital: 'Topics the notice asks for',
      ed_modal_campeoes: 'Most frequent ones',
      ed_modal_todos: '← All topics in {materia}',
      ed_topico_porque: 'Why it appears',
      ed_topico_como: 'How to study',
      ed_topico_generico: 'I don’t have a ready summary for this topic yet — solve questions on it and check the lesson below:',
      modal_fechar: 'Close',
      ed_datas_t: '📅 Important dates',
      ed_sem_datas: 'I found no dates in the text. Check the notice PDF!',
      ed_data_inscricoes: 'Applications',
      ed_data_prova: 'Test date',
      ed_data_taf: 'Physical test (TAF)',
      ed_data_resultado: 'Final result',
      ed_contagem: 'Countdown',
      ed_faltam: '{dias} days to go until the test!',
      ed_prova_hoje: 'It is today! Take a deep breath and good luck! 🍀',
      ed_prova_passou: 'The test date has already passed — check the notice.',
      ed_numeros_t: '🔢 The notice numbers',
      ed_num_vagas: 'Vacancies',
      ed_num_salario: 'Salary',
      ed_num_taxa: 'Application fee',
      ed_num_questoes: 'Test questions',
      ed_num_validade: 'Validity of the exam',
      ed_num_horas: 'Weekly workload',
      ed_semana: 'week',
      ed_num_cr: 'Reserve list',
      ed_cr_sim: '✓ Yes',
      ed_numeros_vazio: 'I could not find the numbers (vacancies, salary...) in this text.',
      ed_anos: 'years',
      ed_meses: 'months',
      ed_escolaridade_t: '🎓 Required education',
      ed_requisitos_t: '🧾 Requirements spotted',
      ed_programa_t: '📖 What the notice asks in each subject',
      ed_programa_sub: 'These are the topics the notice itself lists. Start with the ones you master the least:',
      ed_programa_vazio: 'I could not split the syllabus by subject. Paste the notice text in the field below and I will try again!',
      ed_plano_sem_data: 'I did not find the test date in the text — paste the notice here and I will build your study schedule.',
      ed_plano_dias_1: '{dias} days to go: final stretch! Prioritise review, your mistake notebook and timed mock tests.',
      ed_plano_dias_2: '{dias} days to go: enough time to cover the whole notice comfortably. Theory + questions every day.',
      ed_plano_dias_3: '{dias} days to go: plenty of time. Build your base calmly, without skipping steps.',
      ed_plano_passou: 'The test has already happened (or is today). Good luck — and let’s plan the next one!',

      // Dashboard — smart recommendation
      dash_fraco_t: '🎯 Where to focus now',
      dash_fraco_txt: 'Your weakest spot is {materia}, with {pct}% accuracy. Shall we train?',
      dash_fraco_btn: 'Train {materia} (10 questions)',
      dash_fraco_bom: 'You are doing well in every subject you practised! How about increasing the number of questions in your next mock test?',
      dash_fraco_pouco: 'Answer a few questions in each subject and I will figure out here where you need to focus. 🕵️',
      toast_treino: 'Let’s train {materia}! 📝',

      // PWA — app installation
      pwa_instalar: '📲 Install the app',                    // TEAM_002: install button
      pwa_ios: 'On iPhone: tap Share ⬆ and then "Add to Home Screen".', // TEAM_002: iOS instructions
      toast_instalado: 'Gabarito Café installed! Just open it from the icon ☕', // TEAM_002: toast

      // Review — missed questions screen + reminders
      nav_revisao: '🔁 Review',                              // TEAM_002: menu item
      tela_revisao_t: 'Review time',                         // TEAM_002: top title
      tela_revisao_s: 'The questions that slipped away come back here until you master them.', // TEAM_002: subtitle
      rev_t: 'Your mistake notebook ☕',                      // TEAM_002: card title
      rev_sub: 'Everything you missed in mock tests waits here for a second shot.', // TEAM_002: subtitle
      rev_pendentes: '{n} questions waiting for review',     // TEAM_002: count
      rev_vazio: 'No pending questions — you are all caught up! ✅', // TEAM_002: zero summary
      rev_vazio_t: 'Clean notebook!',                        // TEAM_002: empty title
      rev_vazio_x: 'You have no missed questions waiting for review. Take a mock test and whatever slips shows up here.', // TEAM_002: invite
      rev_vazio_btn: '📝 Take a mock test',                  // TEAM_002: empty CTA
      rev_btn_nova: '🔁 New review ({n})',                   // TEAM_002: builds mock test from misses
      rev_btn_detalhes: '🔍 Details',                        // TEAM_002: opens explained list
      rev_lembrar: 'Remind me in:',                          // TEAM_002: reminders label
      rev_dias: '{n} days',                                  // TEAM_002: each interval label
      rev_vencido: '⏰ Time to review! {n} questions waiting for you.', // TEAM_002: due reminder
      rev_toast_lembrete: 'Done! I will remind you in {n} days. 📅', // TEAM_002: reminder set
      rev_toast_lembrete_off: '{n}-day reminder turned off.', // TEAM_002: reminder cancelled
      rev_toast_nova: 'Review served: {n} questions! 🔁',    // TEAM_002: review built
      rev_detalhes_t: 'What to improve',                     // TEAM_002: details section
      rev_errou: 'missed {n}×',                              // TEAM_002: error count badge
      sim_ir_revisao: '🔁 Review',                           // TEAM_002: shortcut on result screen

      nav_cadernos: '📁 Notebooks',
      nav_pomodoro: '☕ Pomodoro',
      tela_cadernos_t: 'Notebooks & Favorites',
      tela_cadernos_s: 'Organize your saved questions in custom folders.',
      tela_pomodoro_t: 'Pomodoro Timer "Grinding Coffee"',
      tela_pomodoro_s: '25 min focus, 5 min coffee break. Keep the pace.',

      sim_historico_l: 'Resolution history filters',
      sim_ineditas_l: 'Unanswered only (never tried)',
      sim_erradas_l: 'Missed questions only',

      anot_grifar: 'Highlight text',
      anot_limpar_grifos: 'Clear highlights',
      anot_titulo: 'Notes & Bizus',
      anot_ph: 'Write your notes or shortcuts here...',
      anot_toast_grifado: 'Text highlighted! ✏️',
      anot_toast_selecione: 'Select a piece of text first to highlight! 🔍',

      pomo_t: 'Pomodoro Timer',
      pomo_sub: '25 min focus = Brewing coffee · 5 min break = Coffee break',
      pomo_modo_foco: 'Brewing coffee (25m)',
      pomo_modo_descanso: 'Coffee break (5m)',
      pomo_modo_longo: 'Special Coffee (15m)',
      pomo_iniciar: 'Start',
      pomo_pausar: 'Pause',
      pomo_resetar: 'Reset',
      pomo_som_t: 'Coffee Shop Ambient Sound',
      pomo_som_sub: 'Synthesized via Web Audio API',
      pomo_som_on: 'Sound On',
      pomo_som_off: 'Sound Off',
      pomo_ciclos: '{n} focus cycles completed',
      pomo_toast_foco_fim: 'Coffee brewed! Time for a coffee break! ☕',
      pomo_toast_descanso_fim: 'Break finished! Time for another focus session? ☕',

      fidelidade_toast_carimbo: '☕ Stamp #{n} of {total} added to your Loyalty Card!',
      fidelidade_relatorio_t: 'Loyalty Card Completed!',
      fidelidade_relatorio_sub: 'You completed your #{n} study loyalty card! Congratulations! 🎉',
      fidelidade_relatorio_premio_t: '🏆 Special Report & Achievements',
      fidelidade_relatorio_premio_txt: 'Consistency is key to passing. You proved you study every day.',
      fidelidade_conquistas_t: 'Your Achievements',
      fidelidade_btn_continuar: 'Keep studying',
      fidelidade_cartela_t: 'Study Loyalty Card',
      fidelidade_cartela_sub: '{n} of {total} stamps. Each test or review adds +1 stamp!',
      fidelidade_completas: '{n} cards completed',

      cad_fav_btn: 'Favorite',
      cad_toast_pasta_criada: 'Folder "{nome}" created! 📁',
      cad_toast_padrao: 'The Favorites folder cannot be deleted.',
      cad_toast_pasta_excluida: 'Folder deleted successfully.',
      cad_toast_salvo: 'Question saved to "{pasta}"! ⭐',
      cad_toast_ja_existe: 'This question is already in this folder.',
      cad_toast_removido: 'Question removed from folder.',
      cad_salvar_t: 'Save Question to Notebook',
      cad_salvar_sub: 'Choose which folder to save this question:',
      cad_escolher_pasta: 'Select folder:',
      cad_btn_salvar: 'Save to Notebook',
      cad_criar_nova: 'Or create a new folder:',
      cad_ph_nova: 'New folder name...',
      cad_btn_criar: 'Create Folder',
      cad_t: 'Custom Notebooks & Favorites',
      cad_sub: 'Organize saved questions and take mock tests with them.',
      cad_total_questoes: '{n} saved questions',
      cad_iniciar_simulado: 'Take test with this notebook',
      cad_excluir_pasta: 'Delete folder',

      ev_titulo: 'Interactive Vertical Syllabus',
      ev_concluido: 'completed',
      ev_sub: 'Track your status for each syllabus topic.',
      ev_toast_atualizado: 'Topic status updated! 📝',
      comp_titulo: 'Syllabus Comparator',
      comp_sub: 'Compare previous and current syllabus to see what changed.',
      comp_edital_a: 'Syllabus A (e.g. Previous)',
      comp_edital_b: 'Syllabus B (e.g. Current)',
      comp_ph_a: 'Paste previous syllabus text here...',
      comp_ph_b: 'Paste current syllabus text here...',
      comp_btn_comparar: 'Compare Syllabi',
      comp_toast_curto: 'Paste longer text in both fields to compare!',
      comp_resumo_t: 'Comparison Summary',
      comp_banca: 'Board:',
      comp_vagas: 'Vacancies:',
      comp_mat_novas: 'New Subjects',
      comp_mat_removidas: 'Removed Subjects',
      comp_mat_mantidas: 'Maintained Subjects & Topic Comparison',
      comp_nenhuma: 'No subjects in this category.',
      comp_topicos_iguais: 'No significant topic changes identified.',

      backup_t: 'Backup Export & Import',
      backup_sub: 'Save your data to a JSON file and restore on another browser.',
      backup_btn_exportar: 'Export Backup (JSON)',
      backup_btn_importar: 'Import Backup',
      backup_toast_exportado: 'Backup exported successfully! 💾',
      backup_toast_erro_export: 'Error exporting backup.',
      backup_toast_invalido: 'Invalid backup file.',
      backup_toast_sucesso: 'Backup of {n} records restored! 🔄',
      backup_toast_erro_import: 'Error importing backup.',

      wrap_titulo: 'Your Coffee Wrap',
      wrap_sub: 'Generate a stylized image card with your stats and share!',
      wrap_btn_baixar: 'Download Image (PNG)',
      wrap_btn_copiar: 'Copy Image',
      wrap_toast_copiado: 'Image copied to clipboard! 📋',
      wrap_toast_sem_suporte: 'Clipboard image copy not supported. Use Download button!',
      wrap_card_t: 'Performance Card ("Coffee Wrap")',
      wrap_card_sub: 'Share your weekly stats on social media.',
      wrap_card_btn: 'Generate Coffee Wrap',

      // PDF export — printed sheet of the mock test and the review
      pdf_btn: '📄 Export PDF',                              // TEAM_007: export button
      pdf_toast: 'Sheet ready! In the print dialog, choose "Save as PDF". 📄', // TEAM_007: saving instructions
      pdf_titulo_sim: 'Commented mock test',                 // TEAM_007: mock test sheet title
      pdf_titulo_rev: 'Mistake notebook for review',         // TEAM_007: review sheet title
      pdf_eyebrow: 'Study material',                         // TEAM_007: sheet top label
      pdf_questao: 'Question',                               // TEAM_007: question number label
      pdf_kpi_pendentes: 'pending review',                   // TEAM_007: pending tile label
      pdf_secao: '📖 Questions, explanations and lessons',   // TEAM_007: questions section title
      pdf_acertou: 'you got it right',                       // TEAM_007: correct badge on the sheet
      pdf_errou: 'you missed',                               // TEAM_007: wrong badge on the sheet
      pdf_gabarito_tag: 'answer key',                        // TEAM_007: tag on the right alternative
      pdf_sua_resposta: 'your answer',                       // TEAM_007: tag on the chosen alternative
      pdf_o_que_viu: 'What was covered',                     // TEAM_007: explanation box title
      pdf_legenda: 'Legend: ✔ answer key · ✖ your answer',   // TEAM_007: marks legend
      pdf_qr_legenda: 'Point your phone camera to open the lesson', // TEAM_007: QR code caption
      pdf_estudante: 'Student: {nome}',                      // TEAM_007: student line on the sheet
      pdf_gerado: 'Generated on {data}'                      // TEAM_007: generation date on the sheet
    },

    /* ================= ESPAÑOL ================= */
    es: {
      // Navegación
      nav_dashboard: '🏠 Panel',
      nav_edital: '📄 Mi convocatoria',
      nav_simulado: '📝 Simulacro',
      nav_bancas: '🕵️ Comités',
      nav_temas: '📚 Temas frecuentes',
      app_slogan: 'estudia con sabor a aprobación',
      btn_sair: '↩ Cerrar sesión',
      foco_prefixo: '🎯 Meta: ',
      tela_dashboard_t: 'Panel',
      tela_dashboard_s: 'Tu progreso, recién hecho como un café.',
      tela_edital_t: 'Tu convocatoria sobre la mesa',
      tela_edital_s: 'Sube el PDF y descubre los puestos, las materias y por dónde empezar.',
      tela_simulado_t: 'Hora del simulacro',
      tela_simulado_s: 'Elige el tamaño del reto y vamos.',
      tela_bancas_t: 'Conoce los comités',
      tela_bancas_s: 'Cada comité tiene sus manías — aquí aprendes todas sus trampas.',
      tela_temas_t: 'Lo que más sale',
      tela_temas_s: 'Los temas campeones de los exámenes brasileños, con mapa de estudio.',
      saudacao_dia: 'Buenos días',
      saudacao_tarde: 'Buenas tardes',
      saudacao_noite: 'Buenas noches',
      rodape: 'Hecho con ☕ y muchas horas de estudio — Gabarito Café · tus datos se quedan contigo',
      rodape_priv: 'Política de Privacidad',               // TEAM_002: enlace de privacidad (AdSense)
      ads_rotulo: 'Publicidad',                            // TEAM_002: rótulo sobre los anuncios
      tema_titulo: 'Cambiar tema claro/oscuro',
      idioma_titulo: 'Elegir idioma',

      // Acceso
      login_aba_entrar: 'Ya tengo cuenta',
      login_aba_criar: 'Crear cuenta',
      login_bemvindo: 'Bienvenido(a) de nuevo ☕',
      login_bemvindo_sub: '¿Preparamos un café y repasamos?',
      login_email: 'Correo',
      login_email_ph: 'tu@ejemplo.com',
      login_senha: 'Contraseña',
      login_senha_ph: 'Tu contraseña',
      login_btn: 'Entrar a la cafetería',
      login_ou: 'o',
      login_visitante: '☕ Entrar como invitado (modo degustación)',
      login_aviso: '🔒 Las cuentas y resultados se guardan solo en este navegador (localStorage). Nada va a servidores.',
      cad_titulo: 'Crea una cuenta gratis ☕',
      cad_sub: 'Tarda menos que preparar un espresso.',
      cad_nome: 'Tu nombre',
      cad_nome_ph: '¿Cómo te llamamos?',
      cad_senha_ph: 'Mínimo 4 caracteres',
      cad_btn: 'Abrir mi cuenta',
      login_destaque_1: '📄 Sube la convocatoria y descubre puestos y materias',
      login_destaque_2: '📝 Simulacros de 5 a 50 preguntas, con corrección comentada',
      login_destaque_3: '🎥 ¿Fallaste? Mira la explicación y una clase en YouTube',
      login_destaque_4: '🕵️ Aprende las trampas de los comités famosos',
      login_destaque_5: '📈 Sigue tu progreso en el panel',
      frase_assinatura: '— el barista',

      // Errores de cuenta
      erro_nome_curto: 'Mmm, ese nombre es muy corto. ¿Cómo te llaman?',
      erro_email_invalido: 'Ese correo no parece correcto. ¿Lo revisas?',
      erro_senha_curta: '¡Contraseña muy corta! Mínimo 4 caracteres, ¿de acuerdo?',
      erro_email_existe: 'Ya existe una cuenta con este correo. ¿Intentas entrar?',
      erro_email_nao_encontrado: 'No encontré una cuenta con este correo. ¿Creamos una?',
      erro_senha_errada: 'Contraseña incorrecta... ¡pasa! Inténtalo de nuevo.',

      // Avisos
      toast_bemvindo: '¡Bienvenido(a) de nuevo, {nome}! ☕',
      toast_conta_criada: '¡Cuenta creada! La cafetería es tuya, {nome} ☕',
      toast_visitante: '¡Modo degustación activado! Explora con libertad ☕',
      toast_foco_guardado: '¡Meta guardada! Apuntemos a {cargo} 🎯',
      toast_foco_limpo: 'Meta borrada. Elige un puesto cuando quieras.',
      toast_edital_ok: '¡Convocatoria sobre la mesa! Mira lo que encontré 📄',
      toast_edital_erro: 'No pude leer ese PDF. ¡Intenta pegar el texto abajo!',
      toast_cola_curto: '¡Pega un trozo más grande de la convocatoria — necesito contenido para analizar!',
      toast_qtd: '¡Elige primero la cantidad de preguntas! 😉',
      toast_sim_banca: '¡Elige un comité en el desplegable para armar el simulacro!', // TEAM_005
      toast_refazer: '¡Vamos a rehacer las {n} que fallaste! 🔄',
      toast_idioma: 'Idioma: {idioma}',
      toast_tema_escuro: 'Tema oscuro activado 🌙',
      toast_tema_claro: 'Tema claro activado ☀️',

      // Panel
      dash_ola: '¡Hola, {nome}! ☕',
      dash_ola_sem_nome: '¡Hola! ☕',
      dash_atalho_edital_t: 'Subir convocatoria',
      dash_atalho_edital_s: 'Descubre puestos y materias',
      dash_atalho_sim_t: 'Hacer simulacro',
      dash_atalho_sim_s: 'De 5 a 50 preguntas',
      dash_atalho_bancas_t: 'Estudiar comités',
      dash_atalho_bancas_s: 'Las trampas de cada uno',
      dash_atalho_temas_t: 'Temas frecuentes',
      dash_atalho_temas_s: 'El mapa de las materias',
      dash_vazio_t: 'Tu taza de progreso está vacía',
      dash_vazio_x: '¿Qué tal el primer sorbo? Haz un simulacro rápido — 5 preguntas bastan para empezar.',
      dash_vazio_btn: '☕ Hacer mi primer simulacro',
      dash_stat_simulados: '📝 Simulacros hechos',
      dash_stat_aproveitamento: '🎯 Acierto general',
      dash_stat_melhor: '🏆 Mejor resultado',
      dash_stat_questoes: '✅ Preguntas respondidas',
      dash_stat_sequencia: 'días seguidos estudiando',
      dash_evolucao: '📈 Tu evolución',
      dash_evolucao_sub: 'Porcentaje de aciertos en los últimos simulacros (el último es el {pct}% de hoy).',
      dash_materia: '📚 Cómo vas por materia',
      dash_materia_vazio: 'Haz un simulacro por materia para ver tu rendimiento aquí.',
      dash_vaga: 'Espacio libre: haz más simulacros para llenarlo',

      // Convocatoria
      ed_zona_t: 'Pon la convocatoria sobre la mesa',
      ed_zona_sub: 'Arrastra el PDF de la convocatoria (o el manual del candidato) aquí, o haz clic para elegir el archivo.',
      ed_zona_aviso: 'El archivo se lee en tu navegador — nada se envía a internet.',
      ed_lendo: 'Preparando el café... leyendo tu convocatoria ☕',
      ed_erro_t: '😅 No pude leer ese PDF (puede estar protegido o tener un formato complicado).',
      ed_erro_sub: 'Plan B: abre la convocatoria, copia el texto y pégalo en el campo de abajo. ¡El análisis funciona igual!',
      ed_curto_aviso: 'Mmm, el texto era muy corto para analizar. Intenta pegar más contenido (la convocatoria completa, si es posible).',
      ed_resumo: 'Tu convocatoria en resumen',
      ed_sem_trechos: 'No pude separar secciones claras, pero mira lo que encontré abajo. 👇',
      ed_cargos_t: '💼 Puestos/Vacantes que encontré',
      ed_cargos_vazio: 'No pude identificar puestos automáticamente (algunas convocatorias usan tablas complejas). Revisa el PDF y dime tu puesto en el campo "Mi meta" de abajo. 👇',
      ed_materias_t: '📚 Materias que identifiqué',
      ed_materias_vazio: 'No identifiqué materias en este texto. Puede ser una convocatoria con otro formato — revisa el PDF y, si quieres, pega el programa en el campo de texto.',
      ed_legenda: '✓ = tenemos preguntas listas en el simulacro · 🕮 = aún no tenemos preguntas de esta materia (estudia por la convocatoria)',
      ed_plano_t: '🗺️ Por dónde empezar (plan de estudio)',
      ed_plano_vazio: 'Sin materias detectadas no puedo armar el plan todavía. ¡Pega el programa en el campo de abajo! 📋',
      ed_plano_sem_resumo: 'Aún no tenemos resumen de esta materia — estudia directo del programa de la convocatoria. ¡Anota los temas y a por ello!',
      ed_plano_comeca: 'Empieza por:',
      ed_btn_simulado: '📝 Generar simulacro con las materias de la convocatoria',
      ed_cola_t: '¿Sin PDF? Pega el texto aquí',
      ed_cola_ph: 'Pega aquí el contenido de la convocatoria (programa, puestos, requisitos...)',
      ed_cola_btn: '🔍 Analizar texto pegado',
      ed_foco_t: 'Mi meta 🎯',
      ed_foco_label: '¿Qué puesto/vacante vas a disputar?',
      ed_foco_ph: 'Ej.: Técnico Administrativo, Auditor Fiscal, Medicina...',
      ed_foco_btn: 'Guardar meta',

      // Simulacro
      sim_t: '☕ Arma tu simulacro',
      sim_sub: 'Elige el tamaño del reto. El café va por nuestra cuenta.',
      sim_quantas: '¿Cuántas preguntas?',
      sim_materia_l: 'Materia',
      sim_materia_todas: 'Todas las materias (examen mezclado)',
      sim_banca_l: 'Estilo de comité (trampas)',
      sim_banca_todas: 'Todos los comités (mezclado)',
      sim_nivel_l: 'Dificultad (elige una o más)',
      nivel_facil: 'Fácil',
      nivel_medio: 'Media',
      nivel_dificil: 'Difícil',
      sim_ensino_l: 'Nivel del examen (elige uno o más)',
      ensino_medio: 'Nivel medio',
      ensino_superior: 'Nivel superior',
      sim_edital_check: '🎯 Usar solo las materias de mi convocatoria ({n} detectadas)',
      sim_materias_l: 'Materias (elige una o más)',
      sim_todas: 'Seleccionar todas',
      sim_limpar: 'Limpiar',
      sim_sel_1: '1 materia seleccionada',
      sim_sel_n: '{n} materias seleccionadas',
      sim_ligados: '🔗 Los números junto a cada opción se actualizan según los filtros elegidos — lo que llegue a cero se deshabilita.', // TEAM_005: dica de filtros ligados
      sim_disp: '☕ Con estos filtros tenemos {n} preguntas en stock. ',
      sim_disp_poucas: '¡Relaja los filtros para liberar más!',
      sim_disp_ok: 'Elige el tamaño ahí arriba.',
      sim_btn_comecar: '▶️ Preparar el café y empezar',
      sim_dicas_t: '📝 Consejos antes de empezar',
      sim_questao: 'Pregunta {n} de {total}',
      sim_responder: 'Responder',
      sim_certo: '✅ ¡Muy bien!',
      sim_errou: '❌ ¡Ups! Marcaste la opción {letra}.',
      sim_certa_e: 'La correcta es la {letra}.',
      sim_como: '🧭 Cómo resolverlo, paso a paso:',
      sim_dica: '☕ Consejo del barista: ',
      sim_aula: '▶️ Ver una clase sobre "{tema}" en YouTube',
      sim_proxima: 'Siguiente pregunta →',
      sim_finalizar: '🏁 Terminar y ver el resultado',
      sim_resultado_t: '🏁 ¡Simulacro terminado!',
      sim_resultado_refez: '🔄 ¡Repaso terminado!',
      sim_resumo: '{total} preguntas · {tempo} de examen',
      sim_stat_acertos: '✅ Aciertos',
      sim_stat_erros: '❌ Errores',
      sim_stat_aproveitamento: '🎯 Aprovechamiento',
      sim_stat_tempo: '⏱ Tiempo de examen',
      sim_por_materia_t: '📚 Rendimiento por materia',
      sim_escorregou_t: '🔍 Donde resbalaste',
      sim_gabarito: 'respuesta: {letra}',
      sim_zero: '¡Cero errores! Ese examen salió perfecto, como un café bien hecho.',
      sim_refazer: '🔄 Rehacer las {n} que fallé',
      sim_novo: '📝 Nuevo simulacro',
      sim_ir_dash: '🏠 Verlo en el panel',
      sim_dicas_proxima_t: '📝 Consejos del barista para la próxima',
      sim_frase_alta: '¡Café fuerte y hoja limpia! ¡Estás volando! 🚀',
      sim_frase_boa: '¡Muy bien! La aprobación está en tu radar. ☕',
      sim_frase_media: '¡Vas bien! Repasa los errores y sube un escalón más. 📈',
      sim_frase_baixa: 'Todo barista quema el primer café. ¡Repasa los errores y vuelve! 💪',

      // Comités y temas
      bancas_intro: 'Conocer al comité es la mitad del camino: cada uno tiene manías, y aquí las mostramos todas. 🕵️',
      bancas_pegadinhas_t: 'Trampas favoritas:',
      bancas_cartao: 'Toca para ver las trampas, la estrategia y armar un simulacro de este comité', // TEAM_005: dica de la tarjeta
      bancas_modal_questoes: 'Este comité tiene {n} preguntas en el banco de Gabarito Café.', // TEAM_005: conteo en el modal
      bancas_modal_simulado: 'Armar simulacro solo con preguntas de este comité', // TEAM_005: botón del modal
      bancas_modal_sem: 'Este comité aún no tiene preguntas en el banco — pero los consejos ya ayudan.', // TEAM_005: sin preguntas
      bancas_modal_aula: '▶️ Ver videos sobre este comité en YouTube', // TEAM_005: enlace de clases
      conteudo_aviso: 'ℹ️ El contenido de estudio (resúmenes, trampas y preguntas) está en portugués, porque son exámenes brasileños.',
      temas_aba_concursos: '🎯 Oposiciones',
      temas_aba_vest: '🎓 Selectividad',
      temas_porque: '¿Por qué? ',
      temas_cartao: 'Toca la tarjeta para ver los temas de la materia', // TEAM_004: pista de la tarjeta

      // Pantalla de consejos
      nav_dicas: '💡 Consejos',
      tela_dicas_t: 'Consejos que valen oro',
      tela_dicas_s: 'Lo que separa a quien aprueba de quien casi aprueba.',
      dicas_intro: 'No es solo estudiar mucho: es estudiar de la manera correcta. Esto es lo que aprendimos en la práctica. 💡',
      dicas_prova_t: '📝 Consejos rápidos para el examen',

      // Convocatoria — análisis inteligente
      ed_confianca: 'Confianza del análisis:',
      ed_confianca_aviso: 'Cuanto más alto, más entendió el robot tu convocatoria (y menos tienes que revisar en el PDF).',
      ed_banca_t: '🏦 Comité organizador',
      ed_banca_ver: '🕵️ Ver las trampas de este comité',
      ed_banca_nenhuma: 'No identifiqué el comité en este texto. ¡Revisa la convocatoria — conocer al comité cambia tu estrategia!',
      ed_banca_manual_l: '¿Sabes cuál es el comité? Escribe el nombre y te doy consejos de examen:',
      ed_banca_manual_ph: 'Ej.: FCC, Cespe, Vunesp, FGV...',
      ed_banca_manual_btn: 'Analizar',
      ed_dicas_t: 'Consejos para',
      ed_banca_desconhecida: 'Este comité no está en mi catálogo — así que aquí van consejos que sirven para cualquier comité:',
      ed_sim_banca_l: 'Hacer simulacro solo con preguntas de un comité (opcional):', // TEAM_005
      ed_sim_banca_sel: 'Elige el comité…',               // TEAM_005
      ed_sim_banca_btn: 'Armar simulacro',                // TEAM_005
      ed_ver_mais: 'Ver más…',
      ed_ver_menos: 'Ver menos',
      ed_modal_dica: 'Toca un tema para abrir la explicación y una clase en video',
      ed_modal_edital: 'Temas que la convocatoria pide',
      ed_modal_campeoes: 'Los más frecuentes',
      ed_modal_todos: '← Todos los temas de {materia}',
      ed_topico_porque: 'Por qué aparece',
      ed_topico_como: 'Cómo estudiar',
      ed_topico_generico: 'Todavía no tengo un resumen listo de este tema — resuelve preguntas y mira la clase de abajo:',
      modal_fechar: 'Cerrar',
      ed_datas_t: '📅 Fechas importantes',
      ed_sem_datas: 'No encontré fechas en el texto. ¡Revisa el PDF de la convocatoria!',
      ed_data_inscricoes: 'Inscripciones',
      ed_data_prova: 'Fecha del examen',
      ed_data_taf: 'Prueba física (TAF)',
      ed_data_resultado: 'Resultado final',
      ed_contagem: 'Cuenta regresiva',
      ed_faltam: '¡Faltan {dias} días para el examen!',
      ed_prova_hoje: '¡Es hoy! ¡Respira hondo y mucha suerte! 🍀',
      ed_prova_passou: 'La fecha del examen ya pasó — revisa la convocatoria.',
      ed_numeros_t: '🔢 Los números de la convocatoria',
      ed_num_vagas: 'Vacantes',
      ed_num_salario: 'Salario',
      ed_num_taxa: 'Tasa de inscripción',
      ed_num_questoes: 'Preguntas del examen',
      ed_num_validade: 'Validez del concurso',
      ed_num_horas: 'Jornada semanal',
      ed_semana: 'semana',
      ed_num_cr: 'Lista de reserva',
      ed_cr_sim: '✓ Previsto',
      ed_numeros_vazio: 'No encontré los números (vacantes, salario...) en este texto.',
      ed_anos: 'años',
      ed_meses: 'meses',
      ed_escolaridade_t: '🎓 Escolaridad exigida',
      ed_requisitos_t: '🧾 Requisitos detectados',
      ed_programa_t: '📖 Lo que la convocatoria pide en cada materia',
      ed_programa_sub: 'Estos son los temas que la propia convocatoria enumera. Empieza por los que dominas menos:',
      ed_programa_vazio: 'No pude separar el programa por materia. ¡Pega el texto de la convocatoria en el campo de abajo y lo intento otra vez!',
      ed_plano_sem_data: 'No encontré la fecha del examen en el texto — pega la convocatoria aquí y armo tu cronograma de estudio.',
      ed_plano_dias_1: 'Faltan {dias} días: ¡recta final! Prioriza repaso, cuaderno de errores y simulacros cronometrados.',
      ed_plano_dias_2: 'Faltan {dias} días: hay tiempo para cubrir la convocatoria con holgura. Teoría + preguntas todos los días.',
      ed_plano_dias_3: 'Faltan {dias} días: todavía hay mucho tiempo. Construye la base con calma, sin saltar etapas.',
      ed_plano_passou: 'El examen ya pasó (o es hoy). ¡Mucha suerte — y a pensar en el próximo!',

      // Panel — recomendación inteligente
      dash_fraco_t: '🎯 Dónde enfocarte ahora',
      dash_fraco_txt: 'Tu punto más débil es {materia}, con {pct}% de acierto. ¿Entrenamos?',
      dash_fraco_btn: 'Entrenar {materia} (10 preguntas)',
      dash_fraco_bom: '¡Vas bien en todas las materias practicadas! ¿Qué tal aumentar la cantidad de preguntas en el próximo simulacro?',
      dash_fraco_pouco: 'Responde algunas preguntas de cada materia y descubriré aquí dónde necesitas enfocarte. 🕵️',
      toast_treino: '¡Vamos a entrenar {materia}! 📝',

      // PWA — instalación de la app
      pwa_instalar: '📲 Instalar la app',                    // TEAM_002: botón de instalación
      pwa_ios: 'En el iPhone: toca Compartir ⬆ y luego "Añadir a pantalla de inicio".', // TEAM_002: instrucción iOS
      toast_instalado: '¡Gabarito Café instalado! Ábrelo desde el ícono ☕', // TEAM_002: aviso

      // Repaso — pantalla de fallos + recordatorios
      nav_revisao: '🔁 Repaso',                              // TEAM_002: ítem del menú
      tela_revisao_t: 'Hora de repasar',                     // TEAM_002: título superior
      tela_revisao_s: 'Las preguntas que se te escaparon vuelven aquí hasta que las domines.', // TEAM_002: subtítulo
      rev_t: 'Tu cuaderno de errores ☕',                     // TEAM_002: título de la tarjeta
      rev_sub: 'Todo lo que fallaste en los simulacros espera aquí una segunda dosis.', // TEAM_002: subtítulo
      rev_pendentes: '{n} preguntas esperando repaso',       // TEAM_002: conteo
      rev_vazio: '¡Sin preguntas pendientes — estás al día! ✅', // TEAM_002: resumen en cero
      rev_vazio_t: '¡Cuaderno limpio!',                      // TEAM_002: título de vacío
      rev_vazio_x: 'No tienes preguntas falladas esperando repaso. Haz un simulacro y lo que se escape aparece aquí.', // TEAM_002: invitación
      rev_vazio_btn: '📝 Hacer un simulacro',                // TEAM_002: CTA de vacío
      rev_btn_nova: '🔁 Nuevo repaso ({n})',                 // TEAM_002: arma simulacro con fallos
      rev_btn_detalhes: '🔍 Detalles',                       // TEAM_002: abre la lista explicada
      rev_lembrar: 'Recordar en:',                           // TEAM_002: rótulo de recordatorios
      rev_dias: '{n} días',                                  // TEAM_002: rótulo de cada plazo
      rev_vencido: '⏰ ¡Es hora de repasar! {n} preguntas te esperan.', // TEAM_002: recordatorio vencido
      rev_toast_lembrete: '¡Anotado! Te recuerdo en {n} días. 📅', // TEAM_002: recordatorio agendado
      rev_toast_lembrete_off: 'Recordatorio de {n} días apagado.', // TEAM_002: recordatorio cancelado
      rev_toast_nova: '¡Repaso servido: {n} preguntas! 🔁',  // TEAM_002: repaso armado
      rev_detalhes_t: 'Qué mejorar',                         // TEAM_002: sección de detalles
      rev_errou: 'fallaste {n}×',                            // TEAM_002: sello de repetición del fallo
      sim_ir_revisao: '🔁 Repaso',                           // TEAM_002: atajo en la pantalla de resultado

      nav_cadernos: '📁 Cuadernos',
      nav_pomodoro: '☕ Pomodoro',
      tela_cadernos_t: 'Cuadernos y Favoritos',
      tela_cadernos_s: 'Organiza tus preguntas guardadas en carpetas personalizadas.',
      tela_pomodoro_t: 'Temporizador Pomodoro "Moliendo Café"',
      tela_pomodoro_s: '25 min de enfoque, 5 min de café. Mantén el ritmo.',

      sim_historico_l: 'Filtros por historial de resolución',
      sim_ineditas_l: 'Solo inéditas (nunca respondidas)',
      sim_erradas_l: 'Solo preguntas que ya fallé',

      anot_grifar: 'Subrayar selección',
      anot_limpar_grifos: 'Limpiar subrayados',
      anot_titulo: 'Bloc de Notas y Apuntes',
      anot_ph: 'Escribe aquí tus apuntes o resúmenes...',
      anot_toast_grifado: '¡Texto subrayado! ✏️',
      anot_toast_selecione: '¡Selecciona un trozo de texto primero! 🔍',

      pomo_t: 'Temporizador Pomodoro',
      pomo_sub: '25 min enfoque = Preparando café · 5 min descanso = Pausa para el café',
      pomo_modo_foco: 'Preparando café (25m)',
      pomo_modo_descanso: 'Pausa para el café (5m)',
      pomo_modo_longo: 'Café Especial (15m)',
      pomo_iniciar: 'Iniciar',
      pomo_pausar: 'Pausar',
      pomo_resetar: 'Reiniciar',
      pomo_som_t: 'Sonido de Cafetería',
      pomo_som_sub: 'Sintetizado via Web Audio API',
      pomo_som_on: 'Sonido Activado',
      pomo_som_off: 'Sonido Desactivado',
      pomo_ciclos: '{n} ciclos de enfoque completados',
      pomo_toast_foco_fim: '¡Café listo! ¡Hora de la pausa para el café! ☕',
      pomo_toast_descanso_fim: '¡Pausa terminada! ¿Volvemos ao enfoque? ☕',

      fidelidade_toast_carimbo: '☕ ¡Sello #{n} de {total} añadido a tu Tarjeta Fidelidad!',
      fidelidade_relatorio_t: '¡Tarjeta Fidelidad Completada!',
      fidelidade_relatorio_sub: '¡Has completado tu tarjeta de estudio #{n}! ¡Felicidades! 🎉',
      fidelidade_relatorio_premio_t: '🏆 Informe Especial y Logros',
      fidelidade_relatorio_premio_txt: 'La constancia es la clave para aprobar. Has demostrado estudiar cada día.',
      fidelidade_conquistas_t: 'Tus Logros',
      fidelidade_btn_continuar: 'Continuar estudiando',
      fidelidade_cartela_t: 'Tarjeta Fidelidad de Estudio',
      fidelidade_cartela_sub: '{n} de {total} sellos. ¡Cada simulacro o repaso añade +1 sello!',
      fidelidade_completas: '{n} tarjetas completadas',

      cad_fav_btn: 'Favorito',
      cad_toast_pasta_criada: '¡Carpeta "{nome}" creada! 📁',
      cad_toast_padrao: 'La carpeta Favoritos no se puede eliminar.',
      cad_toast_pasta_excluida: 'Carpeta eliminada con éxito.',
      cad_toast_salvo: '¡Pregunta guardada en "{pasta}"! ⭐',
      cad_toast_ja_existe: 'Esta pregunta ya está en esta carpeta.',
      cad_toast_removido: 'Pregunta eliminada de la carpeta.',
      cad_salvar_t: 'Guardar Pregunta en Cuaderno',
      cad_salvar_sub: 'Elige en qué carpeta guardar esta pregunta:',
      cad_escolher_pasta: 'Selecciona carpeta:',
      cad_btn_salvar: 'Guardar en Cuaderno',
      cad_criar_nova: 'O crea una nueva carpeta:',
      cad_ph_nova: 'Nombre de la nueva carpeta...',
      cad_btn_criar: 'Crear Carpeta',
      cad_t: 'Cuadernos Personalizados y Favoritos',
      cad_sub: 'Organiza tus preguntas guardadas y haz simulacros con ellas.',
      cad_total_questoes: '{n} preguntas guardadas',
      cad_iniciar_simulado: 'Hacer simulacro de este cuaderno',
      cad_excluir_pasta: 'Eliminar carpeta',

      ev_titulo: 'Convocatoria Verticalizada Interativa',
      ev_concluido: 'completado',
      ev_sub: 'Sigue tu estado en cada tema de la convocatoria.',
      ev_toast_atualizado: '¡Estado del tema actualizado! 📝',
      comp_titulo: 'Comparador de Convocatorias',
      comp_sub: 'Compara la convocatoria anterior con la actual y mira qué cambió.',
      comp_edital_a: 'Convocatoria A (ej: Anterior)',
      comp_edital_b: 'Convocatoria B (ej: Actual)',
      comp_ph_a: 'Pega aquí el texto de la convocatoria anterior...',
      comp_ph_b: 'Pega aquí el texto de la convocatoria actual...',
      comp_btn_comparar: 'Comparar Convocatorias',
      comp_toast_curto: '¡Pega un texto más largo en ambas convocatorias!',
      comp_resumo_t: 'Resultado de la Comparación',
      comp_banca: 'Comité:',
      comp_vagas: 'Vacantes:',
      comp_mat_novas: 'Materias Nuevas',
      comp_mat_removidas: 'Materias Eliminadas',
      comp_mat_mantidas: 'Materias Mantenidas y Comparación de Temas',
      comp_nenhuma: 'Ninguna materia en esta categoría.',
      comp_topicos_iguais: 'Sin cambios significativos de temas.',

      backup_t: 'Exportación e Importación de Copia de Seguridad',
      backup_sub: 'Guarda tus datos en un archivo JSON y restáuralos en otro navegador.',
      backup_btn_exportar: 'Exportar Copia (JSON)',
      backup_btn_importar: 'Importar Copia',
      backup_toast_exportado: '¡Copia de seguridad exportada con éxito! 💾',
      backup_toast_erro_export: 'Error al exportar copia de seguridad.',
      backup_toast_invalido: 'Archivo de copia de seguridad no válido.',
      backup_toast_sucesso: '¡Copia de {n} registros restaurada con éxito! 🔄',
      backup_toast_erro_import: 'Error al importar copia de seguridad.',

      wrap_titulo: 'Tu Coffee Wrap',
      wrap_sub: '¡Genera una imagen estilizada con tu progreso y comparte!',
      wrap_btn_baixar: 'Descargar Imagen (PNG)',
      wrap_btn_copiar: 'Copiar Imagen',
      wrap_toast_copiado: '¡Imagen copiada al portapapeles! 📋',
      wrap_toast_sem_suporte: 'Navegador no soporta copiar imagen directamente. ¡Usa el botón Descargar!',
      wrap_card_t: 'Tarjeta de Rendimiento ("Coffee Wrap")',
      wrap_card_sub: 'Comparte tus estadísticas de la semana en redes sociales.',
      wrap_card_btn: 'Generar Coffee Wrap',

      // Exportar PDF — hoja impresa del simulacro y del repaso
      pdf_btn: '📄 Exportar PDF',                            // TEAM_007: botón de exportar
      pdf_toast: '¡Hoja lista! En el diálogo de impresión elige "Guardar como PDF". 📄', // TEAM_007: instrucción
      pdf_titulo_sim: 'Simulacro comentado',                 // TEAM_007: título de la hoja del simulacro
      pdf_titulo_rev: 'Cuaderno de errores para repaso',     // TEAM_007: título de la hoja de repaso
      pdf_eyebrow: 'Material de estudio',                    // TEAM_007: etiqueta superior de la hoja
      pdf_questao: 'Pregunta',                               // TEAM_007: rótulo del número de la pregunta
      pdf_kpi_pendentes: 'pendientes de repaso',             // TEAM_007: rótulo del tile de pendientes
      pdf_secao: '📖 Preguntas, explicaciones y clases',     // TEAM_007: título de la sección
      pdf_acertou: 'acertaste',                              // TEAM_007: sello de acierto
      pdf_errou: 'fallaste',                                 // TEAM_007: sello de error
      pdf_gabarito_tag: 'solución',                          // TEAM_007: etiqueta en la opción correcta
      pdf_sua_resposta: 'tu respuesta',                      // TEAM_007: etiqueta en la opción marcada
      pdf_o_que_viu: 'Lo que se vio',                        // TEAM_007: título de la caja de explicación
      pdf_legenda: 'Leyenda: ✔ solución · ✖ tu respuesta',   // TEAM_007: leyenda de las marcas
      pdf_qr_legenda: 'Apunta la cámara del móvil para abrir la clase', // TEAM_007: leyenda del QR
      pdf_estudante: 'Estudiante: {nome}',                   // TEAM_007: línea del estudiante
      pdf_gerado: 'Generado el {data}'                       // TEAM_007: fecha de generación
    }
  },

  // Troca os textos e monta "chave" → "texto" com placeholders {x}
  texto(chave, dados) {
    const idioma = this.DICIONARIO[this.atual] || this.DICIONARIO.pt; // dicionário do idioma atual
    let bruto = idioma[chave];                              // procura a chave no idioma atual
    if (bruto === undefined) bruto = this.DICIONARIO.pt[chave]; // se faltar, usa o português (reserva)
    if (bruto === undefined) return chave;                  // se não existir nem em PT, devolve a chave
    if (!dados) return bruto;                               // sem dados para substituir, devolve direto
    let saida = bruto;                                      // cópia para substituir os placeholders
    for (const nome in dados) {                             // percorre os valores informados
      saida = saida.split('{' + nome + '}').join(dados[nome]); // troca {nome} pelo valor
    }
    return saida;                                           // devolve o texto final
  },

  // Aplica as traduções nos textos estáticos marcados com data-i18n
  aplicar() {
    // Textos de elementos (textContent)
    document.querySelectorAll('[data-i18n]').forEach(el => { // percorre quem tem data-i18n
      el.textContent = this.texto(el.dataset.i18n);          // traduz o texto
    });
    // Placeholders de campos
    document.querySelectorAll('[data-i18n-ph]').forEach(el => { // percorre quem tem data-i18n-ph
      el.placeholder = this.texto(el.dataset.i18nPh);        // traduz o placeholder
    });
    // Rótulos de acessibilidade (title)
    document.querySelectorAll('[data-i18n-title]').forEach(el => { // percorre quem tem data-i18n-title
      el.title = this.texto(el.dataset.i18nTitle);           // traduz o title
    });
    document.documentElement.lang = this.atual === 'pt' ? 'pt-BR' : this.atual; // ajusta o idioma da página
    // Marca a bandeira do idioma escolhido como ativa
    document.querySelectorAll('.bandeira').forEach(botao => { // percorre os botões de bandeira
      botao.classList.toggle('ativa', botao.dataset.idioma === this.atual); // ativa só a do idioma atual
    });
    // Assinatura da frase do login (— o barista / — the barista)
    document.querySelectorAll('.login-assinatura').forEach(el => { // percorre as assinaturas
      el.textContent = this.texto('frase_assinatura');       // traduz a assinatura
    });
  },

  // Troca o idioma do app, salva a escolha e atualiza a tela
  definir(codigo) {
    if (!this.DICIONARIO[codigo]) return;                    // ignora idioma desconhecido
    this.atual = codigo;                                     // guarda o idioma escolhido
    Armazenamento.salvar(this.CHAVE, codigo);                // salva no navegador
    this.aplicar();                                          // traduz os textos estáticos
    if (typeof App !== 'undefined' && App.redesenharTelaAtual) { // se o app já existe
      App.redesenharTelaAtual();                             // redesenha a tela atual traduzida
    }
  },

  // Inicia o idioma salvo (ou português, o padrão)
  iniciar() {
    const salvo = Armazenamento.ler(this.CHAVE, 'pt');       // lê a preferência salva
    this.atual = this.DICIONARIO[salvo] ? salvo : 'pt';      // usa a salva ou cai no português
    this.aplicar();                                          // aplica as traduções
  }
};

// Como os scripts ficam no fim do <body>, o HTML já existe aqui:
// então o idioma é aplicado na hora (antes de qualquer outra tela montar).
Idioma.iniciar();                                            // aplica o idioma salvo já no carregamento
