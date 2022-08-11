import { Injectable } from '@angular/core';
import { sample_foods } from 'src/data';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  // this service should be connected to backend
  constructor() { }

  getAll(): Food[]{
    return sample_foods;
  }
}
