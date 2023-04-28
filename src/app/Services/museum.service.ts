import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Museum } from '../models/museum';

@Injectable({
  providedIn: 'root'
})
export class MuseumService {

  constructor(private fs: Firestore) { }

  getMuseums():Observable<Museum[]>{
    const myCollection: any = collection(this.fs, 'museums');
    return collectionData(myCollection);
  }

  addMuseum(museum: Museum){
    const myCollection = collection(this.fs, 'museums');
    addDoc(myCollection, museum);
  }
}
