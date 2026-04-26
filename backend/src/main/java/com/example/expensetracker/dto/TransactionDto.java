package com.example.expensetracker.dto;

import com.example.expensetracker.model.TransactionType;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TransactionDto {

    private Long id;

    @NotBlank(message = "Megnevezés szükséges")
    private String title;

    @NotNull(message = "Összeg szükséges")
    @DecimalMin(value = "0.01", message = "Az összegnek nagyobbnak kell lennie, mint 0")
    private BigDecimal amount;

    @NotNull(message = "Típus szükséges")
    private TransactionType type;

    @NotNull(message = "Dátum szükséges")
    private LocalDate date;

    @NotNull(message = "Kategória szükséges")
    private Long categoryId;

    private String categoryName;
}
