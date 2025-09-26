function mostrarProblemas() {
    const problemas = {
        "lunes": "Atender un cliente específico.",
        "martes": "Visitar una agencia fuera de la ciudad.",
        "miercoles": "Llevar a mi hija al ballet.",
        "jueves": "Priorizar entregas de desarrollo.",
        "viernes": "Atender problemas de manera remota.",
        "sabado": "Hacer lo que mi esposa quiera."
    }
    const dia = document.getElementById("dia").value.trim().toLowerCase();
    const resultado = document.getElementById("resultado");

    dia.toLowerCase;

    if(problemas[dia]){
        resultado.textContent = `${dia}: ${problemas[dia]}`;
    }
    else{
        resultado.textContent = "Error. Debes introducir un día válido.";
    }



}











