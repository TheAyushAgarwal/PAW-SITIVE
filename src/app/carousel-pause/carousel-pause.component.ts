import { Component, Input, OnInit } from '@angular/core';
interface carouselImage{
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-carousel-pause',
  templateUrl: './carousel-pause.component.html',
  styleUrls: ['./carousel-pause.component.css']
})
export class CarouselPauseComponent implements OnInit {

  @Input() images: carouselImage[]=[]
  selectedIndex=0;
  constructor() { }

  ngOnInit(): void {
  }

}
