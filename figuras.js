

function areaRectangulo ( aR, bR ) {

    let areaR = aR * bR

    let dd = "El area del rectangulo es: " + areaR + " cm ^2";
    //console.log(5);
    return dd;
    //return areaR;
    //console.log(`El area del rectangulo es ${areaR} cm^2`);
}


function trianguloTriangulo (x, y, z) {

    if ( x == y && y == z && z == x) {

        //console.log(`Triangulo insertado es un triangulo Equilatero`);

        let a2 = (x / 2);
        let alturaEquilatero = Math.sqrt((z*z)-(a2*a2));

        let esEquilatero = "Triangulo insertado es un triangulo Equilatero y La altura es: " + alturaEquilatero  + "cm";
        //console.log(`La altura del triangulo es ${alturaEquilatero} cm`);
        return esEquilatero;
    }

    else if ( x == y || y == z || z == x) {

        //console.log(`Triangulo insertado es un triangulo Isoceles`);

        let a2 = (x / 2);
        let alturaIsoceles = Math.sqrt((z*z)-(a2*a2));

        //console.log(`La altura del triangulo es ${alturaIsoceles} cm`);
        let esIsoceles = "Triangulo insertado es un triangulo Isoceles y la altura es: " + alturaIsoceles + " cm";
        return esIsoceles;
    }

    else { 
        
        //console.log(`Triangulo insertado es un triangulo Escaleno`);
        
        let a2 = (x / 2);
        let alturaEscaleno = Math.sqrt((z*z)-(a2*a2));

        //console.log(`La altura del triangulo es ${alturaEscaleno} cm`);
        let esEscaleno = "Triangulo insertado es un triangulo Escaleno" + alturaEscaleno + " cm";
        return esEscaleno;

       
        
        }

}

// aqui intectuamos con el html 
function calcularAreaRectangulo() 

{
    const input = document.getElementById("baseR");
    const value = input.value;
    
    const input2 = document.getElementById("alrutaR");
    const value2 = input2.value;

    //const areaFinalRectangulo = 2;
    const areaFinalRectangulo = areaRectangulo (value , value2 );
    //alert(areaFinalRectangulo);
    const resulRec = document.getElementById("resultRec")

    resulRec.innerText = areaFinalRectangulo;
    //resulRec.textContent = "El area del rectangulo es: " + areaFinalRectangulo;
}


function tipoDeTriangulo( ) {

const l1 = document.getElementById("ladoA");
const lA = l1.value;

const l2 = document.getElementById("ladoB");
const lB = l2.value;

const l3 = document.getElementById("ladoC");
const lC = l3.value;

const calculoDeTipoDeTriangulo = trianguloTriangulo(lA, lB, lC);
 const resultTri = document.getElementById("resultTri");

 resultTri.innerText = calculoDeTipoDeTriangulo;



//alert(calculoDeTipoDeTriangulo);

}








