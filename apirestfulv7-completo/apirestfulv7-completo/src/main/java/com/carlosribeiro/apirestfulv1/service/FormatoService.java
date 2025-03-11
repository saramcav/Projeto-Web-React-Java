package com.carlosribeiro.apirestfulv1.service;

import com.carlosribeiro.apirestfulv1.exception.EntidadeNaoEncontradaException;
import com.carlosribeiro.apirestfulv1.model.Formato;
import com.carlosribeiro.apirestfulv1.model.FormatoDTO;
import com.carlosribeiro.apirestfulv1.repository.FormatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class FormatoService {

    @Autowired
    private FormatoRepository formatoRepository;
    public FormatoDTO recuperarFormatoComBarracasPorIdFormato(long id) {
        Formato umFormato = formatoRepository.recuperarFormatoComBarracasPorIdFormato(id)
                .orElseThrow(() -> new EntidadeNaoEncontradaException(
                        "Formato número " + id + " não encontrado."));
        return new FormatoDTO(umFormato.getNome(), umFormato.getBarracas());
    }
}
