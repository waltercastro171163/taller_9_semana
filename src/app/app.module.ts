import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componente/menu/menu.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { FormDonacionesComponent } from './componente/form-donaciones/form-donaciones.component';
import { CalculadoraComponent } from './componente/calculadora/calculadora.component';
import { ComponComponent } from './componente/compon/compon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Importaciones de  Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';



//Se requiere este componente para hacer efectiva la captura de un dato en el formulario.
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    FormDonacionesComponent,
    CalculadoraComponent,
    ComponComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
