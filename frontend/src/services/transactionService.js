import api from './api';

const getTransactions = (params) => {
    return api.get('/transactions', { params });
};

const createTransaction = (transaction) => {
    return api.post('/transactions', transaction);
};

const updateTransaction = (id, transaction) => {
    return api.put(`/transactions/${id}`, transaction);
};

const deleteTransaction = (id) => {
    return api.delete(`/transactions/${id}`);
};

const transactionService = { getTransactions, createTransaction, updateTransaction, deleteTransaction };

export default transactionService;
