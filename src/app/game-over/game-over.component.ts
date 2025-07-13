import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/core/service/game.service';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit, OnDestroy {

  constructor(
    private gameService: GameService,
    private router: Router) 
    {
      document.body.style.overflow = 'hidden';
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }

  reiniciar() {
    this.gameService.setGameOver(false);
    this.router.navigate(['']);
  }
}