import api from './api';

const getAllCategories = () => {
    return api.get('/categories');
};

const createCategory = (category) => {
    return api.post('/categories', category);
};

const updateCategory = (id, category) => {
    return api.put(`/categories/${id}`, category);
};

const deleteCategory = (id) => {
    return api.delete(`/categories/${id}`);
};

const categoryService = { getAllCategories, createCategory, updateCategory, deleteCategory };

export default categoryService;
