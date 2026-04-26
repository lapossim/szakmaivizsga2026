import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import transactionService from '../services/transactionService';
import categoryService from '../services/categoryService';

const TransactionFormPage = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('EXPENSE');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [categoryId, setCategoryId] = useState('');
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        categoryService.getAllCategories().then(response => setCategories(response.data));
        if (id) {
            transactionService.getTransactions({ id }).then(response => {
                const tx = response.data[0];
                setTitle(tx.title);
                setAmount(tx.amount);
                setType(tx.type);
                setDate(tx.date);
                setCategoryId(tx.categoryId);
            });
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const transaction = { title, amount, type, date, categoryId };
        if (id) {
            await transactionService.updateTransaction(id, transaction);
        } else {
            await transactionService.createTransaction(transaction);
        }
        navigate('/transactions');
    };

    return (
        <div>
            <title>Tranzakció</title>
            <h2>Tranzakció {id ? 'módosítása' : 'hozzáadása'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Megnevezés</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Összeg</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                </div>
                <div>
                    <label>Típus</label>
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="INCOME">Bevétel</option>
                        <option value="EXPENSE">Kiadás</option>
                    </select>
                </div>
                <div>
                    <label>Dátum</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>
                <div>
                    <label>Kategória</label>
                    <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
                        <option value="">Kategória kiválasztása</option>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">{id ? 'Frissítés' : 'Létrehozás'}</button>
            </form>
        </div>
    );
};

export default TransactionFormPage;
