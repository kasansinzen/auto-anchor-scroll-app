import { Component, Input, OnInit } from '@angular/core';
import { RandomService } from '../../core/services/random.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent implements OnInit {
  @Input() itemId!: number;
  @Input() itemTitle!: string;

  heighRand!: number;
  isEven = false;
  isLoading = false;

  constructor(
    private randomService: RandomService
  ) {
    this.heighRand = this.randomService.randomNumber(100, 1000);
  }

  ngOnInit(): void {
    this.isLoading = true;
    of(true).pipe(delay(this.randomService.randomNumber(1, 3) * 1000)).subscribe(() => {
      this.isLoading = false;
    });
    this.isEven = (this.itemId % 2) === 0;
  }
}
