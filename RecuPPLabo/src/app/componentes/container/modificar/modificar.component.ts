import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent {

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
    let obj = {id: this.container.id, codigo: this.form.getRawValue().codigo, color: this.form.getRawValue().color, empresa: this.form.getRawValue().empresa, capacidad: this.form.getRawValue().capacidad};

    FirestoreService.actualizarFs('containers', obj, this.firestore).then(()=>{
      Swal.fire(
        'Cargado correctamente',
        '',
        'success'
      );

      this.form.reset();
    })
    .catch(()=>{
      Swal.fire(
        'Ha ocurrido un error',
        '',
        'error'
      );
    });
  }
}
