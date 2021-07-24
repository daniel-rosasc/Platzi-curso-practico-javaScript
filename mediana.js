function calcularMediaAreitmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoelemento) {
            return valorAcumulado + nuevoelemento;

        }
    );
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}



const lista1 = [
    100,
    200,
    8221,
    50000000,
];

const mistadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mistadLista1 - 1];
    const elemento2 = lista1[mistadLista1 ];

    const promedioElemento1y2 = calcularMediaAreitmetica([
        elemento1,
        elemento2,
    ]);

    mediana = promedioElemento1y2;



} else {
    mediana = lista1[mistadLista1];

}