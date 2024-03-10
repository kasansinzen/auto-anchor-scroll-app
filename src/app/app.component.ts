import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, Scroll } from '@angular/router';
import { MenuService } from './core/services/menu/menu.service';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';
import { TemplateComponent } from './components/template/template.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TemplateComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'auto-anchor-scroll-app';
  
  constructor(
    private menuService: MenuService,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    viewportScroller.setOffset([0, 60]);
    router.events.pipe(filter(e => e instanceof Scroll)).subscribe((e: any) => {
      console.log('e', e);
      if (e.anchor) {
        // anchor navigation
        setTimeout(() => {
          viewportScroller.scrollToAnchor(e.anchor);
        })
      } else if (e.position) {
        // backward navigation
        viewportScroller.scrollToPosition(e.position);
      } else {
        // forward navigation
        viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }

  ngOnInit(): void {
    // this.router.navigate(['/']);
    // this.menuService.setMenuItems(5);
  }
}
