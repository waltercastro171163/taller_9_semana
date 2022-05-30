import { Component, OnInit } from '@angular/core';

//Se requiere este componente para hacer efectiva la captura de un dato en el formulario.
import { FormBuilder,FormGroup } from '@angular/forms';
// import Swal from 'sweetalert2'
import Swal from 'sweetalert2'


@Component({
  selector: 'app-form-donaciones',
  templateUrl: './form-donaciones.component.html',
  styleUrls: ['./form-donaciones.component.css']
})
export class FormDonacionesComponent implements OnInit {

  // ****Se definen variables y requerimientos adicionales para agrupar el formulario *******

  formValue!: FormGroup;

  // * 
  public data_detalle : Array<any>=[]; 

  public ciudad = ["Pasto", "Cali", "Pereira" ,"Medellin" ,"Bogotá","Pereira"]
  public contador:any ; 
  

  constructor(private formBuilder:FormBuilder ) { }

  ngOnInit(): void {

    this.obtenerCamposFormulario();
  }


// *OJO Funcion que Captura de los datos del formulario, los campos deben ser identicos 
  // *a los definidos en el HTML
  obtenerCamposFormulario(){
  this.formValue = this.formBuilder.group({
    nombres : [''],
    apellidos: [''],
    edad : [''],
    ciudad: [''],
    valorDona: ['']

  })

}
 guardar_detalle(detalleFormulario:any){

   if(detalleFormulario.value.nombres===""){
     
     // alert("el campo Nombre no puede estar vacio")
      Swal.fire(
        'el campo Nombre no puede estar vacio!',
        'Aceptar!',
        'success'
         )

   }
   else if(detalleFormulario.value.apellidos===""){

      //alert("el campo Apellidos no puede estar vacio")

      Swal.fire(
        'el campo Apellido no puede estar vacio!',
        'Aceptar!',
        'success'
         )


   }
   else if(detalleFormulario.value.edad<=0){

      //alert("el campo Edad no puede estar vacio o ser menor a cero")

      Swal.fire(
        'el campo Edad no puede estar vacio! o menor a cero',
        'Aceptar!',
        'success'
         )
   }
   else if(detalleFormulario.value.ciudad===""){

      //alert("el campo Ciudad no puede estar vacio")

      Swal.fire(
        'el campo Ciudad no puede estar vacio!',
        'Aceptar!',
        'success'
         )
   }
   else if(detalleFormulario.value.valorDona<=0){

      //alert("el campo  Doncion no puede estar vacio o ser menor a cero")

      Swal.fire(
        'el campo  Doncion no puede estar vacio o ser menor a cero!',
        'Aceptar!',
        'success'
         )
   }
   
   else{

    this.data_detalle.push({
      nombres: detalleFormulario.value.nombres,
      apellidos: detalleFormulario.value.apellidos,
      edad: detalleFormulario.value.edad,
      ciudad: detalleFormulario.value.ciudad,
      valorDona:detalleFormulario.value.valorDona
    })
      
    //alert("La informacion se guardo correctamente")

    Swal.fire(
      'La informacion se guardo correctamente!',
      'Aceptar!',
      'success'
       )
    
    this.formValue = this.formBuilder.group({
     
      nombres : [''],
      apellidos: [''],
      edad : [''],
      ciudad: [''],
      valorDona: ['']
    })

   }









  
}

  
}
