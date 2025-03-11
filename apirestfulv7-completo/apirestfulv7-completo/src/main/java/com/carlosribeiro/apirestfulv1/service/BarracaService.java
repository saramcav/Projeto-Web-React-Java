package com.carlosribeiro.apirestfulv1.service;

import com.carlosribeiro.apirestfulv1.exception.EntidadeNaoEncontradaException;
import com.carlosribeiro.apirestfulv1.model.Barraca;
import com.carlosribeiro.apirestfulv1.repository.BarracaRepository;
import com.carlosribeiro.apirestfulv1.repository.FormatoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BarracaService {

    @Autowired
    private BarracaRepository barracaRepository;
    @Autowired
    private FormatoRepository formatoRepository;

    public List<Barraca> recuperarBarracas() {
        return barracaRepository.recuperarBarracasOrdenadasPorIdBarraca();
    }

    public Barraca cadastrarBarraca(Barraca barraca) {
        return barracaRepository.save(barraca);
    }

    @Transactional
    public Barraca alterarBarraca(Barraca barraca) {
        barracaRepository.recuperarBarracaPorIdComLock(barraca.getId())
                .orElseThrow(() -> new EntidadeNaoEncontradaException(
                        "Barraca número " + barraca.getId() + " não encontrada."));
        return barracaRepository.save(barraca);
    }

    public void removerBarraca(long id) {
        recuperarBarracaPorId(id);
        barracaRepository.deleteById(id);
    }

    public Barraca recuperarBarracaPorId(long id) {
        return barracaRepository.findById(id)
                .orElseThrow(() -> new EntidadeNaoEncontradaException(
                        "Barraca número " + id + " não encontrada."));
    }

    public List<Barraca> recuperarBarracasPorIdFormato(long id) {
        formatoRepository.findById(id)
                .orElseThrow(() -> new EntidadeNaoEncontradaException(
                        "Formato número " + id + " não encontrado."));
        return barracaRepository.recuperarBarracasPorIdFormato(id);
    }

    public Page<Barraca> recuperarBarracasComPaginacao(Pageable pageable, String nome) {
        return barracaRepository.recuperarBarracasComPaginacao(pageable, nome);
    }

    public List<Barraca> recuperarBarracasPorNomeDoFormato(String nome) {
        return barracaRepository.recuperarBarracasPorNomeDoFormato(nome);
    }

    // para recuperar só as primeiras 'quantidade' melhores barracas do formato de acordo com a avaliacao
    public List<Barraca> recuperarMelhoresBarracasPorFormato(Long id, int quantidade) {
        Pageable pageable = PageRequest.of(0, quantidade);
        return barracaRepository.recuperarMelhoresBarracasPaginadasPorIdDoFormato(id, pageable).getContent();
    }

    public Page<Barraca> recuperarBarracasPaginadasPorNomeDoFormato(String nome, Pageable pageable) {
        if(!nome.isEmpty()) {
            return barracaRepository.recuperarBarracasPaginadasPorNomeDoFormato(nome, pageable);
        }
        else {
            return barracaRepository.recuperarBarracasPaginadas(pageable);
        }
    }
}

