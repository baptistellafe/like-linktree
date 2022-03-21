import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimateService {

  constructor() { }

  animateItens(className, animation) {
    let elements = document.querySelectorAll(className);
    elements.forEach((el, i) => {
      el.classList.add(`animate__${animation}`);
      el.style.animationDelay = i/10 + 's';
      console.log(i/elements.length)
    })
  }
}
