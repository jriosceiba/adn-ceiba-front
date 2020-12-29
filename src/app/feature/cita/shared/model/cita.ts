export class Cita {

  id: number;
  idServicio: number;
  nombreServicio: String;
  fechaHora: Date;
  idSede: number;
  nombreSede: String;
  idCliente: number;
  nombreCliente: String;
  valorServicio: number;
  valorDescuento: number;
  nombreDescuento: String;

  constructor(id: number, idServicio: number, nombreServicio: String, fechaHora: Date, idSede: number,
    nombreSede: String, idCliente: number, nombreCliente: String, valorServicio: number, valorDescuento: number, nombreDescuento: String) {
    this.id = id;
    this.idServicio = idServicio;
    this.nombreServicio = nombreServicio;
    this.fechaHora = fechaHora;
    this.idSede = idSede;
    this.nombreSede = nombreSede;
    this.idCliente = idCliente;
    this.nombreCliente = nombreCliente;
    this.valorServicio = valorServicio;
    this.valorDescuento = valorDescuento;
    this.nombreDescuento = nombreDescuento;
  }
}
