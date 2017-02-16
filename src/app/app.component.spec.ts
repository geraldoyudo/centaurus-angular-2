/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { DashboardComponent} from './dashboard/dashboard.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, SideNavigationComponent, DashboardComponent ],
      schemas:      [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

  it('should have sidebar-nav', () =>{
    shouldHaveElementWithCssSelector("#sidebar-nav");
  });

  it('should have header-navbar', () =>{
    shouldHaveElementWithCssSelector("#header-nav");
  });

  it('should have content-wrapper', () =>{
    shouldHaveElementWithCssSelector("#content-wrapper");
  });
  

  function shouldHaveElementWithCssSelector(cssSelector){
    expect(fixture.debugElement.query(By.css(cssSelector))).toBeTruthy();
  }

  function elementWithCssSelectorShouldContain(cssSelector, text){
    expect(fixture.debugElement.query(By.css(cssSelector)).nativeElement.textContent).toContain(text);
  }
});
