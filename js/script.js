document.addEventListener("DOMContentLoaded", function () {

    const btnHorario = document.getElementById("btn-horario");
    const horarioExtendido = document.getElementById("horario-extendido");

    if (btnHorario && horarioExtendido) {
        btnHorario.addEventListener("click", function () {
            horarioExtendido.classList.toggle("oculto");

            if (horarioExtendido.classList.contains("oculto")) {
                btnHorario.textContent = "Ver horario completo";
            } else {
                btnHorario.textContent = "Ocultar horario";
            }
        });
    }

    const formCitas = document.getElementById("form-citas");

    if (formCitas) {

        const nombre = document.getElementById("nombre");
        const correo = document.getElementById("correo");
        const telefono = document.getElementById("telefono");
        const mascota = document.getElementById("mascota");
        const especie = document.getElementById("especie");
        const servicio = document.getElementById("servicio");
        const fecha = document.getElementById("fecha");
        const hora = document.getElementById("hora");
        const mensajeExito = document.getElementById("mensaje-exito");

        let mensajeGeneral = document.getElementById("mensaje-general-citas");

        if (!mensajeGeneral) {
            mensajeGeneral = document.createElement("p");
            mensajeGeneral.id = "mensaje-general-citas";
            mensajeGeneral.className = "error";
            mensajeGeneral.setAttribute("role", "alert");
            formCitas.insertBefore(mensajeGeneral, formCitas.firstChild);
        }

        if (fecha) {
            const hoy = new Date();
            const año = hoy.getFullYear();
            const mes = String(hoy.getMonth() + 1).padStart(2, "0");
            const dia = String(hoy.getDate()).padStart(2, "0");

            fecha.min = `${año}-${mes}-${dia}`;
        }

        function mostrarError(campo, mensaje) {

            const error = document.getElementById("error-" + campo);

            if (error) {
                error.textContent = mensaje;
            }

            const elemento = document.getElementById(campo);

            if (elemento) {
                elemento.style.borderColor = "#e85d75";
            }
        }

        function limpiarError(campo) {

            const error = document.getElementById("error-" + campo);

            if (error) {
                error.textContent = "";
            }

            const elemento = document.getElementById(campo);

            if (elemento) {
                elemento.style.borderColor = "";
            }
        }

        function validarCorreo(valor) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
        }

        function validarTelefono(valor) {
            return /^(\+?56)?\s?9\s?[0-9]{8}$/.test(
                valor.replace(/-/g, "")
            );
        }

        formCitas.addEventListener("submit", function (evento) {

            evento.preventDefault();

            let formularioValido = true;

            mensajeGeneral.textContent = "";
            mensajeGeneral.classList.add("oculto");

            [
                "nombre",
                "correo",
                "telefono",
                "mascota",
                "especie",
                "servicio",
                "fecha",
                "hora"
            ].forEach(function (campo) {
                limpiarError(campo);
            });

            if (!nombre.value.trim()) {
                mostrarError("nombre", "⚠️ Ingresa tu nombre.");
                formularioValido = false;
            } else if (nombre.value.trim().length < 3) {
                mostrarError(
                    "nombre",
                    "⚠️ El nombre debe tener al menos 3 caracteres."
                );
                formularioValido = false;
            }

            if (!correo.value.trim()) {
                mostrarError(
                    "correo",
                    "⚠️ Ingresa tu correo electrónico."
                );
                formularioValido = false;
            } else if (!validarCorreo(correo.value.trim())) {
                mostrarError(
                    "correo",
                    "⚠️ Ingresa un correo válido, por ejemplo: nombre@correo.cl"
                );
                formularioValido = false;
            }

            if (!telefono.value.trim()) {
                mostrarError(
                    "telefono",
                    "⚠️ Ingresa tu número de teléfono."
                );
                formularioValido = false;
            } else if (!validarTelefono(telefono.value.trim())) {
                mostrarError(
                    "telefono",
                    "⚠️ Ingresa un teléfono válido, por ejemplo: +56 9 12345678"
                );
                formularioValido = false;
            }

            if (!mascota.value.trim()) {
                mostrarError(
                    "mascota",
                    "⚠️ Ingresa el nombre de tu mascota."
                );
                formularioValido = false;
            }

            if (!especie.value.trim()) {
                mostrarError(
                    "especie",
                    "⚠️ Indica la especie de tu mascota."
                );
                formularioValido = false;
            }

            if (!servicio.value) {
                mostrarError(
                    "servicio",
                    "⚠️ Selecciona el servicio que necesitas."
                );
                formularioValido = false;
            }

            if (!fecha.value) {
                mostrarError(
                    "fecha",
                    "⚠️ Selecciona una fecha para la cita."
                );
                formularioValido = false;
            }

            if (!hora.value) {
                mostrarError(
                    "hora",
                    "⚠️ Selecciona una hora para la cita."
                );
                formularioValido = false;
            }

            if (!formularioValido) {

                mensajeGeneral.textContent =
                    "⚠️ Completa correctamente los campos indicados para solicitar tu cita.";

                mensajeGeneral.classList.remove("oculto");

                return;
            }

            if (mensajeExito) {

                mensajeExito.textContent =
                    "💗 ¡Solicitud enviada correctamente! Te contactaremos para confirmar tu hora.";

                mensajeExito.classList.remove("oculto");
            }

            formCitas.reset();
        });
    }
});
