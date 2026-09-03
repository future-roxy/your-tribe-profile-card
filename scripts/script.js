// laat het programma weten welke DOM elementen we precies willen
let ul = document.getElementById("toybox");
let lis = ul.getElementsByTagName("li");

// geef een random headerclass aan ieder element
function assignHeader(item){
  // random nummer tussen 0 en 2
  const number = Math.floor(Math.random() * 3);

  // geef de class op basis van dat nummer
  switch(number){
    case 0:
      item.classList.add("topHeader");
      break;

    case 1:
      item.classList.add("bottomHeader");

      break;
    
    case 2:
      item.classList.add("leftHeader");

      break;
  }
}

// geef een random header aan elke li die bovenaan de pagina is gevonden
for (let i = 0; i < lis.length; ++i) {
  assignHeader(lis[i]);
}

