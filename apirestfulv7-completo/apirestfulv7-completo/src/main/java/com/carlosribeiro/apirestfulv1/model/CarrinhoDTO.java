package com.carlosribeiro.apirestfulv1.model;

import java.util.List;

public record CarrinhoDTO(Long id, List<ItemDeCarrinho> itens) {

}
