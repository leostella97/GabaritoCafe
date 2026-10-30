# Documentação do Sistema - Gabarito Café

## Visão Geral
PWA vanilla JavaScript 100% client-side. Sem backend, sem banco de dados. Dados persistidos em localStorage.

## Arquitetura
- `index.html` - Shell da aplicação
- `js/app.js` - Orquestração de telas
- `js/auth.js` - Autenticação local
- `js/simulado.js` - Simulado UI + regra
- `js/dashboard.js` - Dashboard
- `js/armazenamento.js` - Abstração localStorage
- `js/banco-questoes.js` - Banco de questões estático
- `js/dados-temas.js` - Temas por matéria
- `js/idioma.js` - i18n PT/EN/ES

## Fluxos Principais
1. Login / Visitante → Auth
2. Edital → Análise local PDF.js
3. Simulado → Sorteio + correção
4. Fidelidade → Carimbos locais

## Segurança
- Sem segredos server-side
- AdSense publishable exposta por design
- Autenticação hash no cliente

## Performance
- Banco de questões ~5MB carregado sob demanda via BancoLoader
- localStorage limitado a ~5-10MB por origem
