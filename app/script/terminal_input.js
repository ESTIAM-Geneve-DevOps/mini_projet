function terminal_input() {
    var input = document.getElementById("inputCommand").value;
    var command = input.split(" ")[0];
    var argument = input.split(" ")[1];
    switch (command) {
      case "premier":
        alert("Commande premier");
        premier(argument)
        break;
      default:
        alert("Commande non reconnue");
    }
    return false;
  }