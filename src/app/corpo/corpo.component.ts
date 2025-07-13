import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ScreenService } from '../../core/service/screen.service';
import { NivelJson } from '../../core/model/nivel.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, concatMap, map, Observable, of, throwError } from 'rxjs';

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.scss']
})
export class CorpoComponent implements OnInit, AfterViewInit {
  nivelSelecionado = 'Facil';

  imagensCertas = [];
  modoFacil!: [];
  modoDificil!: [];

  urlImage = '../../assets/img/';

  constructor(
    private screenService: ScreenService,
  ) {
  }

  ngOnInit(): void {
    let corpo = this.corpo;
    if ( corpo ) {
      corpo.style.height = Number(localStorage.getItem('bodyVH')) + 'vh';
    }
    this.executarEmOrdem();
  }

  ngAfterViewInit(): void {
  }

  get corpo(): HTMLElement {
    return document.getElementById('corpo') as HTMLElement;
  }

  getNiveis(): Observable<any> {
    return this.screenService.getNiveis().pipe(
      map((dados: NivelJson) => {
        return dados.Nivel.facil;  // devolve o array direto
      }),
      catchError((err: HttpErrorResponse) => {
        console.error('Status:', err.status);
        console.error('Mensagem:', err.message);
        console.error('Erro completo:', err);
        return throwError(() => err);  // reemite erro pro fluxo
      })
    );
  }

  executarEmOrdem(): any {
    this.getNiveis().pipe(
      concatMap((resultadoPrimeira: any) => {
        return this.shuffle(resultadoPrimeira);
      })
    ).subscribe((resultadoSegunda: any) => {
      this.modoFacil = resultadoSegunda;
      console.log('Array embaralhado:', resultadoSegunda);
    });
  }

///

  // Função para embaralhar um array (algoritmo Fisher-Yates)
  shuffle(array: any) {
      for (let i = array?.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
      }
    return of(array).pipe();
  }

}
