import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrechoModalidadeComponent } from './trecho-modalidade.component';

describe('TrechoModalidadeComponent', () => {
  let component: TrechoModalidadeComponent;
  let fixture: ComponentFixture<TrechoModalidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrechoModalidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrechoModalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
