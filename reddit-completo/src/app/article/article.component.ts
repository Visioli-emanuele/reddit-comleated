import { Component, OnInit, HostBinding} from'@angular/core';
import { Article } from './ article.model';
@Component({
  selector: 'app-article', //Il tag per inserire il componente sarà <app-article>
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class AppComponent {
  articles:Article[];   // <-- component property
  constructor(){
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article('Angular 2', 'http://angular.io', 3));
    return false;
  }
}