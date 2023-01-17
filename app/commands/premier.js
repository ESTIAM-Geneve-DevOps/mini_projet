
function premier(arg) 
{
    let nombre = parseInt(arg)
    
    if (!Number.isInteger(nombre)) return "false"
    if (nombre <= 1) return "false";
    if (nombre === 2) return "true";
    
    // storing the calculated value would be much 
    // better than calculating in each iteration
    var sqrt = Math.sqrt(nombre);
    console.log(sqrt);
    
    for (var i = 2; i <= sqrt; i++) 
    {
        console.log(nombre % i);
        if (nombre % i === 0)
        {
            return "false";
        }
        else
        {
            console.log("aaa")
            return "true";
        }
    }
        
}

module.exports = premier;