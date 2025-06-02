---

## 🧠 Objetivos do Projeto

- Implementar algoritmos de ordenação com JavaScript.
- Manipular elementos da página usando DOM.
- Utilizar estrutura de dados em JSON para construir conteúdos dinâmicos.
- Consumir API REST com Vue.js para exibir dados em tempo real.
- Aplicar estilo com Bootstrap 5.

---

## 📁 Estrutura do Projeto

```bash
exemplosjs/
├── ordenando.html       # Página com algoritmos de ordenação e manipulação DOM
├── ordenando.js         # Funções JavaScript para ordenação e embaralhamento
├── receitas.html        # Página com cards de receitas gerados dinamicamente via JSON
├── arroz.jpg            # Imagem da receita "Arroz de Couve-Flor"
├── bolo.jpg             # Imagem da receita "Bolo de Café"
├── coxinha.jpg          # Imagem da receita "Coxinha de Brigadeiro"
├── usuarios.html        # Página que consome API REST (reqres.in) com Vue.js


🔹 1. Ordenação de Valores (ordenando.html + ordenando.js)

✨ Funcionalidades:

Campo de input para inserir valores numéricos.

Botões para adicionar, ordenar (com Bubble Sort, Selection Sort ou Quick Sort) e misturar valores.

Utiliza DOM clássico para criar elementos li dinamicamente e atualizar a interface.

Funções implementadas com Arrow Functions para os algoritmos e manipulação.

🔹 2. Catálogo de Receitas Dinâmico (receitas.html)

✨ Funcionalidades:

Utiliza vetor de objetos JSON contendo:

título da receita

ingredientes (array)

modo de preparo

imagem

Cada receita é exibida como um card do Bootstrap, gerado via JavaScript.

Imagens com tamanho padronizado (150px de altura) e interface centralizada.

Exibição automática no carregamento da página com onload.

🔹 3. Exibição de Usuários via API REST (usuarios.html)

✨ Funcionalidades:

Consome API pública reqres.in utilizando Vue.js.

Os dados são carregados automaticamente via Fetch API no mounted().

Utiliza x-api-key: reqres-free-v1 no cabeçalho da requisição.

Exibição de cards responsivos com nome, e-mail e avatar de cada usuário.

Layout centralizado com Bootstrap e flex-wrap.

📌 Tecnologias Utilizadas:

HTML5

JavaScript (ES6+)

DOM API

JSON

Vue.js 2.x

Bootstrap 5

Fetch API

🚀 Como Executar:

Clone o repositório ou baixe os arquivos.

Abra os arquivos .html no navegador.

Para a página usuarios.html, certifique-se de:

Estar com conexão ativa à internet.

Preferencialmente utilizar o recurso Live Server do VS Code para evitar problemas de CORS ao consumir a API.

👨‍🏫 Autor

Projeto desenvolvido por Edson Victor
Curso: Desenvolvimento Full Stack
