import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZarOyunuComponent } from './zar-oyunu.component';

describe('ZarOyunuComponent', () => {
  let component: ZarOyunuComponent;
  let fixture: ComponentFixture<ZarOyunuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZarOyunuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZarOyunuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
