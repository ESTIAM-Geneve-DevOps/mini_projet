function pluscourt(chaine)
{
    var array = chaine.split(' ');
    var smaller = array.reduce(function(a, b) {
        return a.length <= b.length ? a : b;
    })

    return chaine.replace(smaller, '');
}

module.exports = pluscourt;