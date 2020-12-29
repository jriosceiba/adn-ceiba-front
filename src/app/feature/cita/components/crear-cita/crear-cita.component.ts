import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '@core/services/modal.service';
import { CitaService } from '@cita/shared/service/cita.service';
import { Cliente } from '@cliente/shared/model/cliente';
import { Parametro } from '@parametro/shared/model/parametro';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {

  public citaForm: FormGroup;
  public listaClientes$: Cliente[];
  public listaServicios$: Parametro[];
  public listaSedes$: Parametro[];
  public fechaConvert: string;
  private fechaActual: Date;

  constructor(public modalService: ModalService, private activeModal: NgbActiveModal, private citaService: CitaService, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.construirFormularioCita();
    this.actualizarListas();
    this.calcularFechas();
  }

  public regresar() {
    this.activeModal.close();
    this.modalService.limpiarMensaje();
  }

  public crear(): void {
    let valorFecha = this.datePipe.transform(this.citaForm.get("fechaHora").value, "yyyy-MM-dd hh:mm:ss");
    this.citaForm.get("fechaHora").setValue(valorFecha);

    this.citaService.guardar(this.citaForm.value).subscribe(val => {
      this.modalService.mostrarMensajeExito("Solicitud realizada con exito, se ha creado el registro:" + val.valor + ".");
    }, error => {
      this.modalService.mostrarMensajeError(error)
    });
  }

  private calcularFechas() {
    this.fechaActual = new Date();
    this.fechaActual.setDate(this.fechaActual.getDate() + 1);
    this.fechaConvert = this.datePipe.transform(this.fechaActual, "yyyy-MM-ddT00:00");
  }

  private construirFormularioCita() {
    this.citaForm = new FormGroup({
      idServicio: new FormControl('', [Validators.required]),
      fechaHora: new FormControl('', [Validators.required]),
      idSede: new FormControl('', [Validators.required]),
      idCliente: new FormControl('', [Validators.required])
    });
  }

  private actualizarListas() {
    this.citaService.listarParametrosPorTipo("SERVICIO").subscribe(lista => this.listaServicios$ = lista);
    this.citaService.listarParametrosPorTipo("SEDE").subscribe(lista => this.listaSedes$ = lista);
    this.citaService.listarClientes().subscribe(lista => this.listaClientes$ = lista);
  }
}
