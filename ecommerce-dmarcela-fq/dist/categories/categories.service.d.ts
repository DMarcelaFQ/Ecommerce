import { Category } from 'src/entities/categories.entity';
import { Repository } from 'typeorm';
export declare class CategoriesService {
    private categoriesRepository;
    constructor(categoriesRepository: Repository<Category>);
    addCategories(): Promise<string>;
}
