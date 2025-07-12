import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ScreenService } from '../../core/service/screen.service';
import { NivelJson } from '../../core/model/nivel.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.scss']
})
export class CorpoComponent implements OnInit, AfterViewInit {
  urlImage = '../../assets/img/';
  modoFacil!: string[];
  modoDificil!: string[];

  constructor(
    private screenService: ScreenService,
  ) {}

  ngOnInit(): void {
    let corpo = this.corpo;
    if ( corpo ) {
      corpo.style.height = Number(localStorage.getItem('bodyVH')) + 'vh';
    }
    this.getNiveis();
  }

  ngAfterViewInit(): void {}

  get corpo(): HTMLElement {
    return document.getElementById('corpo') as HTMLElement;
  }

  getNiveis(): void {
    this.screenService.getNiveis().pipe().subscribe({
      next: (dados: NivelJson) => {
        
        this.modoFacil = dados.Nivel.facil;
        this.modoDificil = dados.Nivel.dificil;

        //console.log('Fácil:', dados.Nivel.facil);
        //console.log('Difícil:', dados.Nivel.dificil);
      },
      error: (err: HttpErrorResponse) => {
        console.error('Status:', err.status);        // Ex: 404, 500
        console.error('Mensagem:', err.message);     // Mensagem descritiva
        console.error('Erro completo:', err);        // Objeto detalhado
      }
    })
  }
}
