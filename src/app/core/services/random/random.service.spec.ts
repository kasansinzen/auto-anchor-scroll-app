import { TestBed } from '@angular/core/testing';

import { RandomService } from './random.service';

describe('RandomService', () => {
	let service: RandomService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(RandomService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	describe('[method] randomNumber', () => {
		it('should return number between 1-10', () => {
			const result = service.randomNumber(1, 10);
			expect(result).toBeLessThanOrEqual(10);
		});
	});
});
