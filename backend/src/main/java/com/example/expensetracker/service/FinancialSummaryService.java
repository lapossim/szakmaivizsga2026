package com.example.expensetracker.service;

import com.example.expensetracker.dto.FinancialSummaryDto;
import com.example.expensetracker.model.Transaction;
import com.example.expensetracker.model.TransactionType;
import com.example.expensetracker.model.User;
import com.example.expensetracker.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class FinancialSummaryService {

    private final TransactionRepository transactionRepository;
    private final UserService userService;

    public FinancialSummaryDto getMonthlySummary(int year, int month) {
        User user = userService.getCurrentUser();
        LocalDate startDate = LocalDate.of(year, month, 1);
        LocalDate endDate = startDate.withDayOfMonth(startDate.lengthOfMonth());
        return calculateSummary(user, startDate, endDate);
    }

    public FinancialSummaryDto getYearlySummary(int year) {
        User user = userService.getCurrentUser();
        LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year, 12, 31);
        return calculateSummary(user, startDate, endDate);
    }

    private FinancialSummaryDto calculateSummary(User user, LocalDate startDate, LocalDate endDate) {
        List<Transaction> transactions = transactionRepository.findByUserAndDateBetween(user, startDate, endDate);

        BigDecimal totalIncome = transactions.stream()
                .filter(t -> t.getType() == TransactionType.INCOME)
                .map(Transaction::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal totalExpense = transactions.stream()
                .filter(t -> t.getType() == TransactionType.EXPENSE)
                .map(Transaction::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal balance = totalIncome.subtract(totalExpense);

        return FinancialSummaryDto.builder()
                .totalIncome(totalIncome)
                .totalExpense(totalExpense)
                .balance(balance)
                .build();
    }
}
