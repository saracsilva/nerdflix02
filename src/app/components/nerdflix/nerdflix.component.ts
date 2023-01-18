import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-nerdflix',
  templateUrl: './nerdflix.component.html',
  styleUrls: ['./nerdflix.component.css'],
})
export class NerdflixComponent {
  options: AnimationOptions = {
    path: '/assets/nerds_logo_01.json',
    autoplay: true,
    loop: false,
  };

  constructor() {}

  ngOnInit(): void {}

  // This is the component function that binds to the animationCreated event from the package
  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
