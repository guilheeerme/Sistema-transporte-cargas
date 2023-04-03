import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { productModel } from 'src/app/models/transporte.model';
import { CalcTransportValuesInputModel } from 'src/app/services/inputModels/calc-transport-values-input-model';
import { TransporteService } from 'src/app/services/transporte.service';
import { TrechoModalidadeService } from 'src/app/services/trecho-modalidade.service';
import { AddCityComponent } from './addCity/add-city.component';

@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.component.html',
  styleUrls: ['./transporte.component.css']
})
export class TransporteComponent implements OnInit {
  componentFactory: ComponentFactory<AddCityComponent>;
	componentRef: ComponentRef<AddCityComponent>;
	@ViewChild("addCityComponent", { read: ViewContainerRef }) addCityComponent: ViewContainerRef;

  cities: string[] = [];
  count: number = 0;
  products: productModel[];
  citiesAndProducts: CalcTransportValuesInputModel[] = [];

  result: string = "";

  constructor(
    private trechoModalidadeService: TrechoModalidadeService,
    private transporteService: TransporteService,
    private componentFactoryResolver: ComponentFactoryResolver) 
  { 
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(AddCityComponent);
  }

  ngOnInit(): void {
    this.transporteService.getProducts().subscribe(response => {
      this.products = response;
    })
    this.trechoModalidadeService.getCities().subscribe(response => {
      this.cities = response;
      this.addCity();
    });
  }

  addCity(): void {
    this.componentRef = this.addCityComponent.createComponent(this.componentFactory);
    this.componentRef.instance.cities = this.cities;
    this.componentRef.instance.count = this.count;
    this.componentRef.instance.products = this.products;
    this.componentRef.instance.output.subscribe((result) => {
      if (this.citiesAndProducts.find(x => x.city == result.city))
      {
        let index = this.citiesAndProducts.findIndex(x => x.city == result.city)
        this.citiesAndProducts.splice(index, 1, result);
      } else {
        this.citiesAndProducts.push(result);
      }
    })
    this.count++;
  }

  calcTransportValues() {
    this.transporteService.calcTransportValues(this.citiesAndProducts).subscribe(response => {
      
      let truckTypes: string[] = ["Pequeno", "Médio", "Grande"];
      let trucks: string[] = [];

      truckTypes.forEach(type => {
        let count = response.trucks.filter(x => x == type).length;
        if (count > 0)
        {
          trucks.push(`${count} caminhão(ões) ${type.toLowerCase()}`);
        }
      });

      this.result = `Para realizar o transporte dos produtos entre as cidades selecionadas a distância será de ${response.totalDistance}km, utilizando ${trucks.join(' e ')}, e terá o valor de R$${response.totalCost}.`;
    })
  }
}
