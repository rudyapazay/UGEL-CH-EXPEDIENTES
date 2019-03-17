
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpedienteComponent } from 'modules/expediente-module/components/expediente.component';
import { ExpedienteListComponent } from 'modules/expediente-module/components/expediente.list.component';
import { BuildingComponent } from './components/building.component';

const routes:Routes=[
    {path:'',component:ExpedienteComponent},
    {path:'expedientes',component:ExpedienteListComponent},
    {path:'building',component:BuildingComponent},
    {path:'**',component:ExpedienteComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class oficinaRoutingModule{}