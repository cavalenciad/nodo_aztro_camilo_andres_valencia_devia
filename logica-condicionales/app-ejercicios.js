function calcularPromedio() {
    let time1 = parseFloat(document.getElementById("tiempo1").value)
    let time2 = parseFloat(document.getElementById("tiempo2").value)
    let time3 = parseFloat(document.getElementById("tiempo3").value)
    let time4 = parseFloat(document.getElementById("tiempo4").value)
    let time5 = parseFloat(document.getElementById("tiempo5").value)
    let promedio = (time1 + time2 + time3 + time4 + time5)/5
    let message = `El tiempo promedio es de ${promedio} segundos` 
    document.getElementById("result").innerHTML = message;
}

function calcularTerreno() {
    let baseMayor = parseFloat(document.getElementById("baseMayor").value)
    let baseMenor = parseFloat(document.getElementById("baseMenor").value)
    let lado = parseFloat(document.getElementById("lado").value)
    let altura;

    if(baseMayor>baseMenor) {
        altura = Math.sqrt(lado**2 - ((baseMayor - baseMenor)/2)**2);
    } else {
        altura = Math.sqrt(lado**2 - ((baseMenor - baseMayor)/2)**2)
    }

    let area = ((baseMayor + baseMenor)/2)*altura
    let perimetro = baseMayor + baseMenor + 2*lado
    let cantidadPesticida = 1.5*Math.ceil(area)
    
    let message = `El área del terreno es ${Math.ceil(area)} metros cuadrados, por lo cual se recomienda aplicar un total de ${cantidadPesticida} litros de pesticida. A su vez, el perímetro del terreno es ${perimetro} metros y esta es la cantidad de cerca eléctrica necesaria para rodear al mismo.`
    
    document.getElementById("result").innerHTML = message;
}

function calcularPared() {
    let basePared = parseFloat(document.getElementById("basePared").value);
    let alturaPared = parseFloat(document.getElementById("alturaPared").value);
    let baseLadrillo = parseFloat(document.getElementById("baseLadrillo").value);
    let alturaLadrillo = parseFloat(document.getElementById("alturaLadrillo").value);

    let areaPared = basePared * alturaPared;
    let areaLadrillo = (baseLadrillo/100) * (alturaLadrillo/100);

    let cantidadLadrillos = areaPared / areaLadrillo;

    let message = `La cantidad exacta de ladrillos necesaria para cubrir la pared de área ${areaPared}m^2 es ${Math.ceil(cantidadLadrillos)} ladrillos`

    document.getElementById("result").innerHTML = message;
}

function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let imc = peso / (altura**2);
    let rango;
    if (imc < 16 ) {
        rango = "Delgadez Severa";
    } else if (imc >= 16 && imc < 17) {
        rango = "Delgadez moderada";
    } else if (imc >= 17 && imc < 18.5) {
        rango = "Delgadez aceptable";
    } else if (imc >= 18.5 && imc < 25) {
        rango = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        rango = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        rango = "Obesidad Tipo I";
    } else if (imc >= 35 && imc < 40) {
        rango = "Obesidad Tipo II";
    } else if (imc >= 40 && imc < 50) {
        rango = "Obesidad Tipo III (obesidad mórbida)";
    } else {
        rango = "Obesidad tipo IV o extrema"
    }

    let message = `El IMC (Índice de Masa Corporal) del paciente es: ${imc.toFixed(1)} y su rango es: ${rango}`

    document.getElementById("result").innerHTML = message;
}

function calcularLiquidacion() {
    let dias = parseFloat(document.getElementById("dias").value);
    let diurna = parseFloat(document.getElementById("extraDiurna").value);
    let nocturna = parseFloat(document.getElementById("extraNocturna").value);
    let festivo = parseFloat(document.getElementById("festivo").value);

    let preTotal = 43000*dias + 6915*diurna + 9681*nocturna + 11064*festivo;

    let salud = 0.04*preTotal;
    let pension = 0.04*preTotal;
    let alimentacion = 0.03*preTotal

    let totalLiquidacionMes = preTotal - (salud + pension + alimentacion);

    let message = `
    La liquidación del trabajador por ${dias} días trabajados, ${diurna} horas extras ordinarias, ${nocturna} horas extras nocturnas y ${festivo} horas dominicales y festivos equivale a $${preTotal}.
    El descuento por salud es: $${salud}.
    El descuento por pensión es: $${pension}.
    El descuento por alimentación es: $${alimentacion}.
    El Total Liquidación Mes es: $${totalLiquidacionMes}.
    `;

    document.getElementById("result").innerHTML = message;
}

function calcularRaices() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    let discriminante = b**2 - 4*a*c;
    let x1, x2;
    let message;

    if (a == 0) {
        message = "No es una ecuación cuadrática, intenta con un valor diferente de 0 para a."
    } else if (discriminante < 0) {
        message = `La ecuación ${a === 1 ? 'x^2' : a , 'x^2'} ${b === 0 ? ' ' : (' + ' , b , 'x' , ' + ')} ${c > 0 ? ' + ' + c : ' - ' + -1*c} no tiene raíces reales.`
    } else {
        x1 = (-b + Math.sqrt(discriminante))/2*a;
        x2 = (-b - Math.sqrt(discriminante))/2*a;
        message = `Las raíces de la ecuación ${a}x^2 + (${b}x) + (${c}) son ${x1} y ${x2}. Puedes verificarlo reemplazando el valor de las raíces en x`
    };

    document.getElementById("result").innerHTML = message;
}