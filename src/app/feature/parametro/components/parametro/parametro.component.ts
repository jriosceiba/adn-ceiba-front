import { Component, OnInit } from '@angular/core';
import { CrearParametroComponent } from '@parametro/components/crear-parametro/crear-parametro.component'
import { ModalService } from '@core/services/modal.service';
import { ParametroService } from '@parametro/shared/service/parametro.service';
import { Parametro } from '@parametro/shared/model/parametro'

@Component({
  selector: 'app-parametro',
  templateUrl: './parametro.component.html',
  styleUrls: ['./parametro.component.css']
})
export class ParametroComponent implements OnInit {

  public listaParametros$: Parametro[];

  constructor(public modalService: ModalService, protected parametroService: ParametroService) {
  }

  ngOnInit(): void {
    this.cargarListas();
  }

  public nuevo() {
    this.modalService.open(CrearParametroComponent);
  }

  private cargarListas() {
    this.parametroService.listarParametros().subscribe(val => this.listaParametros$ = val);
  }
}
