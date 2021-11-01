import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PetClient } from '../client/pet-client';
import { Pet } from '../models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  allPetsSubject: Subject<Pet[]> = new Subject();


  constructor(private petClient: PetClient) { }

  /**
   * Get all Pets
   */
  getAllPets(): Observable<Pet[]> {
    // this.petClient.getAvailablePets().subscribe(
    //   (available) => {
    //     this.petClient.getPendingPets().subscribe(
    //       (pending) => {
    //         this.petClient.getSoldPets().subscribe(
    //           (sold) => {
    //             let all: Pet[] = [];
    //             all.concat(available)
    //             all.concat(pending);
    //             all.concat(sold)
    //             this.allPetsSubject.next(all)
    //           });
    //       });
    //   });
    return this.petClient.getAvailablePets();
  }
}
