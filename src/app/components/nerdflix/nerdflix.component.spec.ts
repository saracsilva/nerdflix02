import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NerdflixComponent } from './nerdflix.component';

describe('NerdflixComponent', () => {
  let component: NerdflixComponent;
  let fixture: ComponentFixture<NerdflixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NerdflixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NerdflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
