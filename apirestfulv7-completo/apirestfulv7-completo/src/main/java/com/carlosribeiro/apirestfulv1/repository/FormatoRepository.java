package com.carlosribeiro.apirestfulv1.repository;

import com.carlosribeiro.apirestfulv1.model.Formato;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface FormatoRepository extends JpaRepository<Formato, Long> {

    @Query("select f from Formato f left outer join fetch f.barracas where f.id = :id")
    Optional<Formato> recuperarFormatoComBarracasPorIdFormato(@Param("id") long id);
}
