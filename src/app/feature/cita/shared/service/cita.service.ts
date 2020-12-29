import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Cita } from '@cita/shared/model/cita';
import { Parametro } from '@parametro/shared/model/parametro';
import { Cliente } from '@cliente/shared/model/cliente';
import {ComandoRespuesta} from '@shared/models/comando-respuesta';

@Injectable()
export class CitaService {

  constructor(protected http: HttpService) { }

  public listarCitas() {
    return this.http.doGet<Cita[]>(`${environment.endpoint}/citas`,
      this.http.optsName('listar citas'))
  }

  public guardar(cita: Cita) {
    return this.http.doPost<Cita, ComandoRespuesta>(`${environment.endpoint}/citas`, cita);
  }

  public listarParametrosPorTipo(tipo: string) {
    return this.http.doGet<Parametro[]>(`${environment.endpoint}/parametros/${tipo}`,
      this.http.optsName('listar parametros por tipo'))
  }

  public listarClientes(){
    return this.http.doGet<Cliente[]>(`${environment.endpoint}/clientes`,
      this.http.optsName('listar clientes'))
  }
}
