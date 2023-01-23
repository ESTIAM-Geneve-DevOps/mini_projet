function airecercle(arg)
{
    let rayon = parseFloat(arg)

    if (isNaN(rayon))
        return -1;

    return Math.PI * rayon * rayon;
}

module.exports = airecercle;