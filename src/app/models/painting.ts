export class Painting {
    Id!: number;
    Jahr: number;
    Maler: string;
    MuseumName: string;
    Titel: string;
    ImageUrl: string;
    FavColor: string;
    Deskription: string;
    
constructor() {
    this.Jahr = 0;
    this.Maler = '';
    this.MuseumName = '';
    this.Titel = '';
    this.ImageUrl = '';
    this.FavColor = "primary";
    this.Deskription = '';
}
}
