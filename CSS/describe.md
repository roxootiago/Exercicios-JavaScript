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
    /* medial e lateral */
~~~
