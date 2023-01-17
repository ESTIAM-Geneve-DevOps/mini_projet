
function premier(nombre) 
{
    if (!Number.isInteger(nombre)) return "false"
    if (nombre <= 1) return "false";
    if (nombre === 2) return "true";
    
    // storing the calculated value would be much 
    // better than calculating in each iteration
    var sqrt = Math.sqrt(nombre);
    
    for (var i = 2; i <= sqrt; i++) 
        if (nombre % i === 0) return "false";
    return "true";
}

module.exports = premier;