/**
 * User Interface Class
 */
export class UI {
  /**
   * Add a New Product 
   * @param {Object} product A new product Object
   */
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Nombre Propietario</strong>: ${product.name} -
                    <strong>Patente Vehiculo</strong>: ${product.patente} -
                    <strong>Fecha de la reserva</strong>: ${product.fecha} -
                    <strong>Tipo de reserva</strong>: ${product.reserva} 
                    <a href="#" class="btn btn-success" name="pago">Pagar</a>
                    <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                </div>
            </div>
        `;
    productList.appendChild(element);
  }

  /**
   * Reset Form Values
   */
  resetForm() {
    document.getElementById("product-form").reset();
  }

  pagarProduct(element) {
    if (element.name === "pago") {
      this.showMessage("Reedireccionando a pago ", "success");
      window.location.href = "./pago.html";
    }
  }

  deleteProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.remove();
      this.showMessage("Reserva eliminada ", "success");
    }

  }
  

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));

    // Show in The DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#App");

    // Insert Message in the UI
    container.insertBefore(div, app);

    // Remove the Message after 3 seconds
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}
