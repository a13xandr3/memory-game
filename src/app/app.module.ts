import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CorpoComponent } from './corpo/corpo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContadorRegressivoComponent } from './contador-regressivo/contador-regressivo.component';
import { GameOverComponent } from './game-over/game-over.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    CorpoComponent,
    RodapeComponent,
    ContadorRegressivoComponent,
    GameOverComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ CabecalhoComponent, GameOverComponent, HttpClient ],
  bootstrap: [AppComponent]
})
export class AppModule { }
