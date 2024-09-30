import {Injectable} from '@angular/core';
import {Character} from "../interfaces/character.interface";
import {v4 as uuid} from 'uuid'; //dependencia descargada para crear id comando: npm i uuid , despues en el desarrollo
//utilizar el comando de npm i --save-dev @types/uuid


@Injectable({
  providedIn: 'root'    //agregar el provider in root para determinar uso general,
                        // si no lo lleva agregar en los modulos el servicio a consumir
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 500
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }
  ];

  addCharacter(character: Character): void {
//    console.log('MainPage');
//    console.log(character);
    const newCharacter: Character = {id: uuid(), ...character};     // metodo que agrega el id y las caracteristicas de character

    this.characters.push(newCharacter);
  }

  //onDeleteCharacter(index: number): void {
  //  this.characters.splice(index, 1);
  //}

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter( character => character.id !== id);

  }


}
