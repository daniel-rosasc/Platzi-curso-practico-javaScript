

function calcularPrecioConDescuento( Precio, descuento) {

const porcentajePrecioConDescuento = 100 - descuento;

const precioConDescuento =(Precio * porcentajePrecioConDescuento) / 100;

return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputprice = document.getElementById("inputPrice");
    const priceValue = inputprice.Value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.Value;

    const precioConDescuento = calcularPrecioConDescuento ( priceValue, discountValue);

    const resultP = document.getElementById("Resultp");
    resultP.innerText ="El precio con Descuento son: $" + precioConDescuento;
  
}



