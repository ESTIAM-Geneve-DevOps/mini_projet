function somme(args)
{
    if(args == "")
        return 0;
    let somme = 0;
    let chaine = args.replaceAll(' ','');

    // tests if string contains digits (integers) only
    if(Number.isInteger(parseInt(chaine)))
    {
        let array = chaine.split('');
        array.forEach(digit => somme += parseInt(digit));
        return somme;
    }
    else
    {
        let array = alphabetPosition(args).split(' ');
        array.forEach(digit => somme += parseInt(digit));
        return somme;
    }
}

function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++) {
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91)
    {
        if(text[i] == text[i].toUpperCase())
        {
            result += (code - 64 + 26) + " ";
        }
        else
        {
            result += (code - 64) + " ";
        }
    }
  }

  return result.slice(0, result.length - 1);
}

module.exports = somme;