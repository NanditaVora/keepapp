import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        MatToolbarModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have mat-toolbar as header',()=>{
    let toolbar = fixture.debugElement.query(By.css('mat-toolbar'))
    expect(toolbar).toBeTruthy();
  })

  it('should have Keep App as title in toolbar',()=>{
    let toolbar = fixture.debugElement.query(By.css('mat-toolbar'))
    expect(toolbar.nativeElement.innerText).toContain('Keep App');
  })
});
