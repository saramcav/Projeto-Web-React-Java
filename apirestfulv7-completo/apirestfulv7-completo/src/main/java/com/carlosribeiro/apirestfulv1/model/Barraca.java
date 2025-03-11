package com.carlosribeiro.apirestfulv1.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity
public class Barraca {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "A 'Imagem' deve ser informada.")
    private String imagem;

    @NotEmpty(message = "O 'Nome' deve ser informado.")
    private String nome;

    @NotEmpty(message = "A 'Descrição' deve ser informada.")
    @Lob
    private String descricao;

    private boolean disponivel;

    @Min(value=0, message = "A 'Quantidade em estoque' deve ser maior ou igual a 0.")
    private int qtdEstoque;

    @NotNull(message = "O 'Preço' deve ser informado.")
    @DecimalMin(inclusive = true, value="0.1", message = "O 'Preço' deve ser maior ou igual a 0.1.")
    private BigDecimal preco;

    @NotNull(message = "A 'Data de Cadastro' deve ser informada.")
    @Column(name = "DATA_CADASTRO")
    private LocalDate dataCadastro;

    @NotNull(message = "O 'Formato' deve ser informado.")
    @ManyToOne
    private Formato formato;

    @NotEmpty(message = "A 'Modalidade' deve ser informada.")
    private String modalidade;

    @NotNull(message = "A 'Avaliação' deve ser informada.")
    @Min(value = 0, message = "A 'Avaliação' deve ser maior ou igual a 0.")
    @Max(value = 5, message = "A 'Avaliação' deve ser menor ou igual a 5.")
    private int avaliacao;

    @NotEmpty(message = "A 'Capacidade' deve ser informada.")
    private String capacidade;

    @NotEmpty(message = "O 'Material' deve ser informado.")
    private String material;

    @NotEmpty(message = "A 'Estrutura' deve ser informada.")
    private String estrutura;

    @NotEmpty(message = "'Dimensões' devem ser informadas.")
    private String dimensoes;

    @NotEmpty(message = "O 'Peso' deve ser informado.")
    private String peso;

    @NotEmpty(message = "A 'Cor' deve ser informada.")
    private String cor;

    public Barraca(String imagem,
                   String nome,
                   String descricao,
                   boolean disponivel,
                   int qtdEstoque,
                   BigDecimal preco,
                   LocalDate dataCadastro,
                   Formato formato,
                   String modalidade,
                   int avaliacao,
                   String capacidade,
                   String material,
                   String estrutura,
                   String dimensoes,
                   String peso,
                   String cor) {
        this.imagem = imagem;
        this.nome = nome;
        this.descricao = descricao;
        this.disponivel = disponivel;
        this.qtdEstoque = qtdEstoque;
        this.preco = preco;
        this.dataCadastro = dataCadastro;
        this.formato = formato;
        this.modalidade = modalidade;
        this.avaliacao = avaliacao;
        this.capacidade = capacidade;
        this.material = material;
        this.estrutura = estrutura;
        this.dimensoes = dimensoes;
        this.peso = peso;
        this.cor = cor;
    }
}
