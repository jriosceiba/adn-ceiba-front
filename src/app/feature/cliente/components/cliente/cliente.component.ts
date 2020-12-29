import { Component, OnInit } from '@angular/core';
import { ClienteService } from '@cliente/shared/service/cliente.service';
import { ModalService } from '@core/services/modal.service'
import { Cliente } from '@cliente/shared/model/cliente';
import { CrearClienteComponent } from '@cliente/components/crear-cliente/crear-cliente.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public listaClientes$: Cliente[];

  constructor(public modalService: ModalService, protected clienteService: ClienteService) {
  }

  ngOnInit(): void {
    this.cargarListas();
  }

  public nuevo() {
    this.modalService.open(CrearClienteComponent);
  }

  private cargarListas() {
    this.clienteService.listarClientes().subscribe(val => this.listaClientes$ = val);
  }
}
