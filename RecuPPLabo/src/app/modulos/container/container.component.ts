import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  containerElegido: any;

  constructor() {}

  ngOnInit(): void {}

  tomarContainer(event: any) {
    this.containerElegido = event;
  }
}
