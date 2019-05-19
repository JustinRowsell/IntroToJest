import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/models/character';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  characterList: Observable<Character[]>;
  constructor(private service: CharacterService) { }

  ngOnInit() {
    this.characterList = this.service.characters;
    this.service.getAllCharacters();
  }

}
