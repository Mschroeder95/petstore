import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetClient {

  constructor(private http: HttpClient) { }

  /**
   * Get available pets
   * @returns observable list of pets
   */
  getAvailablePets(): Observable<Pet[]> {
    const options =
    { params: new HttpParams().set('status', 'available') };

    return this.http.get<Pet[]>('https://petstore.swagger.io/v2/pet/findByStatus', options);
  }

    /**
   * Get pending pets
   * @returns observable list of pets
   */
  getPendingPets(): Observable<Pet[]> {
      const options =
      { params: new HttpParams().set('status', 'pending') };
  
      return this.http.get<Pet[]>('https://petstore.swagger.io/v2/pet/findByStatus', options);
    }

  /**
   * Get all pets
   * @returns observable list of pets
   */
  getSoldPets(): Observable<Pet[]> {
    const options =
    { params: new HttpParams().set('status', 'sold') };

    return this.http.get<Pet[]>('https://petstore.swagger.io/v2/pet/findByStatus', options);
  }
}
