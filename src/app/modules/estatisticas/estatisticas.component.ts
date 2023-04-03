import { Component, OnInit } from '@angular/core';
import { StatisticsModel } from 'src/app/models/statistics-mode';
import { EstatisticasService } from 'src/app/services/estatisticas.service';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {
  statistics: StatisticsModel[];

  constructor(
    private estatisticasService: EstatisticasService
  ) { }

  ngOnInit(): void {
    this.estatisticasService.GetStatistics().subscribe(response => {
      this.statistics = response;
    })
  }

}
