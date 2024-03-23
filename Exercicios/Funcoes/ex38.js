function contagem(inicio = 0, fim = 100) {
  if (inicio > fim) {
    inicio = inicio + fim;
    fim = inicio - fim;
    inicio = inicio - fim;
  }
  for (i = inicio; i <= fim; i++) {
    if(i %2 == 1){
        console.log(i);
    }
  }
}

contagem(25, 5);
