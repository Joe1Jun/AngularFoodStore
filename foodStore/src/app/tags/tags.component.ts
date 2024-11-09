import { Component } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FoodService } from '../Services/food/food-service.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {

  tags: Tag [] = [];

  constructor(private foodService :FoodService){}

  ngOnInit(){
    this.tags = this.foodService.getAllTags();
  }


}
