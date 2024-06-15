# Pokédex Frontend

Este é o frontend da Pokédex, uma aplicação web para explorar informações sobre Pokémon. A aplicação utiliza React como framework principal para o frontend.

## Funcionalidades

- **Lista de Pokémon**: Exibe uma lista de Pokémon com seus nomes. Cada Pokémon na lista é clicável para ver detalhes individuais.
  
- **Detalhes do Pokémon**: Ao clicar em um Pokémon na lista, exibe informações detalhadas sobre o Pokémon selecionado, incluindo imagem, altura, peso, habilidades e tipos.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js (instalação através do [site oficial](https://nodejs.org/))
- npm (gerenciador de pacotes do Node.js, geralmente instalado junto com o Node.js)

## Instalação

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/seu-usuario/pokedex-frontend.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd pokedex-frontend
   ```

3. Instale as dependências necessárias:

   ```bash
   npm install
   ```

## Executando a Aplicação

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

5. Abra seu navegador e vá para [http://localhost:3000](http://localhost:3000) para visualizar a aplicação.

## Como Usar

- **Lista de Pokémon**: Na página inicial, você verá uma lista de Pokémon. Clique em qualquer Pokémon para ver seus detalhes.

- **Detalhes do Pokémon**: Após clicar em um Pokémon na lista, você será redirecionado para a página de detalhes, onde serão exibidas informações como imagem, altura, peso, habilidades e tipos do Pokémon selecionado.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
pokedex-frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── PokemonList.js
│   │   ├── PokemonDetails.js
│   │   ├── PokemonList.css
│   │   └── PokemonDetails.css
│   ├── services/
│   │   └── PokemonService.js
│   ├── App.js
│   ├── index.js
│   └── App.css
└── package.json
```

- **`public/`**: Contém o arquivo HTML principal da aplicação.
- **`src/`**: Contém o código-fonte da aplicação.
  - **`components/`**: Componentes React, incluindo `PokemonList` e `PokemonDetails`.
  - **`services/`**: Contém os serviços para interagir com a API de Pokémon.
  - **`App.js`**: Componente principal da aplicação.
  - **`index.js`**: Ponto de entrada do React.
  - **`App.css`**: Estilos globais da aplicação.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router**: Para gerenciar a navegação entre páginas.
- **Axios**: Cliente HTTP para fazer requisições à API de Pokémon.
- **CSS**: Estilização dos componentes utilizando CSS.
