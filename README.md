Este é um projeto desenvolvido para a disciplina de **Desenvolvimento Web** no período 2024.2 da **Universidade Federal Fluminense (UFF)**. O projeto foi baseado nos códigos fornecidos pelo professor e aprimorado com diversas funcionalidades implementadas.

## Escopo

O projeto consiste em uma **loja online** para aluguel e venda de barracas.

## Tecnologias Utilizadas

- **Frontend:** React com Bootstrap 5
- **Backend:** Java (Spring Boot)
- **Validação:** Biblioteca Zod

## Funcionalidades Implementadas

### Gerenciamento de Barracas
- Inclusão, alteração e remoção de barracas, com validação utilizando a biblioteca **Zod**.
- Paginação na listagem de barracas cadastradas.
- Exibição de um **spinner do Bootstrap** ao remover uma barraca da lista.

### Tabela Interativa
- Ícones no topo das colunas para **ordenar os dados** da tabela que lista as barracas cadastradas.

### Carrinho de Compras
- Página dedicada ao carrinho.
- Permite **alteração da quantidade** e **remoção de produtos**.

### Rotas Acessíveis somente por Login
- Janela de **login exibida automaticamente** ao acessar uma rota protegida, a exemplo da página de carrinho.

### Interface Personalizada
- Toda a parte visual foi desenvolvida **do zero**, utilizando **Bootstrap 5**.
