# Kit de Componentes

Este proyecto consiste en un kit de componentes que he utilizado o planeo utilizar en mis proyectos, ya sean personales o laborales.

A menudo, me encuentro en situaciones que requieren flexibilidad y rapidez en el desarrollo de formularios. Algunos formularios son sencillos, mientras que otros son más complejos. La idea detrás de este kit es encapsular la lógica de validaciones y la creación y gestión de formularios complejos en conceptos de Angular, como directivas.

Mi objetivo es que este kit sirva como un código base que pueda reutilizar en futuros proyectos, facilitando así un desarrollo más ágil y eficiente.

Y ademas me sirva ami como aprendizaje para profundizar en conceptos de angular :)

Por ultimo, (es lo ultimo) me gustaria armar una interfaz donde pueda seleccionar todas las validaciónes que deseo aplicar a un input y que luego me devuelva el codigo, algo asi como un tools de inputs con validaciónes que se vayan agregando y luego copiarlo y utilizarlo en mis proyectos :D

Casos que voy a ir sumando:

# Text field con prefijo y sufijos

En mi experiencia, he tenido casos en los que un cliente solicita campos específicos, como el CUIT o números de tarjeta, donde se requiere que el formato del texto se aplique en tiempo real mientras el usuario escribe. Por ejemplo, el formato deseado podría ser 11-11111111-1.

Para abordar esta necesidad, desarrollé un componente llamado text-field-identity-number, que utiliza una directiva denominada text-field-prefix-sufix. Esta directiva permite aplicar el formato deseado a los campos de entrada en un formulario reactivo de manera dinámica, mejorando la experiencia del usuario al ingresar información.

Sin embargo, el componente aún no está completamente desarrollado para ser reutilizable con otras lógicas, ya que está diseñado específicamente para manejar el formato de CUIT. En este caso, se identifica que, después de los 8 dígitos del DNI, se agrega un sufijo ("-").

Continuaré trabajando en la mejora de la reutilización de esta directiva para que pueda adaptarse a diferentes formatos y requisitos, permitiendo así su uso en una variedad más amplia de situaciones.

### Caso 1

1. El cliente quiere ver el formato con separadores de "-" como prefijo y sufijo pero en el servidor el campo cuit se almacena como un int.
2. El cliente quiere ver el formato con separado de "-" como prefijo y sufijo pero en el servidor el campo cuit se almacenado como un string

## Validaciónes de formulario

- **Validar campo para que acepte solo numeros**: solo permitan numeros, ya que hay casos donde no se puede utilizar el type number, si no type text pero hay que restrigir el uso de numeros para evitar enviar errores al servidor)
- **Validar el min y el max del campo**: Idem al anterior, casos donde el input es text, mediante una directiva hay que limitar el minimo y el maximo para que el usuario no supere ese valor.


