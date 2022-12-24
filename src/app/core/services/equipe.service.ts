import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Equipe } from '../models/equipe';
import { Observable } from 'rxjs';
import { Niveau } from '../models/niveau';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http : HttpClient) { }
  url: string = 'http://localhost:8080';


  getAllEquipe() {
    return this.http.get<Equipe[]>(this.url + `/getAllEquipe`);
  }

  addEquipe(equipe: Equipe): Observable<Object> {
    return this.http.post(this.url + `/addEquipe`, equipe);
  }

  updateEquipe(equipe: Equipe): Observable<any> {
    return this.http.put<Equipe>(this.url + `/updateEquipe/`,equipe);
  }
 
  deleteEquipe(idEquipe: number): Observable<Object> {
    return this.http.delete(this.url + `/deleteEquipe/${idEquipe}`);
  }

  findEquipeByIdEquipe(idEquipe: number): Observable<Equipe> {
    return this.http.get<Equipe>(this.url + `/findEquipeByIdEquipe/${idEquipe}`);
  } 

  getEquipeByNiveau(niveau: Niveau): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(this.url + `/getEquipeByNiveau/${niveau}`);
  } 

 
  findEquipeByEtudiantsIdEtudiant(idEtudiant: number): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(this.url + `/findEquipeByEtudiantsIdEtudiant/${idEtudiant}`);
  } 

  findEquipeByEtudiantsIdEtudiantAndEtudiantsDepartementIdDepart(idEtudiant: number,idDepart: number): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(this.url + `/findEquipeByEtudiantsIdEtudiantAndEtudiantsDepartementIdDepart/${idEtudiant}/${idDepart}`);
  }


  getMoyenneEquipe(idEquipe: number): Observable<Equipe> {
    return this.http.get<Equipe>(this.url + `/getMoyenneEquipe/${idEquipe}`);
  }

  searchEquipes(query: string): Observable<Equipe[]>{
    return this.http.get<Equipe[]>(this.url + `/search/${query}`);
  }

  getAllAsc():Observable<Equipe[]>{
    return this.http.get<Equipe[]>(this.url + `/getAllAsc`);
  }


  getAllDesc():Observable<Equipe[]>{
  return this.http.get<Equipe[]>(this.url + `/getAllDesc`);
}
}