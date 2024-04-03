import { Component } from '@angular/core';
import { TemplateComponent } from './components/template/template.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TemplateComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'auto-anchor-scroll-app';
  
  constructor() { }
}
