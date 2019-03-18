import { Component } from '@angular/core';

@Component({
  selector: 'expediente-list-component',
  templateUrl: '../views/expediente.list.html'
  //styleUrls: ['./app.component.css']
})

export class ExpedienteListComponent {
  title = 'Lista de expedientes por atender';

  expedientes = [
    {numero:'06524',
    descripcion: 'Solicito dotacion de certificados'},
    {numero:'06527',
    descripcion: 'Solicito licencia por maternidad'},
    {numero:'06684',
    descripcion: 'Informe de asistencia de Mx Santo Tomas - febrero'}
  ]
}

