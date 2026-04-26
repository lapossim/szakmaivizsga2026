package com.example.expensetracker.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {

    @NotBlank(message = "Felhasználónév szükséges")
    @Size(min = 3, max = 50, message = "A felhasználónév 3 és 50 karakter között kell, hogy legyen")
    private String username;

    @NotBlank(message = "Email szükséges")
    @Email(message = "Az email formátuma helytelen")
    private String email;

    @NotBlank(message = "Jelszó szükséges")
    @Size(min = 6, message = "A jelszó 6-nál több karakter kell, hogy legyen")
    private String password;
}
