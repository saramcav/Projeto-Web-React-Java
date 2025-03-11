package com.carlosribeiro.apirestfulv1.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@ToString
@Getter
@Setter
@NoArgsConstructor
@Entity
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "O nome do cliente deve ser informado.")
    private String nome;

    @NotEmpty(message = "A 'Conta' deve ser informada.")
    @Column(unique = true)
    private String conta;

    @NotEmpty(message = "A 'Senha' deve ser informada.")
    private String senha;

    @OneToMany(mappedBy = "usuario")
    @JsonIgnore
    private List<Carrinho> carrinhos;

    public Usuario(String conta, String senha, String nome) {
        this.conta = conta;
        this.senha = senha;
        this.nome = nome;
    }
}
