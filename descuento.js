const precio = document.querySelector('#precio');
const descuento= document.querySelector('#descuento');
const calcular = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');

    calcular.addEventListener('click', calcularDescuento);

    const cuponesObj = {
        'Elizabeth': 25,
        'Itzel': 50
    }
    
    function calcularDescuento(){
        const precioD = Number(precio.value);
        const cupon = descuento.value;

    if(!precioD || !descuento){
        resultado.innerText = 'Error, por favor llena el formulario';
    }

    let descuentoP;

    if(cuponesObj[cupon]){
        descuentoP = cuponesObj[cupon];
    }else{
        resultado.innerText = 'El cupón no es válido';
        return;
    }

    const nuevoPrecio = (precioD*(100 - descuentoP))/100;

    resultado.innerText = `El descuento es de: ${cuponesObj[cupon]}, el nuevo precio con descuento es ${nuevoPrecio}`
}
