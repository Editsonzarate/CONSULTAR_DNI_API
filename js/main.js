document.getElementById("dni-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita que el formulario se envíe de la manera tradicional

    var dni = document.getElementById("dni").value;

    if (dni.length === 8) {
        fetch(`https://apiperu.dev/api/dni/${dni}?api_token=72b5d787ccc84b7491ebe9ab830b1f9b5a20ed690a036158468aa56150916579`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    document.getElementById("nombre").value = data.data.nombres;
                    document.getElementById("apellido").value = data.data.apellido_paterno + " " + data.data.apellido_materno;
                    document.getElementById("cui").value = data.data.codigo_verificacion;
                } else {
                    alert("No se encontraron datos para el DNI ingresado.");
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert("Hubo un error al consultar el DNI.");
            });
    } else {
        alert("El DNI debe tener 8 dígitos.");
    }
});
