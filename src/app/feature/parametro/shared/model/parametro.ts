export class Parametro{

    id:number;
    nombre: String;
    valor: String;
    tipoParametro: string;

    constructor(id:number, nombre:string, valor:string){
      this.id = id;
      this.nombre = nombre;
      this.valor = valor;
    }
}
