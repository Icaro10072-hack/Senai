import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjetoNome } from './projeto-nome';

describe('ProjetoNome', () => {
  let component: ProjetoNome;
  let fixture: ComponentFixture<ProjetoNome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoNome],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetoNome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
