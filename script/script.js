document.querySelector('.play').addEventListener('click', function() {
    this.parentNode.classList.add('naik');
})

const pilih = document.querySelectorAll('.player .img');
const komp = document.querySelectorAll('.comp .img');
const hasil = document.querySelector('.hasil h2');
const containHasil = document.querySelector('.container-hasil');
const ulangBtn = containHasil.querySelector('button');

function pilihanKomputer() {
    const angka = Math.round(Math.random() * 2);
    return komp[angka];
}

function menangKalah(player, komp) {
    const pilihanPlayer = player.querySelector('img').getAttribute('src');
    const pilihanKomputer = komp.querySelector('img').getAttribute('src');
    let string = "";
    if (pilihanPlayer == pilihanKomputer) {
        string = 'seri!';
    } else if (pilihanPlayer.includes('batu')) {
        string = (pilihanKomputer == 'gunting') ? 'Anda Kalah!' : 'Anda menang!';
    } else if (pilihanPlayer.includes('gunting')) {
        string = (pilihanKomputer == 'batu') ? 'anda kalah!' : 'anda menang!';
    } else if (pilihanPlayer.includes('kertas')) {
        string = (pilihanKomputer == 'gunting') ? 'anda Kalah!' : 'anda Menang!';
    }
    return string;
}

pilih.forEach(p => {
    p.addEventListener('click', function() {
        const enemy = pilihanKomputer();
        enemy.classList.toggle('muncul');
        hasil.textContent = menangKalah(p, enemy);
        setTimeout(() => {
            containHasil.classList.add('muncul');
            enemy.classList.toggle('muncul')
        }, 1000);
    })
})

ulangBtn.addEventListener('click', function() {
    containHasil.classList.remove('muncul')
})