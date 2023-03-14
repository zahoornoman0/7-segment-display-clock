`use strict`;

hr1 = document.querySelector('#hr-1');
hr2 = document.querySelector('#hr-2');

mn1 = document.querySelector('#mn-1');
mn2 = document.querySelector('#mn-2');

sc1 = document.querySelector('#sc-1');
sc2 = document.querySelector('#sc-2');

dot1 = document.querySelector('#dot-1');
dot2 = document.querySelector('#dot-2');

function setClock() {
    const now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();

    unitH = hours % 10;
    tensH = Math.floor(hours / 10) % 10;
    hr1.src = `https://zahoornoman0.github.io//1x/d-${tensH}.png`;
    hr2.src = `https://zahoornoman0.github.io//1x/d-${unitH}.png`;

    unitM = minutes % 10;
    tensM = Math.floor(minutes / 10) % 10;
    mn1.src = `https://zahoornoman0.github.io//1x/d-${tensM}.png`;
    mn2.src = `https://zahoornoman0.github.io//1x/d-${unitM}.png`;

    unitS = seconds % 10;
    tensS = Math.floor(seconds / 10) % 10;
    sc1.src = `https://zahoornoman0.github.io//1x/d-${tensS}.png`;
    sc2.src = `https://zahoornoman0.github.io//1x/d-${unitS}.png`;

    setTimeout(setClock, 1000);

}
setClock();
