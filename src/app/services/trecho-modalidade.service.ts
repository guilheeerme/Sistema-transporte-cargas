import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { CalcRouteInputModel } from "./inputModels/calc-route-input-model";
import { CalcRouteModel } from "../models/trecho-modalidade.model";

@Injectable({
  providedIn: 'root'
})
export class TrechoModalidadeService {
  private rootUrl = "https://localhost:7054/api/";

  constructor(private http: HttpClient) { }

  getCities(): Observable<string[]> {
    return this.http.get<string[]>(this.rootUrl.concat("GetCities"));
  };

  calcRoute(input: CalcRouteInputModel): Observable<CalcRouteModel> {
    return this.http.post<CalcRouteModel>(this.rootUrl.concat("CalcRoute"), input);
  }
}
