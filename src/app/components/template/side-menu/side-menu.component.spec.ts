import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SideMenuComponent } from './side-menu.component';

describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let fixture: ComponentFixture<SideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('[method] ngOnInit', () => {
    it('should intitial state correctly', () => {
      component.ngOnInit();

      expect(component.menuItems).toEqual([]);
    });

    it('should get menu items when setMenuItems complete', fakeAsync(() => {
      component.ngOnInit();
      tick();
      
      expect(component.menuItems.length).toEqual(5);
      expect(typeof component.menuItems[0].category).toEqual('string');
      expect(typeof component.menuItems[0].items[0].title).toEqual('string');
      expect(typeof component.menuItems[0].items[0].anchor).toEqual('string');
    }));
  });
});
