
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IitemList } from './itemModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  constructor(private _http:HttpClient) { }
  private _baseUrl = '../assets/data/samples.json';
  public a = [];
  getitems(): Observable<IitemList[]> {
    debugger
    return this._http.get<IitemList[]>(this._baseUrl);
  }
}
