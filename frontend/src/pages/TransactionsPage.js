import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import transactionService from '../services/transactionService';
import categoryService from '../services/categoryService';

const TransactionsPage = () => {
    const [transactions, setTransactions] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filters, setFilters] = useState({ startDate: '', endDate: '', categoryId: '', type: '' });

    useEffect(() => {
        fetchTransactions();
        categoryService.getAllCategories().then(response => setCategories(response.data));
    }, []);

    const fetchTransactions = async () => {
        const response = await transactionService.getTransactions(filters);
        setTransactions(response.data);
    };

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleFilterSubmit = (e) => {
        e.preventDefault();
        fetchTransactions();
    };

    const handleDelete = async (id) => {
        await transactionService.deleteTransaction(id);
        fetchTransactions();
    };

    return (
        <div>
            <title>Tranzakció</title>
            <h2>Tranzakciók</h2>
            <Link to="/add-transaction">Tranzakció hozzáadása</Link>

            <form onSubmit={handleFilterSubmit}>
                <input type="date" name="startDate" value={filters.startDate} onChange={handleFilterChange} />
                <div className='gap'></div>
                <input type="date" name="endDate" value={filters.endDate} onChange={handleFilterChange} />
                <div className='gap'></div>
                <select name="categoryId" value={filters.categoryId} onChange={handleFilterChange}>
                    <option value="">Minden kategória</option>
                    {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                </select>
                <div className='gap'></div>
                <select name="type" value={filters.type} onChange={handleFilterChange}>
                    <option value="">Minden típus</option>
                    <option value="INCOME">Bevétel</option>
                    <option value="EXPENSE">Kiadás</option>
                </select>
                <div className='gap'></div>
                <button type="submit">Szűrés</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Megnevezés</th>
                        <th>Összeg</th>
                        <th>Típus</th>
                        <th>Dátum</th>
                        <th>Kategória</th>
                        <th>Lehetóségek</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(tx => (
                        <tr key={tx.id}>
                            <td>{tx.title}</td>
                            <td>{tx.amount}</td>
                            <td>{tx.type}</td>
                            <td>{tx.date}</td>
                            <td>{tx.categoryName}</td>
                            <td>
                                <Link to={`/edit-transaction/${tx.id}`}>Módosítás</Link>
                                <i> </i>
                                <Link onClick={() => handleDelete(tx.id)}>Törlés</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionsPage;
