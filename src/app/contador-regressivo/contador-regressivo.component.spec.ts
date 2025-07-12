import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorRegressivoComponent } from './contador-regressivo.component';

describe('ContadorRegressivoComponent', () => {
  let component: ContadorRegressivoComponent;
  let fixture: ComponentFixture<ContadorRegressivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorRegressivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorRegressivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
