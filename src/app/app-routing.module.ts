import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// *IMPORTACIONES DE LOS MODULOS
import { CalculadoraComponent } from './componente/calculadora/calculadora.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { FormDonacionesComponent } from './componente/form-donaciones/form-donaciones.component';
import { ComponComponent } from './componente/compon/compon.component';




const routes: Routes = [

  {path:'calculadora', component:CalculadoraComponent},
  {path:'inicio', component:InicioComponent},
  {path:'form-donaciones', component:FormDonacionesComponent},
  {path:'compon', component:ComponComponent},

  //* Este se coloca para que la pagina siempre arranque por aqui.(inicio)
  {path: '', component: InicioComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
