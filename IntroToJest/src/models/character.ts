export class Character {
  constructor(firstName: string, lastName: string, badAssScale: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.badAssScale = badAssScale;
  }
  public firstName: string;
  public lastName: string;

  public killedInSeason: number;
  public badAssScale: number;
}
