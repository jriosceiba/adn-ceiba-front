import { Component, OnInit } from '@angular/core';
import { Cita } from '@cita/shared/model/cita';
import { CitaService } from '@cita/shared/service/cita.service';
import { CrearCitaComponent } from '@cita/components/crear-cita/crear-cita.component';
import { ModalService } from '@core-service/modal.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  public listaCitas$: Cita[];

  constructor(private modalService: ModalService, protected citaService: CitaService) {
  }

  ngOnInit(): void {
    this.cargarListas();
  }

  public nuevo() {
    this.modalService.open(CrearCitaComponent);
  }

  private cargarListas() {
    this.citaService.listarCitas().subscribe(val => this.listaCitas$ = val);
  }
}
