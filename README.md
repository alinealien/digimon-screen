# Digimon Screen

Neste super projeto, desenvolvemos o nosso Digimon Search. O objetivo é práticarmos conceitos da tríade frontend: o html, css e javascript.

Todo conteúdo apresentado é para fins educacionais.

![Imagem](https://i.imgur.com/sZstEdN.jpg)  

___________________________________________________________________

## Estrutura HTML Utilizada no Projeto

**Box-Model:**
O Box Model é um conceito fundamental no design e layout de páginas web. Ele representa como os elementos HTML são renderizados, definindo a estrutura do bloco, que inclui o conteúdo, preenchimento, borda e margem. Ele é crucial para controlar o layout e o espaçamento dos elementos em uma página web. Ele permite que os desenvolvedores ajustem o tamanho e o espaçamento dos elementos de forma consistente, garantindo um design responsivo e coeso.

**Tags HTML:**
O HTML desenvolvido define uma estrutura básica de página web com um cartão de apresentação de Digimon, incluindo imagem, nome e informações. Aqui o Box Model é implicitamente aplicado para controlar o layout e espaçamento dos elementos.
___________________________________________________________________

### Estrutura de CSS

Criamos 4 arquivos css para a estilização do nosso projeto, sendo:

**O reset.css:**

Ele aplica um reset universal a todos os elementos na página, isso ocorre porque nossos navegadores aplicam um estilo padrão e esse arquivo da um reset nessas configurações.

**O bg__digimons.css:**

Nosso estilo para um contêiner de fundo.

**Temos o card__digimons.css:**

Que é onde fica os estilos para um elemento de cartão e estilos para o logotipo do cartão.

**atb__digimons.css:**

É o nosso estilo para o contêiner referente as colunas de informações dos digimons.


__________________________________________________________________

## **Glossário de Seletores e Propriedades CSS:**

## **Universal Selector (*):**

<code>margin:</code> Define a margem ao redor do elemento.

<code>padding:</code> Define o preenchimento dentro do elemento.

<code>border:</code> Define a borda ao redor do elemento.

<code>box-sizing:</code> Define o modelo de caixa, incluindo a borda no cálculo do tamanho.

## **Elementos Gerais:**
<code>position:</code> Define o método de posicionamento do elemento.
<code>max-width:</code> Define a largura máxima do elemento.
<code>width:</code> Define a largura do elemento.
<code>height:</code> Define a altura do elemento.
<code>margin-top:</code> Define a margem superior do elemento.
<code>padding:</code> Define o preenchimento dentro do elemento.
<code>border-radius:</code> Define o raio das bordas do elemento.
<code>background:</code> Define o plano de fundo do elemento com um gradiente linear.
<code>transform:</code> Aplica uma transformação 3D ao elemento.

## **Flexbox:**
<code>display:</code> Define o método de exibição do elemento como flexível.
<code>justify-content:</code> Alinha o conteúdo horizontalmente.
<code>align-items:</code> Alinha o conteúdo verticalmente.
<code>flex-direction:</code> Define a direção do eixo principal.

## **Animações:**
<code>animation:</code> Aplica uma animação a um elemento.

## **Keyframes (@keyframes pulseanimation):**
<code>transform:</code> Define transformações em diferentes estágios da animação.

## **ID Específico (#t-nome__bt):**
<code>user-select:</code> Define se o texto pode ser selecionado pelo usuário.
<code>font-family:</code> Define a família de fontes do elemento.
<code>font-size:</code> Define o tamanho da fonte.
<code>color:</code> Define a cor do texto.
<code>font-weight:</code> Define o peso da fonte.

## **Background Container (.container-bg):**
<code>position:</code> Define o método de posicionamento do elemento.
<code>overflow:</code> Define o comportamento de overflow do elemento.
<code>background-size:</code> Define o tamanho da imagem de fundo.
<code>background-position:</code> Define a posição da imagem de fundo.
<code>background-image:</code> Define a imagem de fundo.

## **Informações Gerais (.container-info e .a-info__column):**
<code>font-weight:</code> Define o peso da fonte.
<code>color:</code> Define a cor do texto.

## **Barra de Progresso (.b-nv-ex__progress e .b-nv-in__progress):**
<code>position:</code> Define o método de posicionamento do elemento.
<code>background-color:</code> Define a cor de fundo do elemento.
<code>height:</code> Define a altura do elemento.
<code>width:</code> Define a largura do elemento.
<code>border-radius:</code> Define o raio das bordas do elemento.
____________________________________________________________________

**Links Importantes:**

**Box-Model:** https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model

**BEM:** https://desenvolvimentoparaweb.com/css/bem/