function calcularRectangulo() {
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;
    let area = parseFloat(base) * parseFloat(altura);
    let perimetro = 2*parseFloat(base) + 2*parseFloat(altura)
    let diagonal = Math.sqrt(base**2 + altura**2)
    //alert("La suma es: " + suma);
    //document.getElementById("result1").innerHTML = suma;
    document.getElementById("area").value = area;
    document.getElementById("perimetro").value = perimetro;
    document.getElementById("diagonal").value = diagonal;
}

function calcularCirculo() {
    let radio = document.getElementById("radio").value;
    let area = Math.PI*parseFloat(radio)**2;
    let perimetro = 2*Math.PI*parseFloat(radio)
    document.getElementById("area").value = area;
    document.getElementById("perimetro").value = perimetro;
}