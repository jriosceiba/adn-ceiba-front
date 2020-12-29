import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from '@cliente/shared/service/cliente.service';
import { ModalService } from '@core/services/modal.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Parametro } from '@parametro/shared/model/parametro';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  public clienteForm: FormGroup;
  public listaCiudades$: Parametro[];

  constructor(public modalService: ModalService, private activeModal: NgbActiveModal, protected clienteService: ClienteService) {
  }

  ngOnInit(): void {
    this.construirFormularioCliente();
    this.cargarListas();
  }

  public crear() {
    this.clienteService.guardar(this.clienteForm.value).subscribe(val => {
      this.modalService.mostrarMensajeExito("Solicitud realizada con exito, se ha creado el registro:" + val.valor + ".");
    }, error => {
      this.modalService.mostrarMensajeError(error)
    });
  }

  public regresar() {
    this.activeModal.close();
    this.modalService.limpiarMensaje();
  }

  private construirFormularioCliente() {
    this.clienteForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', [Validators.required]),
      idCiudad: new FormControl('', [Validators.required])
    });
  }

  private cargarListas(): void {
    this.clienteService.listarCiudades().subscribe(lista => this.listaCiudades$ = lista);
  }
}
