import { Injectable } from '@angular/core';
import {sample_foods, sample_tags} from 'src/data';
import { Food } from '../shared/models/Food';
import {Tag} from "../shared/models/Tag";

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  // this service should be connected to backend
  constructor() { }

  getAll(): Food[]{
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm:string){

    if(searchTerm ==""){
      return this.getAll()
    }

    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))

  }

  getAllTags(): Tag[]{
    return sample_tags;
  }

  getAllFoodsByTag(tag:string): Food[]{
    return tag == "All" ?
    this.getAll() :
    this.getAll().filter(food => food.tags?.includes(tag))
  }

  getFoodById(foodId:string):Food{
    //The nullish coalescing operator (??) is a logical operator that
    // returns its right-hand side operand when
    // its left-hand side operand is null or undefined,
    // and otherwise returns its left-hand side operand
    return this.getAll().find(food => food.id == foodId) ?? new Food();
  }



}
