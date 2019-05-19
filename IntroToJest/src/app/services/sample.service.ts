import { Injectable } from '@angular/core';
import { Character } from 'src/models/character';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }

  getCharacters(): Character[] {
    const arya = new Character('Arya', 'Stark', 1000000000, '../../../assets/arya.jpg');
    const theon = new Character('Theon', 'Greyjoy', 5, '../../../assets/theon.jpg');
    const ned = new Character('Eddard', 'Stark', 8, '../../../assets/ned.jpg');
    const jaime = new Character('Jaime', 'Lannister', 7, '../../../assets/jaime.jpeg');
    const dany = new Character('Daenerys', 'Targaryen', 9, '../../../assets/dany.jpg');
    const nightKing = new Character('Night', 'King', 10, '../../../assets/nightking.jpg');
    const jon = new Character('Jon', 'Snow', 10, '../../../assets/jon-snow.jpg');
    return [arya, theon, ned, jaime, dany, nightKing, jon];
  }
}
