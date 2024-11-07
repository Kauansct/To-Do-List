# Lista de Tarefas

Este projeto é uma aplicação web para gerenciar tarefas pessoais, onde você pode adicionar, editar e excluir tarefas com categorias diferentes, como estudos, trabalho e saúde. A aplicação usa `localStorage` para persistir as tarefas no navegador, e a interface é construída usando HTML, CSS, JavaScript e Bootstrap.

## Arquivos Principais

- **index.html**: Página inicial onde você pode registrar uma nova tarefa.
- **taskList.html**: Página para visualizar a lista de tarefas registradas.
- **app.js**: Script que contém as classes `Task` e `Database`, responsáveis pelo gerenciamento e manipulação das tarefas no `localStorage`.

## Funcionalidades

1. **Adicionar Tarefa**: Permite ao usuário criar uma nova tarefa com ano, mês, dia, tipo e descrição.
2. **Listar Tarefas**: Exibe uma lista de tarefas salvas no navegador, organizadas por data, tipo e descrição.
3. **Editar Tarefa**: Permite editar os detalhes de uma tarefa existente.
4. **Excluir Tarefa**: Permite remover uma tarefa da lista.

## Dependências

- [Bootstrap 4](https://getbootstrap.com/): Para estilização e componentes de UI.
- jQuery: Utilizado para manipulação do DOM e eventos.

Essas dependências são carregadas diretamente de uma CDN no cabeçalho dos arquivos HTML.

## Instalando Dependências Localmente

Se desejar rodar as dependências localmente em vez de uma CDN, siga estas etapas:

1. **Instale o Bootstrap 4**:
   - Faça o download do Bootstrap: [https://getbootstrap.com/docs/4.0/getting-started/download/](https://getbootstrap.com/docs/4.0/getting-started/download/)
   - Extraia o conteúdo e copie os arquivos `bootstrap.min.css` e `bootstrap.min.js` para a pasta `css` e `js` do seu projeto, respectivamente.

2. **Instale o jQuery**:
   - Faça o download do jQuery: [https://jquery.com/download/](https://jquery.com/download/)
   - Coloque o arquivo `jquery.min.js` na pasta `js` do seu projeto.

## Instalação e Execução

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/usuario/projeto-lista-de-tarefas.git

2. **Abra o projeto:** Navegue para a pasta onde o projeto foi clonado e abra o arquivo index.html em um navegador para acessar a interface de registro de tarefas.

3. **Adicione Tarefas:** Preencha os campos no formulário de registro e clique em "Salvar" para adicionar uma tarefa.
Navegue até a página taskList.html para visualizar, editar ou excluir tarefas existentes.

## Observações

As tarefas são armazenadas usando localStorage, logo, permanecem salvas apenas no navegador atual. Se o cache for limpo, as tarefas também serão removidas.
