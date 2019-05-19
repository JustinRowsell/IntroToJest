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
}
