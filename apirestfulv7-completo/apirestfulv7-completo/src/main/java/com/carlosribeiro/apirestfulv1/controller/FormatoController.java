package com.carlosribeiro.apirestfulv1.controller;

import com.carlosribeiro.apirestfulv1.model.FormatoDTO;
import com.carlosribeiro.apirestfulv1.service.FormatoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("formatos")   // http://localhost:8080/formatos
public class FormatoController {

    @Autowired
    private FormatoService formatoService;

    @GetMapping ("{idFormato}/barracas")   // http://localhost:8080/formatos/1/barracas
    public FormatoDTO recuperarFormatoComBarracasPorIdFormato(@PathVariable("idFormato") long id) {
        return formatoService.recuperarFormatoComBarracasPorIdFormato(id);
    }
}