/**
 * Product Class
 */
export class Product {
  /**
   *
   * @param {string} name Nombre propietario vehiculo
   * @param {string} patente Patente vehiculo
   * @param {string} fecha Fecha Reserva
   * @param {string} reserva Tipo de reserva
   */
  constructor(name, patente, fecha, reserva) {
    this.name = name;
    this.patente = patente;
    this.fecha = fecha;
    this.reserva = reserva;
  }
}
