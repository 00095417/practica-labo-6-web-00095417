function sumaYPromedio(array){
    let pluss=0;
    let prom=0;
    
    for(let n of array){
        pluss+=n;
    }

    return [pluss,prom=(pluss/array.length)];
}