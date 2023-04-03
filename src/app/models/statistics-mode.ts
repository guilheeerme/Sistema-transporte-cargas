export class StatisticsModel {
  totalCost: number;
  totalKm: number;
  totalTrucks: number;
  totalProducts: number;
  totalWeight: number;
  averageKmCost: number;
  averageTypeProductCost: number;
  citiesRoute: CitiesRouteModel[];
};

export class CitiesRouteModel
{
  firstCity: string;
  lastCity: string;
  cost: number;
}