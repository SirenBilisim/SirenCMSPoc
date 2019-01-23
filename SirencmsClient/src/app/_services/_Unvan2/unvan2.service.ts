import { Injectable } from '@angular/core';
import { Unvan } from "../../_models/_Unvan/unvan";
import { ROOT_URL } from "../../_models/config";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Unvan2Service {

  constructor(private http: HttpClient) { }

  getUnvans() {
    return this.http.get<Unvan[]>(ROOT_URL + '/UnvanServer?iDisplayLength=10');
  }

  getUnvanById(id: number) {
    return this.http.get<Unvan>(ROOT_URL + '/UnvanServer/' + id);
  }

  createUnvan(Unvan: Unvan) {
    return this.http.post<Unvan>(ROOT_URL + '/UnvanServer', Unvan);
  }

  updateUnvan(Unvan: Unvan) {
    return this.http.put<Unvan>(ROOT_URL + '/UnvanServer/' + Unvan.id, Unvan);
  }

  deleteUnvan(id: number) {
    return this.http.delete<Unvan>(ROOT_URL + '/UnvanServer/' + id)
  }

}
