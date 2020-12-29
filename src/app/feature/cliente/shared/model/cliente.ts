export class Cliente{

    id:number;
    nombre: String;
    email: String;
    telefono: String;
    idCiudad: number;
    nombreCiudad: string;
    fechaCreacion: Date;

    constructor(id:number, nombre:string, email:string, telefono:string, idCiudad: number, nombreCiudad: string, fechaCreacion: Date){
      this.id = id;
      this.nombre = nombre;
      this.email = email;
      this.telefono = telefono;
      this.idCiudad = idCiudad;
      this.nombreCiudad = nombreCiudad;
      this.fechaCreacion = fechaCreacion;
    }
}
