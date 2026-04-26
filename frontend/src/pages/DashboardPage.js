import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import transactionService from '../services/transactionService';
import summaryService from '../services/summaryService';

const DashboardPage = () => {
    const [recentTransactions, setRecentTransactions] = useState([]);
    const [monthlySummary, setMonthlySummary] = useState(null);

    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;

        transactionService.getTransactions({ limit: 5 }).then(response => {
            setRecentTransactions(response.data);
        });

        summaryService.getMonthlySummary(year, month).then(response => {
            setMonthlySummary(response.data);
        });
    }, []);

    return (
        <div>
            <title>Menü</title>
            <h2>Menü</h2>

            {monthlySummary && (
                <div>
                    <h3>E hónap összegzése</h3>
                    <p>Bevétel: {monthlySummary.totalIncome} Ft</p>
                    <p>Kiadás: {monthlySummary.totalExpense} Ft</p>
                    <p>Egyenleg: {monthlySummary.balance} Ft</p>
                </div>
            )}

            <h3>Tranzakciók</h3>
            <table>
                <thead>
                    <tr>
                        <th>Megnevezés</th>
                        <th>Összeg</th>
                        <th>Dátum</th>
                    </tr>
                </thead>
                <tbody>
                    {recentTransactions.map(tx => (
                        <tr key={tx.id}>
                            <td>{tx.title}</td>
                            <td>{tx.amount} Ft</td>
                            <td>{tx.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='gap'></div>
            <div className='gap'></div>
            <Link to="/statistics">Adatok megtekintése</Link>
        </div>
    );
};

export default DashboardPage;
