// codigo del cuadrado

console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// codigo del triangulo

console.group("Triangulos")


function perimetroTriangulo(lado1,lado2,base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();

console.group("Circulos");

// Radio
//const radioCirculo = 20;
//console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro

function diametroCirculo(radio) {
    return radio * 2; 
}
// Pi
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia

function perimetroCirculo(radio) {

const diametro = diametroCirculo(radio); 
return diametro * PI;
}

// Area

function areaCirculo(radio) {
    return (radio * radio) * PI;
    }

console.groupEnd();

//Aqui empezamos a interatuar con HTML

function calcularPerimetroCuadrado() {
    const Input = document.getElementById("InputCuadrado");
    const value = Input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const Input = document.getElementById("InputCuadrado");
    const value = Input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularAreaTriangulo() {
    const Input = document.getElementById("InputTriangulo");
    const value = Input.value;
    const area = areaTriangulo(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const Input = document.getElementById("InputTriangulo");
    const value = Input.value;
    const perimetro = perimetroTriangulo(value);
    alert(perimetro);
}   

function calcularPerimetroCirculo() {
    const Input = document.getElementById("InputCirculo");
    const value = Input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const Input = document.getElementById("InputCirculo");
    const value = Input.value;
    const area = areaCirculo(value);
    alert(area);
}

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}