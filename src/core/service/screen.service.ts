import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NivelJson } from '../model/nivel.interface';

@Injectable({
  providedIn: 'root'
})

export class ScreenService {

  private screenSize$ = new BehaviorSubject<{ 
      width: number; 
      height: number;
      img: string;
      }>({
        width: window.innerWidth,
        height: window.innerHeight,
        img: window.innerWidth >= 360 && window.innerWidth < 575 ? '../../assets/img/header-sm.jpg' : 
             window.innerWidth >= 576 && window.innerWidth < 767 ? '../../assets/img/header-sm.jpg' : 
             window.innerWidth >= 768 && window.innerWidth < 991 ?  '../../assets/img/header-md.jpg' :
             window.innerWidth >= 992 && window.innerWidth < 1199 ?  '../../assets/img/header-lg.jpg' :
             window.innerWidth >= 1200 && window.innerWidth < 1399 ?  '../../assets/img/header-xl.jpg' :
             window.innerWidth >= 1400 ? '../../assets/img/header-xxl.jpg' : ''
  });

  screenSizeObs$: any = this.screenSize$.asObservable();

  constructor(
      private zone: NgZone,
      private http: HttpClient
    ) {
    /*
    fromEvent(window, 'resize').subscribe(() => {
      this.zone.run(() => {
        this.screenSize$.next({
          width: window.innerWidth,
          height: window.innerHeight,
          img: 'x'
        });
      });
    });
    */
  }

  getNiveis(): Observable<NivelJson> {
    return this.http.get<NivelJson>('assets/niveis.json');
  }

}
