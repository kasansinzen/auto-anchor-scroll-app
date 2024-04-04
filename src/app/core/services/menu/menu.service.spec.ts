import { TestBed } from '@angular/core/testing';

import { MenuService } from './menu.service';

describe('MenuService', () => {
	let service: MenuService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(MenuService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	describe('[method] setMenuItems', () => {
		it('should set menu items', (done: DoneFn) => {
			service.menuItemsSubject.subscribe((values) => {
				expect(values.length).toEqual(mockItemsCount);
				expect(typeof values[0]?.category).toEqual('string');
				expect(typeof values[0]?.items).toEqual('object');
				done();
			});

			const mockItemsCount = 10;
			service.setMenuItems(mockItemsCount);
		});
	});

	describe('[method] getMenuItems', () => {
		it('should trigger when set menu items', () => {
			service.getMenuItems().subscribe((values) => {
				expect(values.length).toBeGreaterThanOrEqual(mockItemsCount);
			});

			const mockItemsCount = 10;
			service.setMenuItems(mockItemsCount);
		});
	});
});
