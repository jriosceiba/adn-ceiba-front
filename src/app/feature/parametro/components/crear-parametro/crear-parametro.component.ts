import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ParametroService } from '@parametro/shared/service/parametro.service'
import { ModalService } from '@core/services/modal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crear-parametro',
  templateUrl: './crear-parametro.component.html',
  styleUrls: ['./crear-parametro.component.css']
})
export class CrearParametroComponent implements OnInit {

  parametroForm: FormGroup;
  listaTipoParametro$: Observable<string[]>;

  constructor(public modalService: ModalService, private activeModal: NgbActiveModal, protected parametroService: ParametroService) {
  }

  ngOnInit(): void {
    this.construirFormularioParametro();
  }

  private construirFormularioParametro() {
    this.parametroForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      valor: new FormControl('', [Validators.required]),
      tipoParametro: new FormControl("", [Validators.required])
    });
  }

  crear() {
    this.parametroService.guardar(this.parametroForm.value).subscribe(val => {
      this.modalService.mostrarMensajeExito("Solicitud realizada con exito, se ha creado el registro:" + val.valor + ".");
    }, error => {
      this.modalService.mostrarMensajeError(error)
    });
  }

  regresar() {
    this.activeModal.close();
    this.modalService.limpiarMensaje();
  }
}
