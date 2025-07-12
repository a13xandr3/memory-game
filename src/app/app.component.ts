import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../core/service/screen.service';
import { GameService } from 'src/core/service/game.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jogo-memoria';

  gameover = false;
  screenWidth: number = 0;
  screenHeight: number = 0;

  constructor(
    private gameService: GameService,
    private screenService: ScreenService
  ) {
    this.screenService.screenSizeObs$.subscribe( (size: any) => {
      //console.log(`width: ${size.width}, Height: ${size.height}`)
    });
    this.gameService.gameOver$.subscribe( (value: boolean) => {
      this.gameover = value;
    });
  }

  ngOnInit(): void {}

}