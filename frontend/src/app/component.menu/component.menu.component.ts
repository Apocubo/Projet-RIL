import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-component.menu',
  templateUrl: './component.menu.component.html',
  styleUrls: ['./component.menu.component.scss'],
})

export class MenuExample {

constructor(private menu: MenuController) { }



  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
