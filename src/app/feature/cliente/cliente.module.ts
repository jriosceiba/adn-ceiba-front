import { NgModule } from '@angular/core';
import { ClienteComponent } from '@cliente/components/cliente/cliente.component';
import { CrearClienteComponent } from '@cliente/components/crear-cliente/crear-cliente.component';
import { ClienteRoutingModule } from '@cliente/cliente-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ClienteService } from '@cliente/shared/service/cliente.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { DigitOnlyModule } from '@uiowa/digit-only';

@NgModule({
  declarations: [
    ClienteComponent,
    CrearClienteComponent
  ],
  imports: [
    SharedModule,
    ClienteRoutingModule,
    NgbModule,
    CommonModule,
    DigitOnlyModule
  ],
  providers: [ClienteService]
})
export class ClienteModule { }
