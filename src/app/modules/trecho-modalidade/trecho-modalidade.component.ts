import { Component, OnInit } from '@angular/core';
import { CalcRouteModel } from 'src/app/models/trecho-modalidade.model';
import { CalcRouteInputModel } from 'src/app/services/inputModels/calc-route-input-model';
import { TrechoModalidadeService } from 'src/app/services/trecho-modalidade.service';

@Component({
  selector: 'app-trecho-modalidade',
  templateUrl: './trecho-modalidade.component.html',
  styleUrls: ['./trecho-modalidade.component.css']
})
export class TrechoModalidadeComponent implements OnInit {
  cities: string[] = [];

  firstCity: string = "";
  lastCity: string = "";
  truckType: string = "";

  public calcRouteModel: CalcRouteModel;

  constructor(
    private trechoModalidadeService: TrechoModalidadeService
  ) { }

  ngOnInit(): void {
    this.trechoModalidadeService.getCities().subscribe(response => {
      this.cities = response;
    });
  }

  calcRoute() {
    let input = new CalcRouteInputModel(this.firstCity, this.lastCity, this.truckType);

    this.trechoModalidadeService.calcRoute(input).subscribe(response => {
      this.calcRouteModel = response;
    });
  }

}
