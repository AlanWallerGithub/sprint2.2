const {throttle} = require('../throttle_nivel1/throttle');


const imprimirInputParaTest = jest.fn(() => "hola");

const imprimirConThrottle = throttle(imprimirInputParaTest,1000);





test("Si el usuario llama a la función throttle, el callback debería ser llamado también",(done) =>{

    imprimirConThrottle();
    
    expect(imprimirInputParaTest).toHaveReturnedWith("hola");

    setTimeout(()=>{
        done();
    }, 1000)
    

    
})

test("La función throttle debería dar error si el callback no es una función",(done) =>{


    let throttleSinFuncion = throttle(3,1000);

    expect(throttleSinFuncion()).toBe("ERROR: el callback debe ser una función");


    setTimeout(()=>{
        done();
    }, 1000)
    

    
})


test("Si el usuario llama dos throttles sin que pasen 1000ms entre ellos, el segundo throttle no llamará al callback", (done) =>{

    //Hemos llamado imprimirConThrottle() 1 vez en el primer test. Entonces, la llamamos de nuevo

    imprimirConThrottle();

    //Y la tercera vez, el callback "imprimirInputParaTest" ya no debería llamarse, ya que queda bloqueado

    imprimirConThrottle();
    
   // Por eso el callback solo se devuelve 2 veces, aunque se llame 3 veces la función

    expect(imprimirInputParaTest).toHaveReturnedTimes(2);
    

    setTimeout(()=>{
        done();
    }, 1000)
    
    
})

test("Si el usuario llama dos throttles y SÍ deja que pasen 1000ms entre ellos, ambos llamarán al callback", (done) =>{



    //El callback se ha llamado 2 veces de momento. Ahora lo llamamos otra vez:

    imprimirConThrottle();

    //Y la cuarta vez la llamamos después de que pase un segundo:

    setTimeout(()=>{
        imprimirConThrottle();
    },1000)

    setTimeout(()=>{
        expect(imprimirInputParaTest).toHaveReturnedTimes(4);
    },2000)
    
    

    setTimeout(()=>{
        done();
    }, 3000)
    
    
})

