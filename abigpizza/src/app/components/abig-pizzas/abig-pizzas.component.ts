import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'a-big-pizzas',
  templateUrl: './abig-pizzas.component.html',
  styleUrls: ['./abig-pizzas.component.scss'],
})
export class AbigPizzasComponent implements OnInit {

  @Input('text') text: string;
  @Input('imgPath') imgPath: string;
  @Input('description') description: string;
  @Input('precoTamanhoG') precoTamanhoG: number;
  @Input('precoTamanhoP') precoTamanhoP: number;
  @Input('linkTamanhoG') linkTamanhoG: string;
  @Input('linkTamanhoP') linkTamanhoP: string;

  constructor() { }

  ngOnInit() {}

}
