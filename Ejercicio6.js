function encriptar(palabra){
    let clave = "murcielago";
    let array = palabra.split("");

    for (let x of array){
        for(let y of clave){
            if(x==y){
                array[array.indexOf(x)]=clave.indexOf(y);
            }
        }
    }

    return palabra = array.join("");
}