import { Directive, ElementRef,ViewChild } from '@angular/core';

@Directive({
  selector: '[image-loader]'
})

export class ImageLoader {
    @ViewChild('chart') public chartEl: ElementRef;

}
