# Digimon Screen

Neste projeto, iremos desenvolver uma página de Busca de Digimons. O objetivo é práticarmos conceitos de html e css. Além de realizarmos a chamada para a nossa API utilizando o JavaScript.

[Digimon Search](https://alinealien.github.io/digimon-screen/)


**IDE Utilizada:** Visual Studio Code.



## Conceitos Praticados no Projeto

No desenvolvimento do projeto utilizamos alguns conceitos fundamentais de html e css, como o box-model e a aplicação de elementos html que ajudam na estruturação e organização do conteúdo em uma página web.

![Imagem 2](https://imgur.com/C2Pkh8X.jpg)
___________________________________________________________________

**MODELO DA PÁGINA**

Na imagem a baixo, podemos observar um contorno em alguns elementos da nossa página. Essa seleção antes do desenvovlimento do projeto, contribue imensamente para a construção e organização do nosso html.

Vamos pensar que cada contorno são como caixas/containeres que iram abrigar nossos elementos. Desse modo, se observamos, precisaremos criar elementos como <code><div></code> ou <code><section></code> para guardar:

1. Todo o nosso conteúdo da página: <code>container</code>;

2. O Background da nossa página: <code>container-bg</code>;

3. Nosso card central: <code>card</code>;
Seus sub-elementos internos
3.1 - Logo Digimon: <code>i-card__logo</code>;
3.2 - Imagem do Digimon: <code>i-card__digimon</code>;
3.3 - Nome do Digimon:<code>t-nome__bt</code>;
3.4 - Container das informações: <code>container-info</code>;
3.5 - Colunas de HP, ATK, DEF: <code>a-info__column</code>;
3.6 - Colunas Status HP, ATK, DEF [3x]: <code>b-nv-ex__progressHp</code>; e <code>b-nv-in__progress-hp</code>;

![Imagem](https://i.imgur.com/sZstEdN.jpg)  

___________________________________________________________________


**Links Importantes:**

**Box-Model:** [Sobre o Box-Model](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)

**BEM:** [Sobre o BEM](https://desenvolvimentoparaweb.com/css/bem/)