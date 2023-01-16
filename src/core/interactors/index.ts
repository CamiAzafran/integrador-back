import { createCategoryInteractor } from './category.interactor';
import CategoryDataSource from '../../data/category.datasource';

const CategoryRepository = new CategoryDataSource();

const CategoryInteractor = createCategoryInteractor(CategoryRepository);

const interactors = {
  CategoryInteractor,
};

export default interactors;
