// Logica de la interfaz
import { Product } from "./Product.js";
import { UI } from "./UI.js";

// Dom Eventos
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    // Override the default Form behaviour
    e.preventDefault();

    // Getting Form Values
    const name = document.getElementById("name").value,
      patente = document.getElementById("patente").value,
      fecha = document.getElementById("fecha").value,
      reserva = document.getElementById("reserva").value;


    // Crear nueva reserva
    const product = new Product(name, patente, fecha , reserva);

    // Crear una nueva instancia UI
    const ui = new UI();

    // Entrada de datos validacion
    if (name === "" || patente === "" || fecha === "" || reserva === "") {
      ui.showMessage("Por favor rellenar datos", "danger");
    }

    // Guardar Reserva
    ui.addProduct(product);
    ui.showMessage("Reserva agregada exitosamente", "success");
    ui.resetForm();
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  ui.pagarProduct(e.target);
  e.preventDefault();
});
