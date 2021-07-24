


function calcularMediaAreitmetica(lista) {
    //let sumaLista = 0;

   // for ( let i =0; i < lista.length; i++) {
       // sumaLista = sumaLista + lista[i];
   //  }



   
     // Esto es para calcular el promedio!!!!!!
    const sumaLista = lista.reduce(
        function ( valorAcumulado = 0, nuevoelemento){
            return valorAcumulado + nuevoelemento;

        }


    );
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}