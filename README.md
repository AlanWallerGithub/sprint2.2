# FUNCIÓN THROTTLE
---
## NIVEL 1

Los scripts de esta carpeta no pueden ejecutarse por sí solos, son solo la lógica. La ejecución se implementa en el test, usando funciones mock para emular el input de los usuarios.

## NIVEL 2

Para ejecutar ‘throttle_CLI.js’, primero navega a la carpeta ‘throttle_nivel2’ desde el terminal y escribe ‘node throttle_CLI’. El programa te pedirá que pulses cualquier tecla del teclado, sin importar cual. Eso llamará una función de impresión en pantalla que solo se ejecutará con la función throttle, en este caso una vez por segundo. El texto que imprimirá será un aviso de que puedes salir del programa pulsando tu barra espaciadora.

## NIVEL 3

En la carpeta ‘throttle_nivel3’, el archivo ‘throttle.html’ abre una web que imprime ‘CLIC’ en la web cada vez que pulses el ratón en cualquier sitio de la web. Este ‘CLIC’ en pantalla solo aparecerá a un ritmo de clic por segundo, por mucho que lo pulses más rápido.
Si en el código modificaras la llamada a la función memoize y aplicaras un callback que no fuese una función, este error se imprimiría en pantalla.
