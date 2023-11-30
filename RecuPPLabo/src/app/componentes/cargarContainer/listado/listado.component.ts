import { Component, EventEmitter, Output } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {

  @Output() containerElegido = new EventEmitter<any>();

  listado: any[] = [];

  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    FirestoreService.traerFs('containers', this.firestore).subscribe((containers) => {
      this.listado = containers;
    });
  }

  enviarContainer(event:any){
    this.containerElegido.emit(event);
  }
}
