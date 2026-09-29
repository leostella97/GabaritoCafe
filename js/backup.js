/* ============================================================
   GABARITO CAFÉ — js/backup.js
   Exportação e Importação de Backup (JSON):
   - Exporta todo o histórico, progresso, cadernos, anotações
     e configurações do localStorage em um arquivo .json
   - Importa e restaura o backup no dispositivo/navegador
   ============================================================ */

const BackupUI = {
  exportar() {
    try {
      const backup = {
        app: 'Gabarito Café',
        versao: '2.0',
        exportadoEm: new Date().toISOString(),
        dados: {}
      };

      for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);
        if (chave && chave.startsWith('gc_')) {
          backup.dados[chave] = Armazenamento.ler(chave, null);
        }
      }

      const jsonStr = JSON.stringify(backup, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      const dataHoje = new Date().toISOString().slice(0, 10);
      a.href = url;
      a.download = 'gabarito-cafe-backup-' + dataHoje + '.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      App.torrada(T('backup_toast_exportado'), 'sucesso');
    } catch (e) {
      console.error('Erro ao exportar backup:', e);
      App.torrada(T('backup_toast_erro_export'), 'erro');
    }
  },

  importarArquivo(file) {
    if (!file) return;
    const leitor = new FileReader();

    leitor.onload = (e) => {
      try {
        const conteudo = JSON.parse(e.target.result);
        if (!conteudo || conteudo.app !== 'Gabarito Café' || !conteudo.dados) {
          App.torrada(T('backup_toast_invalido'), 'erro');
          return;
        }

        const dados = conteudo.dados;
        let restaurados = 0;

        for (const chave in dados) {
          if (chave.startsWith('gc_')) {
            Armazenamento.salvar(chave, dados[chave]);
            restaurados++;
          }
        }

        App.torrada(T('backup_toast_sucesso', { n: restaurados }), 'sucesso');
        setTimeout(() => location.reload(), 1200);
      } catch (err) {
        console.error('Erro ao importar backup:', err);
        App.torrada(T('backup_toast_erro_import'), 'erro');
      }
    };

    leitor.readAsText(file);
  },

  renderizarCard() {
    let html = '<div class="cartao" style="background:var(--caramelo-suave);border:1px solid var(--linha);margin-bottom:1.5rem">';
    html += '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.8rem">';
    html += '<div>';
    html += '<strong style="color:var(--cafe);font-size:1.05rem">💾 ' + T('backup_t') + '</strong>';
    html += '<p class="texto-suave" style="font-size:0.8rem;margin:0">' + T('backup_sub') + '</p>';
    html += '</div>';

    html += '<div style="display:flex;gap:0.6rem;flex-wrap:wrap">';
    html += '<button id="btn-exportar-backup" class="botao botao-primario pequeno">⬇️ ' + T('backup_btn_exportar') + '</button>';
    html += '<button id="btn-trigger-importar" class="botao botao-contorno pequeno">⬆️ ' + T('backup_btn_importar') + '</button>';
    html += '<input id="input-importar-backup" type="file" accept=".json" class="oculto">';
    html += '</div>';

    html += '</div></div>';
    return html;
  },

  ligarEventos() {
    const btnExp = document.getElementById('btn-exportar-backup');
    if (btnExp) {
      btnExp.addEventListener('click', () => this.exportar());
    }

    const btnTrigImp = document.getElementById('btn-trigger-importar');
    const inputImp = document.getElementById('input-importar-backup');

    if (btnTrigImp && inputImp) {
      btnTrigImp.addEventListener('click', () => inputImp.click());
      inputImp.addEventListener('change', () => {
        if (inputImp.files[0]) {
          this.importarArquivo(inputImp.files[0]);
          inputImp.value = '';
        }
      });
    }
  }
};
