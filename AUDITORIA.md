# AUDITORIA DE SEGURANÇA - Gabarito Café

## Top 5 achados de maior risco
1. **Autenticação e regras de negócio 100% no cliente** - Risco ALTO
2. **Falta de backend / Supabase / banco** - Risco ALTO - não há onde aplicar segurança server-side
3. **Contadores e progresso manipuláveis via localStorage** - Risco ALTO
4. **Dependência de CDN sem SRI / CSP** - Risco MÉDIO
5. **Testes unitários não cobrem fluxos críticos de negócio** - Risco MÉDIO

---

## 1. Testes de integração

| Achado | Risco | Arquivo e linha | Correção sugerida |
|--------|-------|-----------------|-------------------|
| Ferramenta de teste configurada: Jasmine 7, script `npm test` | Baixo | package.json:1-7 | Manter |
| 25 specs passam, 0 falhas | Baixo | spec/ | Ampliar cobertura |
| Banco de teste separado? Não existe banco | Não verificado | - | Não há banco |
| Comando para rodar: `npx jasmine` | Baixo | - | - |
| Fluxos críticos cadastro/login/checkout/assinatura/webhooks: NÃO EXISTEM | Alto | N/A | App é 100% client-side |
| Testes de integração contra rota real: 0 | Alto | - | Não aplicável sem backend |
| Testes unitários com mock: Util, Armazenamento, BancoLoader, MotorSimulado, Revisao | Médio | spec/*.spec.js | Criar camada server para testar |

**Conclusão etapa 1:** Existem testes unitários Jasmine. Não há testes de integração, nem banco de teste, nem fluxos de pagamento.

---

## 2. Confiança no cliente

| Achado | Risco | Arquivo e linha | Correção sugerida |
|--------|-------|-----------------|-------------------|
| Autenticação, hash de senha, sessão em localStorage | Alto | js/auth.js:19-35,60-82 | Mover para servidor |
| Fidelidade/carimbos calculados no cliente | Alto | js/fidelidade.js:30-48 | Persistir no servidor |
| Resultados de simulado e progresso em localStorage | Alto | js/motor-simulado.js:37, js/dashboard.js:15 | Calcular no servidor |
| Cadernos/favoritos manipuláveis | Médio | js/cadernos.js:50-62 | Validar no servidor |
| Variáveis NEXT_PUBLIC_/VITE_/EXPO_PUBLIC_: nenhuma encontrada | Baixo | - | - |
| Chaves expostas: ca-pub-2430276497312227 AdSense publishable | Baixo | index.html:44 | Pública por design |
| Sem Supabase, sem banco exposto | Baixo | - | Não aplicável |
| RLS / policies: não aplicável | - | - | - |

**Conclusão etapa 2:** Todas as regras de negócio importantes vivem no front. Qualquer usuário pode alterar localStorage.

---

## 3. Race condition

| Achado | Risco | Arquivo e linha | Correção sugerida |
|--------|-------|-----------------|-------------------|
| Não há recurso limitado servidor: estoque, cupom, saldo, crédito, vaga, convite | Baixo | N/A | App não tem backend |
| Read-modify-write em localStorage: auth.cadastrar, fidelidade.adicionarCarimbo, cadernos.salvarQuestaoNaPasta | Médio | js/auth.js:78, js/fidelidade.js:32, js/cadernos.js:56 | Conflito entre abas, sem proteção |
| Sem constraint única, operação atômica ou lock de linha | Médio | N/A | Não há banco |
| Proteção depende de lock em memória/Redis: não existe | Baixo | N/A | Não aplicável |

**Conclusão etapa 3:** Race conditions servidor não existem. Concorrência entre abas pode causar perda de atualização local.

---

## 4. Idempotência

| Achado | Risco | Arquivo e linha | Correção sugerida |
|--------|-------|-----------------|-------------------|
| Webhooks recebidos: nenhum | Baixo | N/A | Não há gateway |
| Verificação de assinatura webhook: não aplicável | - | - | - |
| Registro de eventos processados: não existe | - | - | - |
| Chamadas ao gateway de pagamento: não existem | Baixo | - | Não há pagamentos |
| Idempotency key: não aplicável | - | - | - |

**Conclusão etapa 4:** Não há webhooks nem pagamentos.

---

## 5. Separação de responsabilidades

| Arquivo | Tamanho | Mistura UI/Regra/Dados |
|---------|---------|------------------------|
| js/banco-questoes.js | 5.0 MB | Dados apenas |
| js/dados-sala.js | 1.38 MB | Dados apenas |
| js/dados-temas.js | 548 KB | Dados apenas |
| js/simulado.js | 57 KB | UI + Regra + Acesso a dados |
| js/dashboard.js | 19 KB | UI + Regra + Acesso |
| js/app.js | 14 KB | UI + Navegação |

**Candidato nº1 para refatorar:** `js/simulado.js`
Mistura renderização HTML, estado do simulado, cálculo de resultado e acesso a localStorage/BancoLoader.

---

### Próximo passo recomendado
Rodar primeiro o prompt de **Confiança no cliente** / criação de backend seguro, pois todas as regras de negócio hoje estão expostas no navegador. Sem mover autenticação, progresso e fidelidade para servidor, os demais controles de idempotência e race condition não têm onde ser aplicados.
