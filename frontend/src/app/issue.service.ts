import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'http://localhost:5000';


  constructor(private http: HttpClient) {

  }

  getConnexion(email, password) {

    const body = {
      
      email: email,
      password: password,
    }
    
    return this.http.post(`${this.uri}/api/getConnexion`, body);
  }

  getInscription(numeroSS, pseudo, lastname, firstname, email, date_of_birth, password, token, created_at, updated_at, deleted_at) {
    const body = {
      numeroSS: numeroSS,
      pseudo: pseudo,
      lastname: lastname,
      firstname: firstname,
      email: email,
      date_of_birth: date_of_birth,
      password: password,
      token: token,
      created_at: created_at,
      updated_at: updated_at,
      deleted_at: deleted_at,
    }

    return this.http.post(`${this.uri}/api/getInscription`, body);

  }
}
