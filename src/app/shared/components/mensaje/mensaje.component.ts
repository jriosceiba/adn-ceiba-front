import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css'],
  styles: [`
    :host >>> .alert-custom {
      color: #99004d;
      background-color: #f169b4;
      border-color: #800040;
    }
  `]
})
export class MensajeComponent implements OnInit {
  @Input() mensaje: string;
  @Input() error: boolean;
  @Input() exito: boolean;

  constructor() { }

  ngOnInit() { }

  close() {
    this.mensaje = '';
  }

  mostrarMensajeInfo(mensaje: string) {
    this.mensaje = mensaje;
  }
}
