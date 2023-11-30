import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-prod',
  templateUrl: './detalle-prod.component.html',
  styleUrls: ['./detalle-prod.component.scss']
})
export class DetalleProdComponent {
  @Input() producto?: any;
}
