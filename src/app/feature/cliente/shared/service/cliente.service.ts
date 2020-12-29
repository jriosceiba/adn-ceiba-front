import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import{ ComandoRespuesta} from '@shared/models/comando-respuesta';
import { Cliente } from '@cliente/shared/model/cliente';
import {Parametro} from '@parametro/shared/model/parametro';

@Injectable()
export class ClienteService {

  constructor(protected http: HttpService) { }

  public guardar(cliente: Cliente) {
    return this.http.doPost<Cliente, ComandoRespuesta>(`${environment.endpoint}/clientes`, cliente);
  }

  public listarClientes() {
    return this.http.doGet<Cliente[]>(`${environment.endpoint}/clientes`,
      this.http.optsName('listar clientes'))
  }

  public listarCiudades() {
    return this.http.doGet<Parametro[]>(`${environment.endpoint}/parametros/CIUDAD`,
      this.http.optsName('listar ciudades'))
  }
}
