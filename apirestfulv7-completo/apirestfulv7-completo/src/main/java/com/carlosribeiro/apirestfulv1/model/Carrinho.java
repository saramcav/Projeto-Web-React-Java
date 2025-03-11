package com.carlosribeiro.apirestfulv1.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity
public class Carrinho {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "A data do carrinho deve ser informada.")
    @Column(name = "DATA_CRIACAO")
    private LocalDateTime data;

    @ManyToOne(optional = false)
    private Usuario usuario;

    @OneToMany(mappedBy = "carrinho")
    private List<ItemDeCarrinho> itens;

    public Carrinho(LocalDateTime data, Usuario usuario) {
        this.data = data;
        this.usuario = usuario;
        this.itens = new ArrayList<>();
    }
}