

function imprimirInput(){

    let elementoHTML = document.getElementById('mostrar');
            if(elementoHTML){
                return (elementoHTML as HTMLElement).innerHTML +="CLIC ";}
}


const throttle = (callback: object, limit: number) => {


    let bloqueador: boolean = true;


    return function(){
        if (typeof(callback) !== 'function'){
            let elementoHTML = document.getElementById('mostrar');
            if(elementoHTML){
                return (elementoHTML as HTMLElement).innerHTML ="ERROR: el callback debe ser una función";}
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