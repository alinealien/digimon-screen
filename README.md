## Digimon Screen

Neste super projeto, desenvolvemos o nosso Digimon Search. O objetivo é práticarmos conceitos da tríade frontend: o html, css e javascript.

Todo conteúdo apresentado é para fins educacionais.

![Imagem](https://i.imgur.com/sZstEdN.jpg)  

___________________________________________________________________

### Estrutura HTML Utilizada no Projeto

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

**Glossário de Seletores e Propriedades CSS:**

**Universal Selector (*):**
        **margin:** Define a margem ao redor do elemento.
        **padding:** Define o preenchimento dentro do elemento.
        **border:** Define a borda ao redor do elemento.
        **box-sizing:** Define o modelo de caixa, incluindo a borda no cálculo do tamanho.

**Elementos Gerais:**
        **position:** Define o método de posicionamento do elemento.
        **max-width:** Define a largura máxima do elemento.
        **width:** Define a largura do elemento.
        **height:** Define a altura do elemento.
        **margin-top:** Define a margem superior do elemento.
        **padding:** Define o preenchimento dentro do elemento.
        **border-radius:** Define o raio das bordas do elemento.
        **background:** Define o plano de fundo do elemento com um gradiente linear.
        **transform:** Aplica uma transformação 3D ao elemento.

**Flexbox:**
        **display:** Define o método de exibição do elemento como flexível.
        **justify-content:** Alinha o conteúdo horizontalmente.
        **align-items:** Alinha o conteúdo verticalmente.
        **flex-direction:** Define a direção do eixo principal.

**Animações:**
        **animation:** Aplica uma animação a um elemento.

**Keyframes (@keyframes pulseanimation):**
        **transform:** Define transformações em diferentes estágios da animação.

**ID Específico (#t-nome__bt):**
        **user-select:** Define se o texto pode ser selecionado pelo usuário.
        **font-family:** Define a família de fontes do elemento.
        **font-size:** Define o tamanho da fonte.
        **color:** Define a cor do texto.
        **font-weight:** Define o peso da fonte.

**Background Container (.container-bg):**
        **position:** Define o método de posicionamento do elemento.
        **overflow:** Define o comportamento de overflow do elemento.
        **background-size:** Define o tamanho da imagem de fundo.
        **background-position:** Define a posição da imagem de fundo.
        **background-image:** Define a imagem de fundo.

**Informações Gerais (.container-info e .a-info__column):**
        **font-weight:** Define o peso da fonte.
        **color:** Define a cor do texto.

**Barra de Progresso (.b-nv-ex__progress e .b-nv-in__progress):**
        **position:** Define o método de posicionamento do elemento.
        **background-color:** Define a cor de fundo do elemento.
        **height:** Define a altura do elemento.
        **width:** Define a largura do elemento.
        **border-radius:** Define o raio das bordas do elemento.
____________________________________________________________________

**Links Importantes:**

**Box-Model:** https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model

**BEM:** https://desenvolvimentoparaweb.com/css/bem/