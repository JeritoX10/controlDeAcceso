function capturarEstudiante(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombreEstudiante').value;
    const codigo = document.getElementById('codigoEstudiante').value;
    const mensaje = 'Estudiante capturado: ' + nombre + ' (Código: ' + codigo + ')';
    const areaResultados = document.getElementById('resultados');
    areaResultados.textContent = mensaje; 
}

function capturarAsignatura(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombreAsignatura').value;
    const codigo = document.getElementById('codigoAsignatura').value;
    const mensaje = 'Asignatura capturada: ' + nombre + ' (Código: ' + codigo + ')';
    const areaResultados = document.getElementById('resultados');
    areaResultados.textContent = mensaje; 
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', validarLogin);
    document.getElementById('formEstudiante').addEventListener('submit', capturarEstudiante);
    document.getElementById('formAsignatura').addEventListener('submit', capturarAsignatura);
});
