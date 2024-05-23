
const btnXp = document.querySelector('#btnXp');
console.log(btnXp);


btnXp.addEventListener('click', function () {
    const herois = document.querySelectorAll('.heroi');
    console.log(herois);

    herois.forEach((batatinha) => {
        let forca = Number(batatinha.querySelector('.forca').textContent);
        let velocidade = Number(batatinha.querySelector('.velocidade').textContent);
        let agilidade = Number(batatinha.querySelector('.agilidade').textContent);
        let xpFinal = (forca + velocidade + agilidade) / 3;
        batatinha.querySelector('.xp').textContent = xpFinal.toFixed(1)
    })



})

