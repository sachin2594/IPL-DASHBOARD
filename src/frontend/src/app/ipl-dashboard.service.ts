import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IplDashboardService {

  private baseUrl = "http://localhost:8092/team/";

  constructor(private http:HttpClient) { }

  
    findByTeamName(teamName: string): Observable<any> {
      return this.http.get(`${this.baseUrl}/${teamName}`);
    }
}
