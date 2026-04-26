import React, { useState, useEffect } from 'react';
import summaryService from '../services/summaryService';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

ChartJS.defaults.color = '#E6F082';

const StatisticsPage = () => {
    const [monthlySummary, setMonthlySummary] = useState(null);
    const [yearlySummary, setYearlySummary] = useState(null);
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);

    useEffect(() => {
        summaryService.getMonthlySummary(year, month).then(response => setMonthlySummary(response.data));
        summaryService.getYearlySummary(year).then(response => setYearlySummary(response.data));
    }, [year, month]);

    const monthlyData = {
        labels: ['Bevétel', 'Kiadás', 'Egyenleg'],
        datasets: [{
            label: 'Havi összegzés',
            data: monthlySummary ? [monthlySummary.totalIncome, monthlySummary.totalExpense, monthlySummary.balance] : [],
            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
        }],
    };

    const yearlyData = {
        labels: ['Bevétel', 'Kiadás', 'Egyenleg'],
        datasets: [{
            label: 'Éves összegzés',
            data: yearlySummary ? [yearlySummary.totalIncome, yearlySummary.totalExpense, yearlySummary.balance] : [],
            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
        }],
    };

    return (
        <div>
            <title>Statisztika</title>
            <h2>Statisztika</h2>
            <div className='statOptions'>
                <label>Év: </label>
                <input type="number" value={year} onChange={e => setYear(e.target.value)} />
                <div className='gap'></div>
                <label>Hónap: </label>
                <input type="number" value={month} onChange={e => setMonth(e.target.value)} />
            </div>
            {monthlySummary && (
                <div>
                    <h3>Havi összegzés</h3>
                    <Bar data={monthlyData} />
                </div>
            )}
            {yearlySummary && (
                <div>
                    <h3>Éves összegzés</h3>
                    <Bar data={yearlyData} />
                </div>
            )}
        </div>
    );
};

export default StatisticsPage;
