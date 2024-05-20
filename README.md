# Star Wars Characters App

Este projeto é uma aplicação React que permite aos usuários listar, adicionar aos favoritos, remover dos favoritos e filtrar personagens de Star Wars utilizando dados da SWAPI. O foco do projeto é na qualidade do código, uso adequado das ferramentas do React, boas práticas de desenvolvimento e uma arquitetura bem estruturada utilizando DDD (Domain-Driven Design) e Atomic Design.

Acesse a versão em produção aqui: https://maia-rj.github.io/start-wars/

## Funcionalidades

- Listar personagens de Star Wars obtidos da SWAPI.
- Exibir pelo menos o nome e a altura dos personagens.
- Implementar paginação para a lista de personagens.
- Adicionar personagens a uma lista de favoritos.
- Armazenar os personagens favoritos no `localStorage`.
- Remover personagens da lista de favoritos.
- Filtrar a lista para mostrar todos os personagens ou apenas os favoritos.
- Persistência dos favoritos entre recarregamentos da página.
- Estilização esteticamente agradável e responsiva.
- Tratamento de erros com mensagens exibidas via toast.
- Testes unitários para componentes e hooks.

## Arquitetura do Projeto

### Domain-Driven Design (DDD)

O DDD foi aplicado para garantir uma clara separação das responsabilidades e promover um código mais sustentável e escalável. A estrutura do projeto é dividida em camadas:

- **Domain**: Contém as entidades de negócio, serviços de domínio e interfaces de repositórios. Esta camada não depende de outras camadas.
  - `entities/`: Definições das entidades de domínio.
  - `services/`: Lógica de negócios e operações de domínio.
  - `repositories/`: Interfaces para os repositórios de dados.

- **Infrastructure**: Implementa os repositórios definidos no domínio e configurações de infraestrutura, como clientes HTTP (Axios).
  - `api/`: Configurações e instâncias de clientes HTTP.
  - `store/`: Estado global da aplicação utilizando Zustand.

- **Application**: Contém a lógica de aplicação que orquestra a interação entre as camadas de domínio e infraestrutura. Inclui componentes, hooks e contexto.
  - `components/`: Componentes React organizados utilizando Atomic Design.
  - `hooks/`: Hooks personalizados para lógica de estado e efeitos.
  - `pages/`: Páginas da aplicação.

### Atomic Design

O Atomic Design foi aplicado para organizar os componentes de forma modular e reutilizável. A estrutura é dividida em:

- **Atoms**: Componentes básicos e indivisíveis, como botões, inputs e ícones.
- **Molecules**: Combinações simples de átomos que formam uma unidade funcional, como campos de formulários com label e input.
- **Organisms**: Combinações mais complexas de moléculas e átomos que formam seções completas da interface, como formulários e listas de itens.
- **Templates**: Estruturas de página que contêm organismos organizados para formar layouts completos.
- **Pages**: Instâncias específicas de templates preenchidas com dados reais.

## Estrutura de Diretórios

```plaintext
src/
|-- application/
|   |-- components/
|       |-- atoms/
|       |-- molecules/
|       |-- organisms/
|   |-- hooks/
|   |-- pages/
|-- domain/
|   |-- entities/
|   |-- services/
|   |-- repositories/
|-- infrastructure/
|   |-- api/
|   |-- store/
|-- index.tsx
|-- App.tsx
```

## Instalação

Clone o repositório:

```bash
git clone https://github.com/maia-rj/start-wars.git
cd star-wars-characters-app
````

Instale as dependências:
```bash
npm install
````
Inicie a aplicação:

```bash
npm start
```

## Scripts Disponíveis

- npm start: Inicia a aplicação em modo de desenvolvimento;
- npm run build: Compila a aplicação para produção na pasta build;
- npm test: Executa os testes unitários;

## Testes
Os testes são escritos usando a biblioteca Testing Library e Jest. Para rodar os testes, utilize o comando:
```bash
npm test
```
## Contribuição
Contribuições são bem-vindas! Por favor, abra uma issue ou envie um pull request.

## Observações
- Melhorar cobertura de testes;
- Adicionar busca por nome;

