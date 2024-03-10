import { Injectable } from '@angular/core';
import { RandomService } from '../random.service';
import { Observable, Subject, delay, of } from 'rxjs';

export interface Item {
  title: string,
  anchor: string,
}
export interface MenuItem {
  category: string,
  items: Item[]
};

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItemsSubject = new Subject<MenuItem[]>();

  constructor(
    private randomService: RandomService
  ) { }

  setMenuItems(count: number) {
    of(true).pipe(delay(0)).subscribe(() => {
      const menuItems = this.setMenuItem(count);
      this.menuItemsSubject.next(menuItems);
    });
  }

  getMenuItems(): Observable<MenuItem[]> {
    return this.menuItemsSubject.asObservable();
  }

  private setMenuItem(count: number): MenuItem[] {
    return new Array(count).fill('Category').map((v, k) => ({
      category: `${v}${k}`,
      items: this.setItems(this.randomService.randomNumber(1, 5), `${v}${k}`)
    }))
  }

  private setItems(count: number, prefix: string): Item[] {
    return new Array(count).fill('Item').map((v, k) => ({
      anchor: v+k,
      title: `${prefix}${v}${k}`
    }));
  }
}
