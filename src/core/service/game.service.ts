import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gameOverSubject = new BehaviorSubject<boolean>(false);

  gameOver$ = this.gameOverSubject.asObservable();

  constructor() { }

  setGameOver(value: boolean) {
    this.gameOverSubject.next(value);
  }

}