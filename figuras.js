






    // Codigo del cuadrado

console.group("formulas cuadradon con funciones ");


function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();



// Codigo del triangulo

    function perimetroTriangulo(lado1, lado2, base) {
        return lado1 + lado2 + base;

    } 

    function areaTriangulo(base, altura){
    return (base * altura ) / 2;
    } 


    console.groupEnd();



    // Codigo Circulos


    console.group("formulas circulos");
// diametro

    function diametroCirculo(radio) {
        return radio * 2;
    } 

    
    const PI = Math.PI ;  // math es una caja de herramientas matematicas
    


    //circunferencia
    function perimetroCirculo(radio ){
        const diametro = diametroCirculo(radio)
        return diametro * PI;

    }
    


    //área
   
    function áreaCirculo(radio ){
        return (radio * radio) * PI;

    }



    console.groupEnd();


// Aqui comenzamos a interactuar en html

   function CalcularPeritroCuadrado(){
const input = document.getElementById("InputCuadrado");
const value = input.value;
const perimetro = perimetroCuadrado(value);
alert(perimetro);
   }

   function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);

   }