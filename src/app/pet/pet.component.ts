import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet.model';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {

  allPets?: Pet[]

  constructor(private petService: PetService) {
    petService.getAllPets().subscribe(
      (response) => {
        console.log(response);
        this.allPets = response
      }
    );
  }

  ngOnInit(): void {
    
  }

}
