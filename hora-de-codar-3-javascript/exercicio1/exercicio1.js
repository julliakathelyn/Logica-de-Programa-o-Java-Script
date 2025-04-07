// 1 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. No final da repetição escreva "EXPLOSÃO".

var contagem = 30;

while(contagem > 0 ){
    alert("Explodindo em " + contagem + "\n")
    contagem = contagem -1
}

alert("EXPLOSÃO") 