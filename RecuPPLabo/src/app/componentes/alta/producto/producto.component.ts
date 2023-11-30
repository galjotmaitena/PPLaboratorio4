import { Component, Input } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {
  @Input() pais:any;
  form?: FormGroup | any;

  codigo: any;
  descripcion: string = '';
  precio: any;
  stock: any;
  comestible: string = '';

  constructor(private formBuilder: FormBuilder, private firestore: Firestore){}

  ngOnInit(){
    this.form = this.formBuilder.group({
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      stock: ['', Validators.required],
      comestible: ['', Validators.required],
    });
  }

  enviarProducto()
  {
    if(this.pais != null)
    {
      let obj = { codigo: this.codigo, descripcion: this.descripcion, precio: this.precio, stock: this.stock != 0 ? this.stock : 0, pais: this.pais, comestible: this.comestible}
      
      FirestoreService.guardarFs('productos', obj, this.firestore).then(()=>{
        Swal.fire(
          'Cargado correctamente',
          '',
          'success'
        );
      })
      .catch((error)=>{
        Swal.fire(
          'Ha ocurrido un error',
          '',
          'error'
        );

        console.log(error);
      });
    }
    else
    {
      Swal.fire(
        'Tenes que elegir un pais',
        '',
        'warning'
      );
    }
  }
}
