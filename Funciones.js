//declarativas

function miFuncion() {
return 3;
}

miFuncion();

//ejemplo
function saludarEstudiantes(estudiantes) {
    console.log(estudiantes);}
undefined
saludarEstudiantes("edwin");
VM373:2 edwin
undefined
function saludarEstudiantes(estudiantes) {
    console.log('Bienvenido ${estudiantes}');}
undefined
saludarEstudiantes("edwin");
VM555:2 Bienvenido ${estudiantes}
undefined
function sumar(a,b) {
    var resultado = a + b;
    return resultado;
}
undefined
sumar(5,7);
12
function sumar(a,b) {
    return a + b;
}
undefined
sumar(8,5);
13
//ejemplo

//Expresión

var miFuncion = function() {
    return a + b;
} 

miFuncion();