const swap = (vetor, i, j) => {
  [vetor[i], vetor[j]] = [vetor[j], vetor[i]];
};

const shuffle = (vetor, trocas) => {
  for (let i = 0; i < trocas; i++) {
    const i1 = Math.floor(Math.random() * vetor.length);
    const i2 = Math.floor(Math.random() * vetor.length);
    swap(vetor, i1, i2);
  }
};

const bubble_sort = (vetor) => {
  for (let i = 0; i < vetor.length; i++) {
    for (let j = 0; j < vetor.length - 1 - i; j++) {
      if (vetor[j] > vetor[j + 1]) swap(vetor, j, j + 1);
    }
  }
};

const selection_sort = (vetor) => {
  for (let i = 0; i < vetor.length; i++) {
    let min = i;
    for (let j = i + 1; j < vetor.length; j++) {
      if (vetor[j] < vetor[min]) min = j;
    }
    if (min !== i) swap(vetor, i, min);
  }
};

const particionamento = (vetor, inicio, fim) => {
  const pivot = vetor[fim];
  let i = inicio;
  for (let j = inicio; j < fim; j++) {
    if (vetor[j] < pivot) {
      swap(vetor, i, j);
      i++;
    }
  }
  swap(vetor, i, fim);
  return i;
};

const quick_sort = (vetor, inicio = 0, fim = vetor.length - 1) => {
  if (inicio < fim) {
    const p = particionamento(vetor, inicio, fim);
    quick_sort(vetor, inicio, p - 1);
    quick_sort(vetor, p + 1, fim);
  }
};

// Funções clássicas
function add() {
  const input = document.getElementById("valor");
  const ul = document.getElementById("valores");
  const li = document.createElement("li");
  li.textContent = input.value;
  ul.appendChild(li);
  input.value = "";
}

function ordenar() {
  const ul = document.getElementById("valores");
  const algoritmo = document.getElementById("algoritmo");
  let vetor = Array.from(ul.children).map(li => parseInt(li.innerHTML));
  
  switch (algoritmo.selectedIndex) {
    case 0: bubble_sort(vetor); break;
    case 1: selection_sort(vetor); break;
    case 2: quick_sort(vetor); break;
  }

  ul.innerHTML = vetor.map(v => `<li>${v}</li>`).reduce((acc, cur) => acc + cur, "");
}

function misturar() {
  const ul = document.getElementById("valores");
  let vetor = Array.from(ul.children).map(li => parseInt(li.innerHTML));
  shuffle(vetor, 10);
  ul.innerHTML = vetor.map(v => `<li>${v}</li>`).reduce((acc, cur) => acc + cur, "");
}