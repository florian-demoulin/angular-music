import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class HobbyService {
 
  constructor(private http: HttpClient) {}
 
  private url = "https://wasabi.i3s.unice.fr/api/v1/artist_all/name/Guns%20N'%20Roses";
 
 
  getHobbies(): Promise<any> {
 
    // on va chercher par GET le fichier JSON sur un REST endpoint
 
    return this.http.get(this.url).toPromise();
 
  }
 
}
