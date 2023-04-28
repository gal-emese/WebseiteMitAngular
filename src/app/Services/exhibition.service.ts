import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Exhibition } from '../models/exhibition';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {

  constructor(private fs: Firestore) { }

  getExhibitions():Observable<Exhibition[]>{
    const myCollection: any = collection(this.fs, 'exhibition');
    return collectionData(myCollection);
  }

  addExhibition(exhibition: Exhibition){
    const myCollection = collection(this.fs, 'exhibition');
    addDoc(myCollection, exhibition);
  }

}
