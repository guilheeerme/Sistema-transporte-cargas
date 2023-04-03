import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './modules//navigation/navigation.component';
import { TrechoModalidadeComponent } from './modules//trecho-modalidade/trecho-modalidade.component';
import { TransporteComponent } from './modules//transporte/transporte.component';
import { EstatisticasComponent } from './modules/estatisticas/estatisticas.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { AddCityComponent } from './modules/transporte/addCity/add-city.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TrechoModalidadeComponent,
    TransporteComponent,
    EstatisticasComponent,
    AddCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
