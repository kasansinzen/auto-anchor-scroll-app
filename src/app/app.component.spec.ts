import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        TemplateComponent,
        BrowserAnimationsModule
      ],
      providers: []
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have title 'auto-anchor-scroll-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('auto-anchor-scroll-app');
  });

  it(`should have class 'app' wrapper`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('auto-anchor-scroll-app');
  });
});
