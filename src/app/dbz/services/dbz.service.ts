import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable(
  {providedIn: 'root'}
)
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 250
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 15000
    },
    {
      id: uuid(),
      name: 'Vegueta',
      power: 7500
    }
  ];

  public addCharacter(character: Character): void{

    const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    }


    this.characters.push(newCharacter);
  }

  public deleteCharacterById(id: string): void{
    this.characters = this.characters.filter(c => c.id !== id);
  }

}
