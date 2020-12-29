import { Injectable } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  mensajeUsuario: string;
  error: boolean;
  exito: boolean;

  constructor(public modal: NgbModal,
    modalConfig: NgbModalConfig) {
    modalConfig.backdrop = 'static';
    modalConfig.keyboard = false;
  }

  public mostrarMensajeExito(mensaje: string) {
    this.mensajeUsuario = mensaje;
    this.error = false;
    this.exito = true;
  }

  public mostrarMensajeError(error: HttpErrorResponse) {
    this.mensajeUsuario = error.error.mensaje;
    this.error = true;
    this.exito = false;
  }

  public open(componente: any) {
    this.modal.open(componente);
  }

  public limpiarMensaje(){
    this.mensajeUsuario = '';
    this.error = false;
    this.exito = false;
  }
}
