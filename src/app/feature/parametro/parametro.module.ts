import { NgModule } from '@angular/core';
import { ParametroComponent } from '@parametro/components/parametro/parametro.component';
import { CrearParametroComponent } from '@parametro/components/crear-parametro/crear-parametro.component';
import { ParametroRoutingModule } from '@parametro/parametro-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ParametroService } from '@parametro/shared/service/parametro.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ParametroComponent,
    CrearParametroComponent
  ],
  imports: [
    SharedModule,
    ParametroRoutingModule,
    NgbModule,
    CommonModule
  ],
  providers: [ParametroService]
})
export class ParametroModule { }
