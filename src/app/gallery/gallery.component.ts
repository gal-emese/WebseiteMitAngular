import { Component } from '@angular/core';
import { Painting } from '../models/painting';
import { PaintingService } from '../Services/painting.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  paintingsFromDB: Painting[] = [];
  constructor(private paintingService: PaintingService){}
  getPaintings(): void {
    this.paintingService.getPaintings().subscribe(result =>{
      this.paintingsFromDB = result;
    }) 
  }
  
  changeFavColor(painting:Painting){
    if (painting.FavColor != "warn")
      painting.FavColor = "warn"
    else
      painting.FavColor = "primary";
  }

}
