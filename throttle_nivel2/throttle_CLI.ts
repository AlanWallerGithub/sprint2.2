
import readline from 'readline';
const rl = readline.createInterface({input : process.stdin,
                         output : process.stdout});


function imprimirInput(){
    
    return console.log("\nPara salir del loop, pulsa barra espaciadora");
}


const throttle = (callback: object, limit: number) => {


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

const imprimirConThrottle = throttle(imprimirInput,1000);


function funcionCLI(){
    console.log("Pulsa cualquier tecla del teclado, tantas veces como quieras. Solo se ejecutará la función una vez por segundo");
var stdin = process.stdin;
stdin.setRawMode( true );
stdin.resume();
stdin.setEncoding( 'utf8' );

stdin.on( 'data', function( key: Buffer ){
    let bufferUTF8 = key.toString('utf8')
  // El loop se rompe con BARRA ESPACIADORA
  if ( bufferUTF8 === '\u0020' ) {

    
    process.exit();
  }
  
  imprimirConThrottle();
});
}

funcionCLI();