
function hola(){

const horizont =  Math.random() * (1260 - 0) 
const vertical =  Math.random() * (570 - 0) 
    
    $(".bicho").css("left", horizont);
    $(".bicho").css("top", vertical);
  }


  window.setInterval("hola()",1000);



