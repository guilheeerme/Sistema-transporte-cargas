import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StatisticsModel } from "../models/statistics-mode";

@Injectable({
  providedIn: 'root'
})
export class EstatisticasService {
  private rootUrl = "https://localhost:7054/api/";

  constructor(private http: HttpClient) { }
  
  GetStatistics(): Observable<StatisticsModel[]> {
    return this.http.get<StatisticsModel[]>(this.rootUrl.concat("GetStatistics"));
  }
}