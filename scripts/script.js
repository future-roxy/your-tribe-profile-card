let ul = document.getElementById("toybox");
let lis = ul.getElementsByTagName("li");

function assignHeader(item){
  const number = Math.floor(Math.random() * 3);

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

for (let i = 0; i < lis.length; ++i) {
  assignHeader(lis[i]);
}

