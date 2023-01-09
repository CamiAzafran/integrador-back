/* import { Result } from 'express-validator'; */
import { Category } from '../entities/category';
import CategoryRepository from '../respositories/category.repository';

export const createCategoryInteractor =
  (CategoryRepository: CategoryRepository) =>
  async (categoryName: string): Promise/* <Result */<Category>/* > */ => {
    const newCategory = await CategoryRepository.createCategory(categoryName);
    return newCategory;
  };
