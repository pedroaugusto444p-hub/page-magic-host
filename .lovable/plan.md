# Abrir a página de vendas e salvar no GitHub

## O que foi enviado
Um arquivo ZIP com uma página de vendas estática completa: "Matemática — Aprendizado Divertido" (+360 Atividades de Matemática no Mundo dos Blocos), com HTML, CSS, imagens (.webp) e scripts de rastreamento (Utmify e PostHog).

## Plano

1. **Publicar a página dentro do projeto**
   - Copiar os arquivos do ZIP (index.html, style.css, pasta imagens/ e scripts _external/) para a pasta `public/vendas/` do projeto.
   - Fazer a página inicial do app (`/`) redirecionar para `/vendas/`, para que a página de vendas seja a primeira coisa exibida no preview.
   - Manter os scripts de rastreamento originais funcionando (Utmify e PostHog), ajustando os caminhos dos scripts para a nova pasta.

2. **Verificar no preview**
   - Abrir a página no navegador do preview e confirmar que imagens, textos, botões e rastreamento carregam corretamente.

3. **Salvar no GitHub**
   - A conexão com o GitHub é feita por você na interface do Lovable (não posso criar o repositório pelo chat):
     1. No editor, abra o menu **+** (canto inferior esquerdo do chat) → **GitHub** → **Connect project**.
     2. Autorize o app do Lovable no GitHub e escolha a conta/organização.
     3. Clique em **Create Repository** — o código (incluindo a página de vendas) será sincronizado automaticamente.
   - Depois de conectado, qualquer alteração feita aqui sincroniza com o GitHub em tempo real.

## Detalhes técnicos
- A página é 100% estática; nenhum banco de dados ou backend é necessário.
- Os arquivos ficam em `public/vendas/` para serem servidos como estão, sem conversão para React.
- Nada do código existente do projeto será removido, apenas a página inicial passará a redirecionar para a página de vendas.
