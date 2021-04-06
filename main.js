const reloj = document.querySelector(".tiempo");

const getHora = () => {
    const objetofecha = new Date();
    const elementos = {
        hora : objetofecha.getHours(),
        minutos : objetofecha.getMinutes(),
        segundos : objetofecha.getSeconds(),
    }

    reloj.innerHTML = `${elementos.hora} hrs : ${elementos.minutos} min : ${elementos.segundos} seg`;
};

setInterval(getHora,1000);