import api from './api';

const getMonthlySummary = (year, month) => {
    return api.get(`/summary/monthly/${year}/${month}`);
};

const getYearlySummary = (year) => {
    return api.get(`/summary/yearly/${year}`);
};

const summaryService = { getMonthlySummary, getYearlySummary };

export default summaryService;
