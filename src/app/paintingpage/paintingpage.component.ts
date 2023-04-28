import { Component } from '@angular/core';
import { Painting } from '../models/painting';
import { ActivatedRoute } from '@angular/router';
import { PaintingService } from '../Services/painting.service';

@Component({
  selector: 'app-paintingpage',
  templateUrl: './paintingpage.component.html',
  styleUrls: ['./paintingpage.component.css']
})
export class PaintingpageComponent{
  painting!: Painting;
  constructor(private activatedRoute: ActivatedRoute, private paintingService: PaintingService) {
    activatedRoute.params.subscribe((params) => {
      if(params['Id'])
      this.painting = paintingService.getPaintingById(params['Id']);})
  }
}
