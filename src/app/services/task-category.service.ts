import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskCategoryService {

  private categories: Set<string> = new Set<string>();
  constructor() {
    // init
    this.categories.add('school');
    this.categories.add('work');
    this.categories.add('errands');
  }

  getCategories(): string[] {
    let temp: string[] = [];
    for (let c of this.categories) {
      temp.push(c);
    }
    return temp;
  }
  
  addCategory(category: string) {
    this.categories.add(category);
  }

  deleteCategories(category: string) {
    this.categories.delete(category);
  }

  updateCategory(category: string, newCategory: string) {
    if (this.categories.has(category)) {
      this.categories.delete(category);
      this.categories.add(newCategory);
    }
  }
}
