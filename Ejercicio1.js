var group=["1","2","3","5","2","3","5","2"];
function buscar(x,groupName){
    let counts=0;
    for (let n of groupName){
        if(n==x){
            counts+=1;
        }
    }
    return counts;
}