package com.carlosribeiro.apirestfulv1.service;

import com.carlosribeiro.apirestfulv1.exception.EntidadeNaoEncontradaException;
import com.carlosribeiro.apirestfulv1.model.Barraca;
import com.carlosribeiro.apirestfulv1.model.Carrinho;
import com.carlosribeiro.apirestfulv1.model.ItemDeCarrinho;
import com.carlosribeiro.apirestfulv1.repository.BarracaRepository;
import com.carlosribeiro.apirestfulv1.repository.CarrinhoRepository;
import com.carlosribeiro.apirestfulv1.repository.ItemDeCarrinhoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CarrinhoService {
    @Autowired
    private CarrinhoRepository carrinhoRepository;
    @Autowired
    private BarracaRepository barracaRepository;
    @Autowired
    private ItemDeCarrinhoRepository itemDeCarrinhoRepository;

    public Carrinho cadastrarCarrinho(Carrinho carrinho) {
        return carrinhoRepository.save(carrinho);
    }

    @Transactional
    public Carrinho alterarQuantidade(Long carrinhoId, Long itemId, int novaQuantidade) {
        Carrinho carrinho = carrinhoRepository.recuperarCarrinhoPorIdComLock(carrinhoId)
                .orElseThrow(() -> new EntidadeNaoEncontradaException(
                        "Carrinho número " + carrinhoId + " não encontrado."));

        ItemDeCarrinho item = carrinho.getItens().stream()
                .filter(i -> i.getId().equals(itemId))
                .findFirst()
                .orElseThrow(() -> new EntidadeNaoEncontradaException(
                        "Item número " + itemId + " não encontrado no carrinho."));


        item.setQtd(novaQuantidade);

        return carrinhoRepository.save(carrinho);
    }

    public Carrinho removerItemDeCarrinho(Long carrinhoId, Long itemId) {
        Carrinho carrinho = carrinhoRepository.findById(carrinhoId)
                .orElseThrow(() -> new EntidadeNaoEncontradaException(
                        "Carrinho número " + carrinhoId + " não encontrado"));

        ItemDeCarrinho item = carrinho.getItens().stream()
                .filter(i -> i.getId().equals(itemId))
                .findFirst()
                .orElseThrow(() -> new EntidadeNaoEncontradaException(
                        "Item com ID " + itemId + " não encontrado no carrinho " + carrinhoId));

        carrinho.getItens().remove(item);

        itemDeCarrinhoRepository.delete(item);

        return carrinhoRepository.save(carrinho);
    }


    public Optional<Carrinho> recuperarCarrinhoMaisRecentePorConta(String conta) {
        return carrinhoRepository.findFirstByUsuarioContaOrderByDataDesc(conta);
    }

    public Carrinho adicionarItemDeCarrinho(Long carrinhoId, Long barracaId, int qtd) {
        Carrinho carrinho = carrinhoRepository.findById(carrinhoId)
                .orElseThrow(() -> new EntidadeNaoEncontradaException(
                        "Carrinho número " + carrinhoId + " não encontrado"));

        Barraca barraca = barracaRepository.findById(barracaId)
                .orElseThrow(() -> new EntidadeNaoEncontradaException(
                        "Barraca número " + barracaId + " não encontrada"));

        Optional<ItemDeCarrinho> itemExistenteOpt = itemDeCarrinhoRepository
                .findByCarrinhoIdAndBarracaId(carrinhoId, barracaId);

        if (itemExistenteOpt.isPresent()) {
            ItemDeCarrinho itemExistente = itemExistenteOpt.get();
            itemExistente.setQtd(itemExistente.getQtd() + qtd);
            itemDeCarrinhoRepository.save(itemExistente);
        } else {
            ItemDeCarrinho novoItem = new ItemDeCarrinho(qtd, carrinho, barraca);
            itemDeCarrinhoRepository.save(novoItem);
            carrinho.getItens().add(novoItem);
        }

        return carrinhoRepository.save(carrinho);
    }
}
