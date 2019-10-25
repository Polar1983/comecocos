document.addEventListener("keydown", tecla);

function tecla(event) {
  var x = event.keyCode;
  const position_mia = $(".obj1").position();
  const position_tuya = $(".obj2").position();
  const bigW=$( ".obj1").width();
  const bigH=$( ".obj1").height();
  const top = position_mia.top - 10;
  const bot = position_mia.top + 10;
  const rigth = position_mia.left + 10;
  const left = position_mia.left - 10;
  const bigW_incr=bigW+20;
  const bigH_incr=bigH+20;;


  switch (x) {
    case 87:
      $(".obj1").css("top", top);
      console.log(position_mia.top);
      break;
    case 83:
      $(".obj1").css("top", bot);
      break;
    case 68:
      $(".obj1").css("left", rigth);
      break;
    case 65:
      $(".obj1").css("left", left);
      break;
  }

  if (
    position_tuya.top - 40 < position_mia.top &&
    position_tuya.top + 40 > position_mia.top &&
    position_tuya.left - 40 < position_mia.left &&
    position_tuya.left + 40 > position_mia.left
  ) {
    $( ".obj1").width(bigW_incr);
    $( ".obj1").height(bigH_incr);
  }

  
}
