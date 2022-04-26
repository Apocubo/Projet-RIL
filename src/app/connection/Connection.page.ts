import { Component, ViewChild } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';

@Component({
  selector: 'app-Connection',
  templateUrl: 'Connection.page.html',
  styleUrls: ['Connection.page.scss'],
})
export class ConnectionPage {


  @ViewChild(IonAccordionGroup, { static: true }) accordionGroup: IonAccordionGroup;
  constructor() {}
  
  logAccordionValue() {
    console.log(this.accordionGroup.value);
  }
  
  closeAccordion() {
    this.accordionGroup.value = undefined;
  }  
}