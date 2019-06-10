import { Component, OnInit, ElementRef, Renderer, Input, AfterViewInit, AfterViewChecked } from '@angular/core';


@Component({

  selector: 'app-image-slider',

  templateUrl: './image-slider.component.html',

  styleUrls: ['./image-slider.component.css']

})

export class ImageSliderComponent implements OnInit, AfterViewChecked {

  @Input() imagesData;

  slideIndex = 1;

  constructor(private el: ElementRef,
    private renderer: Renderer) { }


  ngOnInit() {
  }


  ngAfterViewChecked() {

    this.showSlides(1);

  }


  showSlides(n) {

    let i;

    const slides = this.el.nativeElement.querySelectorAll('.xOTB-mySlides');

    const dots = this.el.nativeElement.querySelectorAll('.xOTB-dot');

    if (n > slides.length) {

      this.slideIndex = 1;

    }

    if (n < 1) {

      this.slideIndex = slides.length;

    }

    for (i = 0; i < slides.length; i++) {

      this.renderer.setElementStyle(slides[i], 'display', 'none');

    }

    for (i = 0; i < dots.length; i++) {

      dots[i].className = dots[i].className.replace(' xOTB-active', '');

    }

    if (slides.length !== 0) {
      this.renderer.setElementStyle(slides[this.slideIndex - 1], 'display', 'block');
    }

    if (dots.length !== 0) {
      dots[this.slideIndex - 1].className += ' xOTB-active';
    }

  }
  plusSlides(n) {

    this.showSlides(this.slideIndex += n);

  }

  currentSlide(n) {

    this.showSlides(this.slideIndex = n);

  }


}
