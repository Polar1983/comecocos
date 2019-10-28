document.addEventListener("keydown", tecla);

function hola() {
  const horizont = Math.random() * (1260 - 0)
  const vertical = Math.random() * (570 - 0)
  $(".bicho").css("background-color", "yellow");
  $(".bicho").css("left", horizont);
  $(".bicho").css("top", vertical);
}

function tecla(event) {
  var x = event.keyCode;
  const position_mia = $(".obj1").position();
  const position_tuya = $(".bicho").position();
  const bigW = $(".obj1").width();
  const bigH = $(".obj1").height();
  const top = position_mia.top - 10;
  const bot = position_mia.top + 10;
  const rigth = position_mia.left + 10;
  const left = position_mia.left - 10;
  const bigW_incr = bigW + 5;
  const bigH_incr = bigH + 5;;




  switch (x) {
    case 87:
      $(".obj1").css("top", top);
      $(".obj1").css("background-image", "url(pacmanup.gif)");
      break;
    case 83:
      $(".obj1").css("top", bot);
      $(".obj1").css("background-image", "url(pacmandown.gif)");

      break;
    case 68:
      $(".obj1").css("left", rigth);
      $(".obj1").css("background-image", "url(pacmanright.gif)");
      break;
    case 65:
      $(".obj1").css("left", left);
      $(".obj1").css("background-image", "url(pacmanleft.gif)");
      break;
  }

  if (position_tuya.top - bigH < position_mia.top && position_tuya.top + bigH > position_mia.top && position_tuya.left - bigW < position_mia.left &&
    position_tuya.left + bigW > position_mia.left) {
    hola();
    $(".obj1").width(bigW_incr);
    $(".obj1").height(bigH_incr);
  }
  
  window.setInterval("hola()", 10000);
