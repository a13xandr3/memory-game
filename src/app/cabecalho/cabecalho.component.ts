import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { ScreenService } from '../../core/service/screen.service';
import { converterPxParaVh } from '../../core/helpers/math.helper';
import { loadImageInfo } from '../../core/helpers/image.helper';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit, AfterViewInit {

  constructor(private screenService: ScreenService) {
    this.screenService.screenSizeObs$.subscribe((elem: any) => {
      this.loadImage(elem);
      //console.log('elem==1>', elem);
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  async loadImage(e: any): Promise<any> {
    try {
      const info = await loadImageInfo(e.img);
      let imagemFake = document.createElement('img');
      let imagemRenderizada = document.getElementById('containerImagem');
      imagemFake.src = e.img;
      //console.log('========================');
      //console.log('Largura:', info.width);
      //console.log('Altura:', info.height);
      //console.log('Tipo:', info.type);
      //console.log('Tamanho (KB):', info.sizeKB);
      //console.log('innerHeight', window.innerHeight);
      //console.log('largura / altura', (info.width / info.height));
      //console.log('vhhh', ((info.width / info.height) / 900) * 100);
      //console.log('========================');
      imagemFake.onload = () => {
        //cabeçalho-altura
        const alturaVh = converterPxParaVh(info.height, window.innerHeight);
        //body-algura
        const corpoVh = ((100 - alturaVh) - 5);
        //rodapé-algura
        const rodapeVh = 5;
        //locaSotre - registro de parametros
        localStorage.setItem('cabecalhoVH', alturaVh.toString());
        localStorage.setItem('bodyVH', corpoVh.toString());
        localStorage.setItem('rodapeVH', rodapeVh.toString());
        //construção da imagem
        imagemFake.style.backgroundRepeat = 'no-repeat';
        imagemFake.style.width = '100%';
        imagemFake.style.height = `${alturaVh}vh`;
        //implementando parametros para a imagem a ser renderizada
        imagemRenderizada?.appendChild(imagemFake);
      }
    } catch (err) {
      console.error('Erro ao carregar imagem:', err);
    }
  }
}