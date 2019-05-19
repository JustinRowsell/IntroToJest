import { Injectable } from '@angular/core';
import { Character } from 'src/models/character';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }

  getCharacters(): Character[] {
    const arya = new Character('Arya', 'Stark', 1000000000);
    const theon = new Character('Theon', 'Greyjoy', 5);
    const ned = new Character('Eddard', 'Stark', 8);
    const jaime = new Character('Jaime', 'Lannister', 7);
    const dany = new Character('Daenerys', 'Targaryen', 9);
    const nightKing = new Character('Night', 'King', 10);
    const jon = new Character('Jon', 'Snow', 10);
    return [arya, theon, ned, jaime, dany, nightKing, jon];
  }
}
