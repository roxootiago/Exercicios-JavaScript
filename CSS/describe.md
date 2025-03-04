# Description Css

## Selectors

### Seletores  

- `*`  
- `elem`  
- `.class`  
- `#id`  
- `[atrib]`  <!-- [feira ~= escritorio] - para pegar a palavra inicial, serve para atributos com mais de uma palavra | [feira *= sa] verifica palavras com "sa" contidas -->
- `:pseudo-class`  
- `::pseudo-elementos`  

### Combinação de Seletores

- **Adjacent sibling:** `div + p` <!-- vem em seguida obrigatoriamente -->
- **General Sibling:** `div ~ p`<!-- filhos de um mesmo pai -->
- **Child:** `div > p` <!--  filho direto -->
- **Descendant:** `Div p`


## Box model

![imagem-box-model](https://miro.medium.com/v2/resize:fit:1200/1*E_YuB8x1B3T3h6PIJ_I9qQ.png)


### Shortcuts 

~~~css
    padding: 10px 10px 20px 20px;
    /* cima, direita, baixo, esquerda */
    margin: 10px  20px;
    /* media  e lateral */
~~~

## Display

### Block

~~~css
    display:block;
    /* Trata o elemento como um bloco */

    display: inline;
    /* Trata o elemento com suas altura e largura originais*/

    display: inline-block;
    /* o elemento tem comportamente de inline mas irá herdar comportamentos da propriedade block  */
~~~

## Overflow

~~~css
    overflow: hidden;
    /* caso ultrapasse a box do elemento vai ficar invisível */

    overflow: scroll;
    /* cria um scroll na box */
    overflow-x: scroll;
    /* cria um scroll naquele eixo na box */
~~~

## Float
~~~css
    clear: both; /* limpa todas as formatações da propriedade float */
~~~

## Cores

### Hexadecimal

~~~css
    color: #FF0000;
    color: #abc;/* entende-se que é similar: #aabbcc */
~~~

### RGB

~~~css
    color: rgb(255, 0, 0);
~~~

## Unidades
 ### Absolutos
 - px
 - cm 
 - mm

 ### Viewport
 - vw (1 => 1/100)
 - vh (1 => 1/100)

 ### Fontes
 - rem
 - em