import {Component} from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Hulk', 'IronMan', 'Thor', 'Batman'];
  public deleteHero?: string; // el simbolo ? es para ser opcional


  removeLastHeroe():void{
    this.deleteHero = this.heroNames.pop(); //Remueve el ultimo elemento de una lista
}




}
