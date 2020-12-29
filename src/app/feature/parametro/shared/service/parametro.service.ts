import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Parametro } from '@parametro/shared/model/parametro';
import { environment } from 'src/environments/environment';
import{ ComandoRespuesta} from '@shared/models/comando-respuesta';

@Injectable()
export class ParametroService {

  constructor(protected http: HttpService) { }

  public guardar(parametro: Parametro) {
    return this.http.doPost<Parametro, ComandoRespuesta>(`${environment.endpoint}/parametros`, parametro);
  }

  public listarParametros() {
    return this.http.doGet<Parametro[]>(`${environment.endpoint}/parametros`,
      this.http.optsName('listar parametros'))
  }
}
