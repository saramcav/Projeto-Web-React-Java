package com.carlosribeiro.apirestfulv1.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity
public class ItemDeCarrinho {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Min(value = 1, message = "A quantidade deve ser maior ou igual a 1.")
    private int qtd;

    @ManyToOne(optional = false)
    @JsonIgnore
    private Carrinho carrinho;

    @ManyToOne(optional = false)
    private Barraca barraca;

    public ItemDeCarrinho(int qtd, Carrinho carrinho, Barraca barraca) {
        this.qtd = qtd;
        this.carrinho = carrinho;
        this.barraca = barraca;
    }
}
