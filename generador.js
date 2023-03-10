const generar = () => {
    let diccionario = '';
    if (document.getElementById('lowercaseCb').checked) {
        diccionario += 'qwertyuiopasdfghjklzxcvbnm';
    }
    if (document.getElementById('uppercaseCb').checked) {
        diccionario += 'QWERTYUIOPASDFGHJKLÑZXCVBNM';
    }
    if (document.getElementById('digitsCb').checked) {
        diccionario += '1234567890';
    }
    if (document.getElementById('specialsCb').checked) {
        diccionario += '!@#$%*()_+-={}[];<>:';
    }
    const length = document.querySelector('input[type="range"]').value;

    if(length <1 || diccionario.length === 0){
        return;
    }

    let contraseña = '';
    for (let i = 0; i < length; i++){
        const posicion = Math.floor(Math.random() * diccionario.length)
        contraseña += diccionario[posicion];
    }

    document.querySelector('input[type="text"]').value = contraseña;
}

[...document.querySelectorAll('input[type="checkbox"], button.generador')].forEach(elem => {
    elem.addEventListener('click', generar);
});

document.querySelector('input[type="range"]').addEventListener('input', e => {
    document.querySelector('div.rango span').innerHTML = e.target.value;
    generar();
});

document.querySelector('div.contraseña button').addEventListener('click', () =>{
    const contra = document.querySelector('input[type="text"]').value;
    navigator.clipboard.writeText(contra).then(() => {
        document.querySelector('div.contraseña button').innerHTML = 'Copiado!';
        setTimeout(() => {
            document.querySelector('div.contraseña button').innerHTML = 'Copiar';
        }, 1000);
    })
});

generar();