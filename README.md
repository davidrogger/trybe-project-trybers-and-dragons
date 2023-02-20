# Sobre

## Seção: `Introdução à Orientação a Objetos (POO) e SOLID`

- Apresentando um paradigma que é a base para inúmeras arquiteturas, POO, Programação orientada a objetos, onde foi mostrado como implementar usando o typescript, por meio de classes, detalhando seus pilares, abstração, encapsulamento, herança e poliformismo.
- Seguindo com a introdução aos princípios SOLID:
- `S`ingle Responsability
- `O`pen/Closed
- `L`iskov Substitution
- `I`nterface segregation
- `D`ependency Inversion
#
<div align="center">
  <a href="#">
    <img width="30%" src="./readme-imgs/project_top.webp">
    <img width="30%" src="./readme-imgs/project_mid.webp">
    <img width="30%" src="./readme-imgs/project_bot.webp">
  </a>
</div>

>*lore*
#
## Projeto: `Trybers and Dragons`

- Atividade para por em prática a criação de classes usando o paradigma de orientação a objeto seguindo alguns princípios SOLID, de um jogo de fantasia, onde existem raças, arquetipos, personagens, monstros com caracteristicas exclusivas e compartilhadas, e combate baseado em PVE e PVP.

# Tecnologias e ferramentas usadas 🛠

![Docker](https://img.shields.io/badge/-Docker-fff?style=flat-square&logo=docker)
![TypeScript](https://img.shields.io/badge/-TypeScript-235a97?style=flat-square&logo=typescript&logoColor=ffffff)


# Desafios

- Criar classes usando dos pilares de POO.
- Criar interfaces
- Implementar em Typescript, classes, Instâncias, atributos, métodos e objetos.
- Aplicar princípios SOLID.

# Conclusão

- POO tem o objetivo de aproximar o mundo digital ao mundo real, inicialmente a mescla e confusão entre o pilar de abstração e encapsulamento é muito grande, conforme fui criando cada modelo do projeto foi fixando mais os pilares trabalhando na classe abstrata:
1. Abstração: Definindo os aspectos relevantes do objeto criado, no caso da raça, onde é criada uma classe abstrada, onde toda raça vai ter um nome, dexterity, maxLifePoints e createdRacesInstance.
2. Encapsulamento: Onde cada objeto tem seu nome, dexterity ou vida máxima, que são privados e determinados ao criarmos a raça com seu nome, deixando escondido e não sendo possivel altera-los, se não for usando metodos determinados que vão altera-los, protegendo o conteudo que desejamos, evitando alterações indesejadas e uso inadequados.
3. Herança: Onde cada raça herdou sua caracteriscas basicas, pois toda raça teriam aquela base de atributos e metodos mais suas pecularidades invididuais, todas raças tem os atributos name, dexterity, maxLifePoints e o metodo createdRacesInstances.
4. Poliformismo: Tendo os mesmo métodos, mas com funcionalidades diferentes toda raça tem seu contador individual de raças, com o createdRacesInstance, onde a classe realiza uma contagem, de quantas raças de anão foram criadas ou de elfos, quando formos verificar, cada um tem sua contagem de forma individual.

</details>

<details>
  <summary>
    <strong>
      :newspaper_roll: Requisitos solicitados durante o desenvolvimento do projeto
    </strong>
  </summary>

 
### Requisitos
*Nome* | *Avaliação*
--- | :---:
01 - Classe Race | :heavy_check_mark:
02 - Classes que herdam de Race | :heavy_check_mark:
03 - Energy | :heavy_check_mark:
04 - Classe Archetype | :heavy_check_mark:
05 - Classes que herdam de Archetype | :heavy_check_mark:
06 - Interface Fighter | :heavy_check_mark:
07 - Classe Character | :heavy_check_mark:
08 - Interface SimpleFighter | :heavy_check_mark:
09 - Classe Monster | :heavy_check_mark:
10 - Classe PVP | :heavy_check_mark:
11 - Classe PVE | :heavy_check_mark:
12 - Classe Dragon | :heavy_check_mark:
13 - Arquivo index | :heavy_check_mark:

</details>

<details>
  <summary>
    <strong>
      :memo: Todo list
    </strong>
  </summary>

  - [x] - ~~Criar aplicação com base nos requisitos da trybe.~~ ![data](https://badgen.net/badge/delivery/10-08-2022/green)

</details>

#

<div align="right">
  <img src="https://badgen.net/badge/last%20update/17-02-2023/blue">
</div>
