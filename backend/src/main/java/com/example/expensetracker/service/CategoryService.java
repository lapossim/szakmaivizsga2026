package com.example.expensetracker.service;

import com.example.expensetracker.dto.CategoryDto;
import com.example.expensetracker.model.Category;
import com.example.expensetracker.model.User;
import com.example.expensetracker.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private final UserService userService;

    public List<CategoryDto> getAllCategories() {
        User user = userService.getCurrentUser();
        return categoryRepository.findByUser(user).stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    public CategoryDto createCategory(CategoryDto categoryDto) {
        User user = userService.getCurrentUser();
        Category category = convertToEntity(categoryDto);
        category.setUser(user);
        Category savedCategory = categoryRepository.save(category);
        return convertToDto(savedCategory);
    }

    public CategoryDto updateCategory(Long id, CategoryDto categoryDto) {
        User user = userService.getCurrentUser();
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Kategória nem található"));
        if (!category.getUser().equals(user)) {
            throw new SecurityException("Nem vagy jogosult a kategória frissítésére");
        }
        category.setName(categoryDto.getName());
        Category updatedCategory = categoryRepository.save(category);
        return convertToDto(updatedCategory);
    }

    public void deleteCategory(Long id) {
        User user = userService.getCurrentUser();
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Kategória nem található"));
        if (!category.getUser().equals(user)) {
            throw new SecurityException("Nem vagy jogosult a kategória törlésére");
        }
        categoryRepository.delete(category);
    }

    private CategoryDto convertToDto(Category category) {
        return CategoryDto.builder()
                .id(category.getId())
                .name(category.getName())
                .build();
    }

    private Category convertToEntity(CategoryDto categoryDto) {
        return Category.builder()
                .name(categoryDto.getName())
                .build();
    }
}
