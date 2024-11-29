import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entities/categories.entity';
import { Repository } from 'typeorm';
import * as data from "../assets/data.json"

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) 
    private categoriesRepository: Repository<Category>
  ) {}
  
  async addCategories() {

    data.map(async (product) => {
      await this.categoriesRepository
      .createQueryBuilder()
      .insert()
      .into(Category)
      .values({name: product.category})
      .onConflict(`("name") DO NOTHING`)
      .execute()
    })
    return `Se han añadido las categorías`
  }
}
