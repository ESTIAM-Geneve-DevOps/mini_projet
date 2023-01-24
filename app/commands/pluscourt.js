function pluscourt(chaine)
{
    var array = chaine.split(' ');
    return array.reduce(function(a, b) {
        return a.length <= b.length ? a : b;
    })

}

module.exports = pluscourt;