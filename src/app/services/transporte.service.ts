import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { ProductInputModel } from "./inputModels/product-input-model";
import { productModel } from "../models/transporte.model";
import { CalcTransportValuesInputModel } from "./inputModels/calc-transport-values-input-model";
import { CalcTransportValuesModel } from "../models/calc-transport-values-model";

@Injectable({
  providedIn: 'root'
})
export class TransporteService {
  private rootUrl = "https://localhost:7054/api/";

  constructor(private http: HttpClient) { }

  insertProduct(input: ProductInputModel): Observable<productModel> {
    return this.http.post<productModel>(this.rootUrl.concat("InsertProduct"), input);
  }

  getProducts(): Observable<productModel[]> {
    return this.http.get<productModel[]>(this.rootUrl.concat("GetProducts"));
  };

  calcTransportValues(input: CalcTransportValuesInputModel[]): Observable<CalcTransportValuesModel> {
    return this.http.post<CalcTransportValuesModel>(this.rootUrl.concat("CalcTransportValues"), input);
  }
}