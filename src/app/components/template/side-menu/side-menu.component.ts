import { Component, OnInit } from '@angular/core';
import { MenuItem, MenuService } from '../../../core/services/menu/menu.service';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatListModule
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(
    private menuService: MenuService,
    private scroll: ViewportScroller
  ) { }

  ngOnInit(): void {
    this.menuService.getMenuItems().subscribe(menuItems => {
      this.menuItems = menuItems;
    });
    this.menuService.setMenuItems(5);
  }
}
