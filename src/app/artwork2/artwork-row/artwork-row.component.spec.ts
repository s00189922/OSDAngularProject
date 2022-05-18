import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkRowComponent } from './artwork-row.component';

describe('ArtworkRowComponent', () => {
  let component: ArtworkRowComponent;
  let fixture: ComponentFixture<ArtworkRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtworkRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
