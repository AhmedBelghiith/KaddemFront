import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailEquipe } from '../models/detailEquipe';


@Injectable({
  providedIn: 'root'
})
export class DetailEquipeService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http : HttpClient) { }
  url: string = 'http://localhost:8080';


  getAllDetailEquipe() {
    return this.http.get<DetailEquipe[]>(this.url + `/getAllDetailEquipe`);
  }

  addDetailEquipe(detailEquipe: DetailEquipe): Observable<Object> {
    return this.http.post(this.url + `/addDetailEquipe`, detailEquipe);
  }

  updateDetailEquipe(detailEquipe: DetailEquipe): Observable<DetailEquipe> {
    return this.http.put<DetailEquipe>(this.url + `/updateDetailEquipe/`, detailEquipe);
  }
 
  deleteDetailEquipe(idDetailEquipe: number): Observable<Object> {
    return this.http.delete(this.url + `/deleteDetailEquipe/${idDetailEquipe}`);
  }

  getDetailEquipeById(idDetailEquipe: number): Observable<DetailEquipe> {
    return this.http.get<DetailEquipe>(this.url + `/getDetailEquipeById/${idDetailEquipe}`);
  } 

  findByThematiqueLike(thematique: string): Observable<DetailEquipe[]> {
    return this.http.get<DetailEquipe[]>(this.url + `/findByThematiqueLike/${thematique}`);
  } 

  findBySalleLike(salle: string): Observable<DetailEquipe[]>{
    return this.http.get<DetailEquipe[]>(this.url + `/findBySalleLike/${salle}`);
  }

  searchDetailEquipes(query: string): Observable<DetailEquipe[]>{
    return this.http.get<DetailEquipe[]>(this.url + `/findBySalleLike/${query}`);
  }

  addAndAssignDetailEquipeToEquipe(
    idEquipe: any,
    data: {
      salle: number;
      thematique: string;
    }
  ) {
    return this.http.post(this.url + `/addAndAssignDetailEquipeToEquipe/` + idEquipe, data);
  }

  getAllAscDeq():Observable<DetailEquipe[]>{
    return this.http.get<DetailEquipe[]>(this.url + `/getAllAscDeq`);
  }


  getAllDescDeq():Observable<DetailEquipe[]>{
  return this.http.get<DetailEquipe[]>(this.url + `/getAllDescDeq`);
}


}
