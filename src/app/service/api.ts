import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const baseUrl = `http://192.168.174.130:32223`;
const baseUrl1=`http://localhost:4200/home`;

@Injectable({
  providedIn: 'root',
})
export class apiService{
  constructor(
    private http: HttpClient,
  ) {}

  getHello(){
    return this.http.get<any>(`${baseUrl}`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  getData(){
    return this.http.get<any>(`${baseUrl}/hello`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  seprateURL(){
    return this.http.get<any>(`${baseUrl1}`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
