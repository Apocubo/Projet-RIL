import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent implements OnInit {

  constructor(private user: IssueService) { }

  ngOnInit() {
    this.user.getInscription("num123", "pseudo", "lastname", "firstname", "email", "date_of_birth", "password", "token", "", "", "").subscribe((test) => {
      console.log(test);
    });
  }
}
