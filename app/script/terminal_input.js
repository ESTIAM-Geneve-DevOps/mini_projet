function terminal_input(input) {
  if (input == null) {
    var input = document.getElementById("inputCommand").value;
  }
  var command = input.split(" ")[0];
  var argument = input.split(" ")[1];
  switch (command) {
    case "premier":
      var result = premier(argument);
      alert(result);
      break;
    case "airecercle":
      var result = airecercle(argument);
      alert(result);
      break;
    case "estpair":
      var result = estpair(argument);
      alert(result);
      break;
    case "pluscourt":
      
      var result = pluscourt(argument);
      alert(result);
      break;
    case "sansvoyelle":
      var result = sansvoyelle(argument);
      alert(result);
      break;
    case "somme":
      var result = somme(argument);
      alert(result);
      break;

    default:
      alert("Commande non reconnue");
  }
  return false;
}