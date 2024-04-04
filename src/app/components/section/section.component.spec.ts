import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SectionComponent } from './section.component';

describe('SectionComponent', () => {
	let component: SectionComponent;
	let fixture: ComponentFixture<SectionComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SectionComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(SectionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('[method] ngOnInit', () => {
		it('should initial state corectly', () => {
			component.ngOnInit();

			expect(component.isLoading).toBeTrue();
			expect(component.heighRand).toBeGreaterThanOrEqual(100);
			expect(component.heighRand).toBeLessThanOrEqual(1000);
			expect(component.isEven).toBeFalse();
		});

		it('should isEvent equal true when itemId % 2', () => {
			component.itemId = 2;
			component.ngOnInit();
			fixture.detectChanges();

			expect(component.isEven).toBeTrue();
		});

		it('should set isLoading to false after delay', fakeAsync(() => {
			component.ngOnInit();

			expect(component.isLoading).toBeTrue();
			tick(3000);
			expect(component.isLoading).toBeFalse();
		}));
	});
});
