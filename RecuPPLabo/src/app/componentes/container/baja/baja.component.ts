import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-baja',
  templateUrl: './baja.component.html',
  styleUrls: ['./baja.component.scss']
})
export class BajaComponent {

  @Input() container: any;

  form: FormGroup;
  listado: any[] = [];

  codigo:any;
  
  constructor(private formBuilder: FormBuilder, private firestore: Firestore) 
  {
    this.form = this.formBuilder.group({
      codigo: ['', Validators.required],
      color: ['', Validators.required],
      empresa: ['', Validators.required],
      capacidad: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['container']) {
      // Actualiza los valores en el formulario cuando cambia el container
      this.form.get('codigo')?.setValue(this.container?.codigo);
      this.form.get('color')?.setValue(this.container?.color);
      this.form.get('empresa')?.setValue(this.container?.empresa);
      this.form.get('capacidad')?.setValue(this.container?.capacidad);
    }
  }

  enviar()
  {
    if(this.container)
    {
      Swal.fire({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false,
        title: "Seguro de eliminar?",
        text: "Esto no es reversible!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, borrarlo!",
        cancelButtonText: "No, cancelar!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) 
        {
          let obj = {id: this.container.id, codigo: this.form.getRawValue().codigo, color: this.form.getRawValue().color, empresa: this.form.getRawValue().empresa, capacidad: this.form.getRawValue().capacidad};
  
          FirestoreService.eliminarFs('containers', obj, this.firestore).subscribe(()=>{
            Swal.fire({
              title: "Eliminado!",
              text: "El container ha sido eliminado",
              icon: "success"
            });
            this.form.reset();
          });
        } 
        else 
        if (result.dismiss === Swal.DismissReason.cancel) 
        {
          Swal.fire({
            title: "Cancelado",
            text: "El container esta a salvo.",
            icon: "warning"
          });
        }
      });

    }
    else
    {
      Swal.fire(
        'Debe elegir un container',
        '',
        'warning'
      );
    }
  }
}
