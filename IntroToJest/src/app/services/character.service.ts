import { Injectable } from '@angular/core';
import { Character } from 'src/models/character';
import { BehaviorSubject, Observable } from 'rxjs';
import { SampleService } from './sample.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  // tslint:disable-next-line:variable-name
  private _characters = new BehaviorSubject(new Array<Character>());
  public readonly characters: Observable<Character[]> = this._characters.asObservable();
  constructor(private sampleData: SampleService) { }

  getAllCharacters(): void {
    const sampleCharacters = this.sampleData.getCharacters();
    this._characters.next(sampleCharacters);
  }

  addCharacter(character: Character): void {
    const characterArr: Character[]  = this._characters.getValue();
    if (this.characterExists(character)) {
      throw new Error(`Character '${character.firstName} ${character.lastName}' already exists`);
    }
    characterArr.push(character);
    this._characters.next(characterArr);
  }

  characterExists(character: Character): boolean {
    const existingCharacters: Character[] = this._characters.getValue();
    for (const c of existingCharacters) {
      if (c.firstName === character.firstName && c.lastName === character.lastName) {
        return true;
      }
    }
    return false;
  }

  deleteCharacter(character: Character): void {
    const characters: Character[] = this._characters.getValue();
    const existingIndex: number = characters
                                  .findIndex(c => c.firstName === character.firstName
                                  && c.lastName === character.lastName);
    if (existingIndex > -1) {
      characters.splice(existingIndex, 1);
    }
  }
}
