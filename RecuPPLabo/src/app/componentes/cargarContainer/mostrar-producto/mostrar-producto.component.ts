import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.scss']
})
export class MostrarProductoComponent {

  @Output() stockEnviado = new EventEmitter<any>();
  @Input() producto: any;
  listadoProductos: any[] = [];
  form?: FormGroup | any;

  codigo: any;
  stock: any;

  constructor(private formBuilder: FormBuilder, private firestore: Firestore){}

  ngOnInit(): void {
    FirestoreService.traerFs('productos', this.firestore).subscribe((productos:any) => {
      if (productos != null) {
        this.listadoProductos = productos;
      }
    });

    this.form = this.formBuilder.group({
      codigo: ['', Validators.required],
      stock: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['producto']) 
    {
      this.codigo = this.producto.codigo;
    }
  }

  enviarStock()
  {
    this.stockEnviado.emit({...this.producto, stock: this.stock});
  }
}
