import { Injectable } from '@angular/core';
import { Painting } from '../models/painting';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaintingService {

  constructor(private fs: Firestore) { }

  getPaintings():Observable<Painting[]>{
    const myCollection: any = collection(this.fs, 'paintings');
    return collectionData(myCollection);
  }

  addPainting(painting: Painting){
    const myCollection = collection(this.fs, 'paintings');
    addDoc(myCollection, painting);
  }


  getAll():Painting[]{
    const myCollection: any = collection(this.fs, 'paintings');
    return myCollection;
  }

  getPaintingById(id: number): Painting {
        return this.getAll().find(painting => painting.Id === id)!;
    }
}
