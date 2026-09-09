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

    
    
const formContacto = document.getElementById("form-contacto");

    if (formContacto) {

        const nombreContacto =
            document.getElementById("nombre-contacto");

        const correoContacto =
            document.getElementById("correo-contacto");

        const mensajeContacto =
            document.getElementById("mensaje");

        const mensajeExitoContacto =
            document.getElementById("mensaje-exito-contacto");

        let mensajeGeneralContacto =
            document.getElementById("mensaje-general-contacto");

        if (!mensajeGeneralContacto) {

            mensajeGeneralContacto = document.createElement("p");
            mensajeGeneralContacto.id = "mensaje-general-contacto";
            mensajeGeneralContacto.className = "error";
            mensajeGeneralContacto.setAttribute("role", "alert");

            formContacto.insertBefore(
                mensajeGeneralContacto,
                formContacto.firstChild
            );
        }

        function errorContacto(campo, mensaje) {

            const error =
                document.getElementById("error-" + campo);

            if (error) {
                error.textContent = mensaje;
            }

            const elemento =
                document.getElementById(campo);

            if (elemento) {
                elemento.style.borderColor = "#e85d75";
            }
        }

        function limpiarErrorContacto(campo) {

            const error =
                document.getElementById("error-" + campo);

            if (error) {
                error.textContent = "";
            }

            const elemento =
                document.getElementById(campo);

            if (elemento) {
                elemento.style.borderColor = "";
            }
        }

        formContacto.addEventListener(
            "submit",
            function (evento) {

                evento.preventDefault();

                let formularioValido = true;

                mensajeGeneralContacto.textContent = "";
                mensajeGeneralContacto.classList.add("oculto");

                limpiarErrorContacto("nombre-contacto");
                limpiarErrorContacto("correo-contacto");
                limpiarErrorContacto("mensaje");

                if (!nombreContacto.value.trim()) {

                    errorContacto(
                        "nombre-contacto",
                        "⚠️ Ingresa tu nombre."
                    );

                    formularioValido = false;

                } else if (
                    nombreContacto.value.trim().length < 3
                ) {

                    errorContacto(
                        "nombre-contacto",
                        "⚠️ El nombre debe tener al menos 3 caracteres."
                    );

                    formularioValido = false;
                }

                if (!correoContacto.value.trim()) {

                    errorContacto(
                        "correo-contacto",
                        "⚠️ Ingresa tu correo electrónico."
                    );

                    formularioValido = false;

                } else if (
                    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                        correoContacto.value.trim()
                    )
                ) {

                    errorContacto(
                        "correo-contacto",
                        "⚠️ Ingresa un correo válido."
                    );

                    formularioValido = false;
                }

                if (!mensajeContacto.value.trim()) {

                    errorContacto(
                        "mensaje",
                        "⚠️ Escribe un mensaje."
                    );

                    formularioValido = false;

                } else if (
                    mensajeContacto.value.trim().length < 10
                ) {

                    errorContacto(
                        "mensaje",
                        "⚠️ El mensaje debe tener al menos 10 caracteres."
                    );

                    formularioValido = false;
                }

                if (!formularioValido) {

                    mensajeGeneralContacto.textContent =
                        "⚠️ Revisa los campos indicados antes de enviar.";

                    mensajeGeneralContacto.classList.remove(
                        "oculto"
                    );

                    return;
                }

                if (mensajeExitoContacto) {

                    mensajeExitoContacto.textContent =
                        "💗 ¡Mensaje enviado correctamente! Te responderemos pronto.";

                    mensajeExitoContacto.classList.remove(
                        "oculto"
                    );
                }

                formContacto.reset();
            }
        );
    }

    const categoriaMedicamento =
        document.getElementById("categoria-medicamento");

    const contenedorMedicamento =
        document.getElementById("contenedor-medicamento");

    const medicamentoSeleccionado =
        document.getElementById("medicamento-seleccionado");

    const detalleMedicamento =
        document.getElementById("detalle-medicamento");

    const mensajeMedicamento =
        document.getElementById("mensaje-medicamento");

    if (
        categoriaMedicamento &&
        contenedorMedicamento &&
        medicamentoSeleccionado &&
        detalleMedicamento
    ) {

        const medicamentos = [
            {
                codigo: "ME001",
                categoria: "Antibióticos",
                nombre: "Amoxibay 250mg",
                principio: "Amoxicilina",
                presentacion: "Blíster 10 comp.",
                especie: "Perro / Gato",
                stock: 45,
                precio: 4200
            },
            {
                codigo: "ME002",
                categoria: "Antibióticos",
                nombre: "Enrox 50mg",
                principio: "Enrofloxacino",
                presentacion: "Blíster 10 comp.",
                especie: "Perro / Gato",
                stock: 30,
                precio: 6800
            },
            {
                codigo: "ME003",
                categoria: "Antibióticos",
                nombre: "Metrobay 250mg",
                principio: "Metronidazol",
                presentacion: "Blíster 10 comp.",
                especie: "Perro / Gato",
                stock: 28,
                precio: 3900
            },
            {
                codigo: "ME004",
                categoria: "Antiparasitarios",
                nombre: "Nexgard",
                principio: "Afoxolaner",
                presentacion: "Masticable 1 unid.",
                especie: "Perro",
                stock: 60,
                precio: 9500
            },
            {
                codigo: "ME005",
                categoria: "Antiparasitarios",
                nombre: "Bravecto",
                principio: "Fluralaner",
                presentacion: "Masticable 1 unid.",
                especie: "Perro",
                stock: 40,
                precio: 18900
            },
            {
                codigo: "ME006",
                categoria: "Antiparasitarios",
                nombre: "Revolution Plus",
                principio: "Selamectina+Sarolaner",
                presentacion: "Pipeta 1 unid.",
                especie: "Gato",
                stock: 35,
                precio: 14500
            },
            {
                codigo: "ME007",
                categoria: "Antiparasitarios",
                nombre: "Drontal Plus",
                principio: "Praziquantel+Pamoato",
                presentacion: "Comprimido 1 unid.",
                especie: "Perro",
                stock: 80,
                precio: 3200
            },
            {
                codigo: "ME008",
                categoria: "Antiparasitarios",
                nombre: "Milbemax Gato",
                principio: "Milbemicina+Praziq.",
                presentacion: "Comprimido 2 unid.",
                especie: "Gato",
                stock: 50,
                precio: 6800
            },
            {
                codigo: "ME009",
                categoria: "Antiinflamatorios",
                nombre: "Meloxicam 1mg",
                principio: "Meloxicam",
                presentacion: "Blíster 10 comp.",
                especie: "Perro / Gato",
                stock: 55,
                precio: 4500
            },
            {
                codigo: "ME010",
                categoria: "Antiinflamatorios",
                nombre: "Carprofen 50mg",
                principio: "Carprofeno",
                presentacion: "Blíster 10 comp.",
                especie: "Perro",
                stock: 30,
                precio: 9800
            },
            {
                codigo: "ME011",
                categoria: "Dermatología",
                nombre: "Clorhexidina shampoo",
                principio: "Clorhexidina 2%",
                presentacion: "Frasco 250ml",
                especie: "Perro / Gato",
                stock: 25,
                precio: 8900
            },
            {
                codigo: "ME012",
                categoria: "Dermatología",
                nombre: "Malaseb shampoo",
                principio: "Miconazol+Clorhex.",
                presentacion: "Frasco 250ml",
                especie: "Perro / Gato",
                stock: 20,
                precio: 12500
            },
            {
                codigo: "ME013",
                categoria: "Dermatología",
                nombre: "Apoquel 16mg",
                principio: "Oclacitinib",
                presentacion: "Blíster 10 comp.",
                especie: "Perro",
                stock: 18,
                precio: 22000
            },
            {
                codigo: "ME014",
                categoria: "Digestivo",
                nombre: "Probifor",
                principio: "Bacillus clausii",
                presentacion: "Sobre 5ml x10",
                especie: "Perro / Gato",
                stock: 40,
                precio: 5600
            },
            {
                codigo: "ME015",
                categoria: "Digestivo",
                nombre: "Omeprazol 10mg vet",
                principio: "Omeprazol",
                presentacion: "Blíster 10 comp.",
                especie: "Perro / Gato",
                stock: 35,
                precio: 3800
            },
            {
                codigo: "ME016",
                categoria: "Cardíaco",
                nombre: "Vetmedin 2.5mg",
                principio: "Pimobendan",
                presentacion: "Blíster 10 comp.",
                especie: "Perro",
                stock: 15,
                precio: 28000
            },
            {
                codigo: "ME017",
                categoria: "Analgésicos",
                nombre: "Tramadol 50mg vet",
                principio: "Tramadol",
                presentacion: "Blíster 10 comp.",
                especie: "Perro",
                stock: 22,
                precio: 5200
            },
            {
                codigo: "ME018",
                categoria: "Vacunas",
                nombre: "Nobivac DHPPi",
                principio: "Vacuna polivalente",
                presentacion: "Vial 1 dosis",
                especie: "Perro",
                stock: 48,
                precio: 8500
            },
            {
                codigo: "ME019",
                categoria: "Vacunas",
                nombre: "Nobivac Rabies",
                principio: "Vacuna antirrábica",
                presentacion: "Vial 1 dosis",
                especie: "Perro / Gato",
                stock: 60,
                precio: 5800
            },
            {
                codigo: "ME020",
                categoria: "Vacunas",
                nombre: "Felocell CVR",
                principio: "Vacuna triple felina",
                presentacion: "Vial 1 dosis",
                especie: "Gato",
                stock: 36,
                precio: 7200
            },
            {
                codigo: "ME021",
                categoria: "Suplementos",
                nombre: "Omega vet 3-6-9",
                principio: "Ácidos grasos omega",
                presentacion: "Frasco 100ml",
                especie: "Perro / Gato",
                stock: 30,
                precio: 9900
            },
            {
                codigo: "ME022",
                categoria: "Suplementos",
                nombre: "Condrovet forte",
                principio: "Condroitín+Glucos.",
                presentacion: "Blíster 30 comp.",
                especie: "Perro",
                stock: 25,
                precio: 14500
            }
        ];

        function limpiarDetalle() {

            detalleMedicamento.classList.add("oculto");

            if (mensajeMedicamento) {
                mensajeMedicamento.textContent = "";
                mensajeMedicamento.classList.add("oculto");
            }
        }

        function mostrarDetalle(medicamento) {

            document.getElementById("detalle-categoria").textContent =
                medicamento.categoria;

            document.getElementById("detalle-nombre").textContent =
                medicamento.nombre;

            document.getElementById("detalle-codigo").textContent =
                "Código: " + medicamento.codigo;

            document.getElementById("detalle-principio").textContent =
                medicamento.principio;

            document.getElementById("detalle-presentacion").textContent =
                medicamento.presentacion;

            document.getElementById("detalle-especie").textContent =
                medicamento.especie;

            document.getElementById("detalle-stock").textContent =
                medicamento.stock + " unidades";

            document.getElementById("detalle-precio").textContent =
                "$" + medicamento.precio.toLocaleString("es-CL");

            detalleMedicamento.classList.remove("oculto");
        }

        categoriaMedicamento.addEventListener("change", function () {

            const categoria = categoriaMedicamento.value;

            medicamentoSeleccionado.innerHTML =
                '<option value="">Elija una opcion</option>';

            limpiarDetalle();

            if (!categoria) {

                contenedorMedicamento.classList.add("oculto");
                medicamentoSeleccionado.required = false;

                return;
            }

            const disponibles = medicamentos.filter(function (medicamento) {
                return medicamento.categoria === categoria;
            });

            disponibles.forEach(function (medicamento) {

                const opcion = document.createElement("option");

                opcion.value = medicamento.codigo;
                opcion.textContent = medicamento.nombre;

                medicamentoSeleccionado.appendChild(opcion);
            });

            contenedorMedicamento.classList.remove("oculto");
            medicamentoSeleccionado.required = true;
        });

        medicamentoSeleccionado.addEventListener("change", function () {

            const codigo = medicamentoSeleccionado.value;

            limpiarDetalle();

            if (!codigo) {
                return;
            }

            const medicamento = medicamentos.find(function (item) {
                return item.codigo === codigo;
            });

            if (medicamento) {
                mostrarDetalle(medicamento);
            }
        });
    }

    


    
});
