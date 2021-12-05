import { Injectable } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
providedIn: 'root'
})
export class VoitureService {
  apiURL: string = 'http://localhost:8080/voitures/api';
voitures : Voiture[]; //un tableau de Produit
  Voiture: Voiture;
//voiture : Voiture;
constructor(private http : HttpClient) {
 /*
this.voitures = [
{ idVoiture : 1, categorieVoiture : "Citadine", prixVoiture : 45500.600},
{ idVoiture : 2, categorieVoiture : "4*4", prixVoiture : 200000.000},
{ idVoiture : 3, categorieVoiture :"familiale", prixVoiture : 30000.000}
];*/
}

listeVoiture(): Observable<Voiture[]>{
  return this.http.get<Voiture[]>(this.apiURL);
  }
  ajouterVoiture( voit: Voiture):Observable<Voiture>{
    return this.http.post<Voiture>(this.apiURL, voit, httpOptions);
    }
    
supprimerVoiture(id : number) {
const url = `${this.apiURL}/${id}`;
return this.http.delete(url, httpOptions);
}


consulterVoiture(id: number): Observable<Voiture> {
  const url = `${this.apiURL}/${id}`;
  return this.http.get<Voiture>(url);
  }

    trierVoitures(){
      this.voitures = this.voitures.sort((n1,n2) => {
      if (n1.idVoiture > n2.idVoiture) {
      return 1;
      }
      if (n1.idVoiture < n2.idVoiture) {
      return -1;
      }
      return 0;
      });
      }

      updateVoiture(voit :Voiture) : Observable<Voiture>
      {
      return this.http.put<Voiture>(this.apiURL, voit, httpOptions);
      }
   
    
    
}
