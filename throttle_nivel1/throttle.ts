

function imprimirInput(inputUsuarioParametro: string){
    return inputUsuarioParametro;
}


const throttle: object = (callback: object, limit: number) => {

    

    let bloqueador: boolean = true;

    return function(){
        if (typeof(callback) !== 'function'){
            return "ERROR: el callback debe ser una función";
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

module.exports = { throttle };