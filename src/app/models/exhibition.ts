export class Exhibition {
    Anfang: Date;
    Ende: Date;
    Maler: string;
    MuseumName: string;
    Titel: string;
    
constructor() {
    this.Anfang = new Date();
    this.Ende = new Date();
    this.Maler = '';
    this.MuseumName = '';
    this.Titel = '';
}
}
