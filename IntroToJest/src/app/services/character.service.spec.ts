import { TestBed } from '@angular/core/testing';

import { CharacterService } from './character.service';
import { SampleService } from './sample.service';
import { Character } from 'src/models/character';

describe('CharacterService', () => {
  let service: CharacterService;
  const theHound = new Character('Sandor', 'Clegane', 10, 'Doesnt exist but thats ok');
  const arya = new Character('Arya', 'Stark', 1000000000, '../../../assets/arya.jpg');
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [SampleService]
    });
    service = TestBed.get(CharacterService);
    service.getAllCharacters();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all 7 sample characters', () => {
    service.characters.subscribe(characters => {
      expect(characters).toHaveLength(7);
    });
  });

  it('should add the hound', () => {
    service.addCharacter(theHound);
    service.characters.subscribe((characters) => {
      expect(characters).toContain(theHound);
    });
  });

  it('should know character exists already', () => {
    const exists: boolean = service.characterExists(arya);
    expect(exists).toBeTruthy();
  });

  it('should throw error when adding duplicate', () => {
    function testAryaAdd() {
      service.addCharacter(arya);
    }
    expect(testAryaAdd).toThrowError();
  });

  it('should delete character', () => {
    service.deleteCharacter(arya);
    service.characters.subscribe((characters) => {
      expect(characters).toHaveLength(6);
      expect(service.characterExists(arya)).toBeFalsy();
    });
  });

  it('add should check if character exists', () => {
    const spy = jest.spyOn(service, 'characterExists');

    expect(service.characterExists(theHound)).toBeFalsy();
    expect(spy).toHaveBeenCalled();
  });
});
