import { Component, OnInit } from '@angular/core';
import { MuseumService } from '../Services/museum.service';
import { Museum } from '../models/museum';

@Component({
  selector: 'app-museum',
  templateUrl: './museum.component.html',
  styleUrls: ['./museum.component.css']
})
export class MuseumComponent {
  showCity: boolean = false;
  constructor(private museumService: MuseumService) {}
  museumsFromDB: Museum[] = [];
  getMuseums(): void {
    this.museumService.getMuseums().subscribe((result) =>{
      this.museumsFromDB = result;
    }) 
  }

  changeDetails():void{
    if (this.showCity == true)
      this.showCity = false;
    else
      this.showCity = true;
  }
}
