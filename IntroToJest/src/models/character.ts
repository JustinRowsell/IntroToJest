export class Character {
  constructor(firstName: string, lastName: string, badAssScale: number, imagePath: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.badAssScale = badAssScale;
    this.imagePath = imagePath;
  }
  public firstName: string;
  public lastName: string;

  public killedInSeason: number;
  public badAssScale: number;
  public imagePath: string;
}
