import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contador-regressivo',
  templateUrl: './contador-regressivo.component.html',
  styleUrls: ['./contador-regressivo.component.scss']
})
export class ContadorRegressivoComponent implements OnInit, OnDestroy {

  totalSegundos = 5500;
  segundosRestantes = this.totalSegundos;
  percentual = 100;

  private intervalId: any;

  constructor(private router: Router) {
      this.iniciarContagem();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if ( this.intervalId ) {
      clearInterval(this.intervalId);
    }
  }

  iniciarContagem(): void {
    this.segundosRestantes = this.totalSegundos;
    this.percentual = 100;
    this.intervalId = setInterval(() => {
      if (this.segundosRestantes > 0) {
        this.segundosRestantes--;
        this.percentual = (this.segundosRestantes / this.totalSegundos) * 100;
      } else {
        clearInterval(this.intervalId);
        this.showScreenGameOver();
      }
    }, 1000);
  }

  showScreenGameOver(): void {
    this.router.navigate(['game-over']);
  }

}