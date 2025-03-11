package com.carlosribeiro.apirestfulv1.repository;

import com.carlosribeiro.apirestfulv1.model.ItemDeCarrinho;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ItemDeCarrinhoRepository  extends JpaRepository<ItemDeCarrinho, Long> {
    Optional<ItemDeCarrinho> findByCarrinhoIdAndBarracaId(Long carrinhoId, Long barracaId);
}
