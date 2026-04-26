package com.example.expensetracker.service;

import com.example.expensetracker.dto.TransactionDto;
import com.example.expensetracker.model.Category;
import com.example.expensetracker.model.Transaction;
import com.example.expensetracker.model.TransactionType;
import com.example.expensetracker.model.User;
import com.example.expensetracker.repository.CategoryRepository;
import com.example.expensetracker.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TransactionService {

    private final TransactionRepository transactionRepository;
    private final CategoryRepository categoryRepository;
    private final UserService userService;

    public List<TransactionDto> getTransactions(LocalDate startDate, LocalDate endDate, Long categoryId, TransactionType type) {
        User user = userService.getCurrentUser();
        Category category = categoryId != null ? categoryRepository.findById(categoryId).orElse(null) : null;
        return transactionRepository.findByUserAndFilters(user, startDate, endDate, category, type).stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    public TransactionDto createTransaction(TransactionDto transactionDto) {
        User user = userService.getCurrentUser();
        Category category = categoryRepository.findById(transactionDto.getCategoryId())
                .orElseThrow(() -> new IllegalArgumentException("Kategória nem található"));
        if (!category.getUser().equals(user)) {
            throw new SecurityException("Nem vagy jogosult a kategória használatára");
        }
        Transaction transaction = convertToEntity(transactionDto, category, user);
        Transaction savedTransaction = transactionRepository.save(transaction);
        return convertToDto(savedTransaction);
    }

    public TransactionDto updateTransaction(Long id, TransactionDto transactionDto) {
        User user = userService.getCurrentUser();
        Transaction transaction = transactionRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Tranzakció nem található"));
        if (!transaction.getUser().equals(user)) {
            throw new SecurityException("Nem vagy jogosult a tranzakció frissítésére");
        }
        Category category = categoryRepository.findById(transactionDto.getCategoryId())
                .orElseThrow(() -> new IllegalArgumentException("Kategória nem található"));
        if (!category.getUser().equals(user)) {
            throw new SecurityException("Nem vagy jogosult a kategória használatára");
        }

        transaction.setTitle(transactionDto.getTitle());
        transaction.setAmount(transactionDto.getAmount());
        transaction.setType(transactionDto.getType());
        transaction.setDate(transactionDto.getDate());
        transaction.setCategory(category);

        Transaction updatedTransaction = transactionRepository.save(transaction);
        return convertToDto(updatedTransaction);
    }

    public void deleteTransaction(Long id) {
        User user = userService.getCurrentUser();
        Transaction transaction = transactionRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Tranzakció nem található"));
        if (!transaction.getUser().equals(user)) {
            throw new SecurityException("Nem vagy jogosult a tranzakció törlésére");
        }
        transactionRepository.delete(transaction);
    }

    private TransactionDto convertToDto(Transaction transaction) {
        return TransactionDto.builder()
                .id(transaction.getId())
                .title(transaction.getTitle())
                .amount(transaction.getAmount())
                .type(transaction.getType())
                .date(transaction.getDate())
                .categoryId(transaction.getCategory().getId())
                .categoryName(transaction.getCategory().getName())
                .build();
    }

    private Transaction convertToEntity(TransactionDto transactionDto, Category category, User user) {
        return Transaction.builder()
                .title(transactionDto.getTitle())
                .amount(transactionDto.getAmount())
                .type(transactionDto.getType())
                .date(transactionDto.getDate())
                .category(category)
                .user(user)
                .build();
    }
}
