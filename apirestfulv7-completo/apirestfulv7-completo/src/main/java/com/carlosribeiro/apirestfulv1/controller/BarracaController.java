package com.carlosribeiro.apirestfulv1.controller;

import com.carlosribeiro.apirestfulv1.model.Barraca;
import com.carlosribeiro.apirestfulv1.model.ResultadoPaginado;
import com.carlosribeiro.apirestfulv1.service.BarracaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Sort;

import java.util.List;


@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("barracas")    // http://localhost:8080/barracas
public class BarracaController {

    @Autowired
    private BarracaService barracaService;

    @GetMapping    // GET para http://localhost:8080/barracas
    public ResponseEntity<List<Barraca>> recuperarBarracas() {
        return new ResponseEntity<>(barracaService.recuperarBarracas(), HttpStatus.OK);
    }

    @GetMapping("{idBarraca}")    // GET para http://localhost:8080/barracas/1
    public Barraca recuperarBarraca(@PathVariable("idBarraca") long id) {
        return barracaService.recuperarBarracaPorId(id);
    }

    @PostMapping
    public Barraca cadastrarBarraca(@RequestBody Barraca barraca) {
        return barracaService.cadastrarBarraca(barraca);
    }

    @PutMapping
    public Barraca alterarBarraca(@RequestBody Barraca barraca) {
        return barracaService.alterarBarraca(barraca);
    }

    // Requisição do tipo DELETE para http://localhost:8080/barracas/2
    @DeleteMapping("{idBarraca}")
    public void removerBarraca(@PathVariable("idBarraca") long id) {
        barracaService.removerBarraca(id);
    }


    @GetMapping("formato")
    public ResponseEntity<Object> recuperarBarracas(
            @RequestParam(value = "id", required = false) Long id,
            @RequestParam(value = "quantidade", required = false) Integer quantidade,
            @RequestParam(value = "nome", required = false) String nome) {

        if (id != null && quantidade != null) {
            List<Barraca> barracas = barracaService.recuperarMelhoresBarracasPorFormato(id, quantidade);
            return new ResponseEntity<>(barracas, HttpStatus.OK);
        } else if (id != null) {
            List<Barraca> barracas = barracaService.recuperarBarracasPorIdFormato(id);
            return new ResponseEntity<>(barracas, HttpStatus.OK);
        } else if (nome != null) {
            List<Barraca> produtos = barracaService.recuperarBarracasPorNomeDoFormato(nome);
            return new ResponseEntity<>(produtos, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    // http://localhost:8080/barracas/paginacao?pagina=0&tamanho=5
    @GetMapping("paginacao")
    public ResultadoPaginado<Barraca> recuperarBarracasComPaginacao(
            @RequestParam(value = "pagina", defaultValue = "0") int pagina,
            @RequestParam(value = "tamanho", defaultValue = "3") int tamanho,
            @RequestParam(value = "nome", defaultValue = "") String nome,
            @RequestParam(value = "campo", defaultValue = "id") String campo,
            @RequestParam(value = "ordem", defaultValue = "desc") String ordem) {
        Sort sort;

        if (ordem.equals("asc")) {
            sort = Sort.by(Sort.Direction.ASC, campo);
        }
        else {
            sort = Sort.by(Sort.Direction.DESC, campo);
        }
        Pageable pageable = PageRequest.of(pagina, tamanho, sort);
        Page<Barraca> page = barracaService.recuperarBarracasComPaginacao(pageable, nome);
        ResultadoPaginado<Barraca> resultadoPaginado = new ResultadoPaginado<>(
                page.getTotalElements(),
                page.getTotalPages(),
                page.getNumber(),
                page.getContent());
        return resultadoPaginado;
    }

    @GetMapping("formato/paginacao")
    public ResultadoPaginado<Barraca> recuperarBarracasPaginadasPorNomeDoFormato(
            @RequestParam(value = "pagina", defaultValue = "0") int pagina,
            @RequestParam(value = "tamanho", defaultValue = "3") int tamanho,
            @RequestParam(value = "nomeFormato", defaultValue = "") String nomeFormato) {
        Pageable pageable = PageRequest.of(pagina, tamanho);
        Page<Barraca> page = barracaService.recuperarBarracasPaginadasPorNomeDoFormato(nomeFormato, pageable);
        ResultadoPaginado<Barraca> resultadoPaginado = new ResultadoPaginado<>(
                page.getTotalElements(),
                page.getTotalPages(),
                page.getNumber(),
                page.getContent());
        return resultadoPaginado;
    }
}
