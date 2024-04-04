import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Directive({
	selector: '[appHeightSpy]',
	standalone: true,
})
export class HeightSpyDirective implements OnInit, OnDestroy {
	@Output() heightIncreased: EventEmitter<number> = new EventEmitter<number>();

	private observer!: ResizeObserver;
	private previousHeight!: number;

	constructor(private elementRef: ElementRef) {}

	ngOnInit(): void {
		this.observer = new ResizeObserver((entries) => {
			const newHeight = entries[0].contentRect.height;
			if (newHeight > this.previousHeight) {
				this.heightIncreased.emit(newHeight);
			}
			this.previousHeight = newHeight;
		});

		this.observeHeightChanges();
	}

	ngOnDestroy(): void {
		this.observer.disconnect();
	}

	private observeHeightChanges(): void {
		this.observer.observe(this.elementRef.nativeElement);
	}
}
