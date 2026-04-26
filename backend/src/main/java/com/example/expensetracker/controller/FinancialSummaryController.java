package com.example.expensetracker.controller;

import com.example.expensetracker.dto.FinancialSummaryDto;
import com.example.expensetracker.service.FinancialSummaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/summary")
@RequiredArgsConstructor
public class FinancialSummaryController {

    private final FinancialSummaryService financialSummaryService;

    @GetMapping("/monthly/{year}/{month}")
    public ResponseEntity<FinancialSummaryDto> getMonthlySummary(
            @PathVariable int year,
            @PathVariable int month) {
        return ResponseEntity.ok(financialSummaryService.getMonthlySummary(year, month));
    }

    @GetMapping("/yearly/{year}")
    public ResponseEntity<FinancialSummaryDto> getYearlySummary(@PathVariable int year) {
        return ResponseEntity.ok(financialSummaryService.getYearlySummary(year));
    }
}
