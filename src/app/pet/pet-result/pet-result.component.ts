import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-result',
  templateUrl: './pet-result.component.html',
  styleUrls: ['./pet-result.component.scss']
})
export class PetResultComponent implements OnInit {

  @Input() name?: string;
  @Input() status?: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
