import { NgModule } from '@angular/core';
import { CitaComponent } from '@cita/components/cita/cita.component';
import { CrearCitaComponent } from '@cita/components/crear-cita/crear-cita.component';
import { CitaRoutingModule } from '@cita/cita-routing.module';
import { SharedModule } from '@shared/shared.module';
import { CitaService } from '@cita/shared/service/cita.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    CitaComponent,
    CrearCitaComponent
  ],
  imports: [
    SharedModule,
    CitaRoutingModule,
    NgbModule,
    CommonModule
  ],
  providers: [CitaService, DatePipe]
})
export class CitaModule { }
