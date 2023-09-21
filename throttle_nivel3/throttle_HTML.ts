

function imprimirInput(){
    
    return document.getElementById("mostrar").innerHTML += "CLIC ";
}


const throttle: object = (callback: object, limit: number) => {


    let bloqueador: boolean = true;


    return function(){
        if (typeof(callback) !== 'function'){
            return document.getElementById("mostrar").innerHTML = "ERROR: el callback debe ser una función";
        } else 
        
        if (bloqueador === true){
            
            callback();
            bloqueador = false;
           
            setTimeout(()=>{
                bloqueador = true;

                
            },limit)
        }
    }
    
    
}

document.addEventListener("click", throttle(imprimirInput,1000));