function sumaYPromedio(array){
    let pluss=0;

    for(let n of array){
        pluss+=n;
    }

    return ["suma = " + pluss, "promerdio = " + (pluss/array.length)];
}