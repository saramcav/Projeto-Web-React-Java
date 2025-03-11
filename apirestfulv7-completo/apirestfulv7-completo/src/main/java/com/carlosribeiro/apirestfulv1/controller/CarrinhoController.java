package com.carlosribeiro.apirestfulv1.controller;

import com.carlosribeiro.apirestfulv1.model.Carrinho;
import com.carlosribeiro.apirestfulv1.model.CarrinhoDTO;
import com.carlosribeiro.apirestfulv1.service.CarrinhoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/carrinhos")
public class CarrinhoController {
    @Autowired
    private CarrinhoService carrinhoService;

    @PostMapping("/{carrinhoId}/itens")
    public CarrinhoDTO adicionarItemDeCarrinho(
            @PathVariable Long carrinhoId,
            @RequestParam Long barracaId,
            @RequestParam int qtd) {
        System.out.println("Chegou" + carrinhoId + " " + barracaId + " " + qtd);
        Carrinho carrinho = carrinhoService.adicionarItemDeCarrinho(carrinhoId, barracaId, qtd);
        return new CarrinhoDTO(carrinho.getId(), carrinho.getItens());
    }

    @PutMapping("/{carrinhoId}/itens/{itemId}")
    public CarrinhoDTO alterarQuantidade(
            @PathVariable Long carrinhoId,
            @PathVariable Long itemId,
            @RequestParam int novaQuantidade
    ) {
        Carrinho carrinho = carrinhoService.alterarQuantidade(carrinhoId, itemId, novaQuantidade);
        return new CarrinhoDTO(carrinho.getId(), carrinho.getItens());
    }

    @DeleteMapping("/{carrinhoId}/itens/{itemId}")
    public CarrinhoDTO removerItemDeCarrinho(@PathVariable Long carrinhoId, @PathVariable Long itemId) {
        Carrinho carrinho = carrinhoService.removerItemDeCarrinho(carrinhoId, itemId);
        return new CarrinhoDTO(carrinho.getId(), carrinho.getItens());
    }

    @GetMapping("/usuario/{conta}/mais-recente")
    public Optional<CarrinhoDTO> recuperarCarrinhoMaisRecentePorConta(@PathVariable String conta) {
        Optional<Carrinho> carrinho = carrinhoService.recuperarCarrinhoMaisRecentePorConta(conta);
        return carrinho.map(c -> new CarrinhoDTO(c.getId(), c.getItens()));
    }

    @PostMapping
    public CarrinhoDTO cadastrarCarrinho(@RequestBody Carrinho carrinho) {
        Carrinho carrinhoCriado = carrinhoService.cadastrarCarrinho(carrinho);
        return new CarrinhoDTO(carrinhoCriado.getId(), carrinhoCriado.getItens());
    }
}
