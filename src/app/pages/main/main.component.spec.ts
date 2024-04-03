import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { MenuService } from '@app/core/services/menu/menu.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ElementRef } from '@angular/core';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let menuService: MenuService;
  let activateRouteStub: Partial<ActivatedRoute>;

  const mockFragment = 'category01';

  beforeEach(async () => {
    activateRouteStub = {
      fragment: of(mockFragment),
    };

    await TestBed.configureTestingModule({
      imports: [MainComponent],
      providers: [
        MenuService,
        { provide: ActivatedRoute, useValue: activateRouteStub },
        {
          provide: ElementRef,
          useValue: jasmine.createSpyObj('mockElement', ['scrollIntoView']),
        },
      ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    menuService = TestBed.inject(MenuService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('[method] ngOnInit', () => {
    it('should initial state correctly', fakeAsync(() => {
      component.ngOnInit();

      component.menuItems.subscribe((values) => {
        expect(values).toEqual([]);
      });
    }));
  });

  describe('[method] onHeightPageIncrease', () => {
    beforeEach(() => {
      const mockElement = document.createElement('div');
      mockElement.scrollIntoView = jasmine.createSpy('scrollIntoView');

      spyOn(document, 'getElementById').and.returnValue(mockElement);
    });

    it('should scroll to anchor when fragment is present', () => {
      component.onHeightPageIncrease();

      expect(document.getElementById('mockFragment')?.scrollIntoView).toHaveBeenCalledWith({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    });
  });
});
