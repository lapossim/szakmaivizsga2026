import React, { useState, useEffect } from 'react';
import categoryService from '../services/categoryService';

const CategoriesPage = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [editingCategory, setEditingCategory] = useState(null);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        const response = await categoryService.getAllCategories();
        setCategories(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editingCategory) {
            await categoryService.updateCategory(editingCategory.id, { name });
        } else {
            await categoryService.createCategory({ name });
        }
        fetchCategories();
        setName('');
        setEditingCategory(null);
    };

    const handleEdit = (category) => {
        setEditingCategory(category);
        setName(category.name);
    };

    const handleDelete = async (id) => {
        await categoryService.deleteCategory(id);
        fetchCategories();
    };

    return (
        <div>
            <title>Kategóriák</title>
            <h2>Kategóriák</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Kategória neve"
                    required
                />
                <div className='gap'></div>
                <button type="submit">{editingCategory ? 'Frissítés' : 'Létrehozás'}</button>
            </form>
            <ul>
                {categories.map((cat) => (
                    <li key={cat.id}>
                        <div className='listType'>
                            {cat.name}
                            <div className='buttons'>
                                <button type='change' onClick={() => handleEdit(cat)}>Frissítés</button>
                                <button type='change' onClick={() => handleDelete(cat.id)}>Törlés</button>
                            </div>
                        </div>
                        <div className='gap'></div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesPage;
