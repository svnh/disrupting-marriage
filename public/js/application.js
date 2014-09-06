$(document).ready(function(){
  $(document).on("keydown", function(e){
    if (e.which === 81) {
      update_player_position("p1")
    }
    else if (e.which === 80) {
     update_player_position("p2")
    }
  });
});

function update_player_position(player) {
  var square = $("table").find("." + player);
  var nextS = square.next();
  if (check_winner(nextS)) {
    $(document).unbind("keydown");
    declare_winner(player);
  };
  nextS.addClass(player);
  square.removeAttr("class");
};

function check_winner(square) {
  if (square.hasClass("finish")) {
    return true
  };
};

function declare_winner(player) {
  var winner = {won : player}
  $.post("/winner", winner, function(response) {
    $("div").append(response)
  })
};