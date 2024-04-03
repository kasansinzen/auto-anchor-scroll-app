import { Component, ElementRef } from '@angular/core';
import { HeightSpyDirective } from './height-spy.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('HeightSpyDirective', () => {
  let directive: HeightSpyDirective;
  let fixure: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixure = TestBed.configureTestingModule({
      providers: [
        // ElementRef
      ]
    }).createComponent(TestComponent);

    fixure.detectChanges();
    // directive = fixure.componentInstance.directive;
  });
  afterEach(() => {
    fixure.destroy();
  });

  it('should create an instance', () => {
    expect(fixure).toBeTruthy();
  });

  // it('should emit heightIncreased event when hight increase', () => {
  //   const spy = jasmine.createSpy('heightIncreased');
  // });
});

@Component({
  standalone: true,
  template: '<div appHeightSpy></div>',
  imports: [HeightSpyDirective]
})
class TestComponent { }
