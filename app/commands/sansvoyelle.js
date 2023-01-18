function sansvoyelle(chaine) 
{
    return chaine.replace(/[aeiou]/ig,'');
}

module.exports = sansvoyelle;