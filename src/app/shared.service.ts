import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="https://localhost:44315/api"
  constructor(private http:HttpClient) { }
   
  getStudentsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Student')
  }

}
