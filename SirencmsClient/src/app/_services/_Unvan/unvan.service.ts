import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Unvan } from "../../_models/_Unvan/unvan";
import { ROOT_URL } from "../../_models/config";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnvanService {
  unvansRef: Observable<Unvan[]>;
  unvanRef: Unvan;
  constructor(private http: HttpClient) {

  }

  GetUnvansList() {
    this.unvansRef = this.http.get<Unvan[]>(ROOT_URL + 'Unvans');
    return this.unvansRef;
  }

  AddUnvan(unvan: Unvan) {

    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Adi: unvan.Adi, ParafUnvan: unvan.ParafUnvan
    }
    return this.http.post<Unvan>(ROOT_URL + '/Unvan', body, { headers });
  }


}
