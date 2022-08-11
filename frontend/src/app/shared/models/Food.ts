export class Food{
  id!:string;
  name!:string; // "!" means required
  price!:number;
  tags?:string[];
  favorite!:boolean;
  stars!: number;
  imageUrl!: string;
  origins!:string[];
  cookTime!:string;
}
