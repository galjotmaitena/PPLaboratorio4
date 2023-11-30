import { Component, EventEmitter, Output } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.scss']
})
export class AltaComponent {

  @Output() PasamosUnContainer: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;
  listado: any[] = [];
  
  constructor(private formBuilder: FormBuilder, private firestore: Firestore) 
  {
    this.form = this.formBuilder.group({
      codigo: ['', Validators.required],
      color: ['', Validators.required],
      empresa: ['', Validators.required],
      capacidad: ['', Validators.required],
    });
  }

  ngOnInit()
  {
    FirestoreService.traerFs('containers', this.firestore).subscribe((containers)=>{
      this.listado = containers;
    });
  }

  enviar()
  {
    let obj = {codigo: this.form.getRawValue().codigo, color: this.form.getRawValue().color, empresa: this.form.getRawValue().empresa, capacidad: this.form.getRawValue().capacidad, productos : []};

    FirestoreService.guardarFs('containers', obj, this.firestore).then(()=>{
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
