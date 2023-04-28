import { Component,OnInit } from '@angular/core';
import { Exhibition } from '../models/exhibition';
import { ExhibitionService } from '../Services/exhibition.service';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.css']
})
export class ExhibitionComponent implements OnInit{
  _snackBar: any;
  constructor(private exhibitionService: ExhibitionService) {}
  exhibitionsFromDB: Exhibition[] = [];
  inputValue: string = '';

  newAnfang: Date = new Date();
  newEnde: Date =  new Date();
  newMaler: string = '';
  newMuseumName: string = '';
  newMuseumId: number = 0;
  newStandort: string = '';
  newTitel: string = '';

  museumOptionen: string[] = ["Prado","Louvre","Museum of Fine Arts", "Mauritshuis", "Janus Pannonius Museum"];
  startDatum: string = '';
  endDatum: string = '';

  getExhibitions(): void {
    this.exhibitionService.getExhibitions().subscribe(result =>{
      this.exhibitionsFromDB = result;
    })
  }

  addExhibition(): void {
    let newExhibition = {Titel: this.newTitel, 
       MuseumName: this.newMuseumName, Anfang: this.newAnfang,
       Ende: this.newEnde, Maler: this.newMaler}
    this.exhibitionService.addExhibition(newExhibition);
  }

  changeMuseumName(e:any){
    this.newMuseumName = e.target.value;
  }

  endDateChanged(event:any) {
    this.newEnde = event.target.value;
  }

  startDateChanged(event:any) {
    this.newAnfang = event.target.value;
  }

  
  myControl = new FormControl('');
  filteredOptions: Observable<string[]> |undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.museumOptionen.filter(option => option.toLowerCase().includes(filterValue));
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }


  calculateDate(start: Date, end: Date){
    this.startDatum = start.toLocaleDateString('en-US');
    this.endDatum = end.toLocaleDateString('en-US');
  }

}
