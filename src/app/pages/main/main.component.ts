import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem, MenuService } from '../../core/services/menu/menu.service';
import { Observable } from 'rxjs';
import { SectionComponent } from '../../components/section/section.component';
import { HeightSpyDirective } from '@app/core/directives/height-spy.directive';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    SectionComponent,
    HeightSpyDirective
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  menuItems: Observable<MenuItem[]> = new Observable();

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems();
  }

  onHeightPageIncrease(event: any) {
    document.getElementById("Category3Item0")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
}
