import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatwedoPageComponent } from './whatwedo-page.component';

describe('WhatwedoPageComponent', () => {
  let component: WhatwedoPageComponent;
  let fixture: ComponentFixture<WhatwedoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatwedoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatwedoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
