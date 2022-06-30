import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss'],
})
export class ConnexionComponent implements OnInit {

  constructor(private user: IssueService) { }

  ngOnInit() {
    this.user.getConnexion("test", "password").subscribe((test) => {
      console.log(test);
      alert("passe dans le composant connexion");
    });
  }

}
