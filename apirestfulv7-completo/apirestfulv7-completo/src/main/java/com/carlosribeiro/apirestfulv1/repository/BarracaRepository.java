package com.carlosribeiro.apirestfulv1.repository;

import com.carlosribeiro.apirestfulv1.model.Barraca;
import jakarta.persistence.LockModeType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;


public interface BarracaRepository extends JpaRepository<Barraca, Long> {

    List<Barraca> findByPreco(BigDecimal preco);

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("select b from Barraca b where b.id = :id")
    Optional<Barraca> recuperarBarracaPorIdComLock(Long id);

    @Query("select b from Barraca b left outer join fetch b.formato order by b.id")
    List<Barraca> recuperarBarracasOrdenadasPorIdBarraca();

    @Query("select b from Barraca b where b.formato.id = :id")
    List<Barraca> recuperarBarracasPorIdFormato(@Param("id") long id);

    @Query(
            value = "select b from Barraca b " +
                    "left outer join fetch b.formato " +
                    "where b.nome like %:nome% ",
            countQuery = "select count(b) from Barraca b where b.nome like %:nome% "
    )
    Page<Barraca> recuperarBarracasComPaginacao(Pageable pageable, @Param("nome") String nome);

    @Query("select b from Barraca b " +
            "left outer join fetch b.formato f " +
            "where f.nome = :nome " +
            "order by b.id")
    List<Barraca> recuperarBarracasPorNomeDoFormato(@Param("nome") String nome);

    @Query(
            value = "select b from Barraca b " +
                    "left outer join fetch b.formato f " +
                    "where f.nome = :nome " +
                    "order by b.nome",
            countQuery = "select count(b) " +
                    "from Barraca b " +
                    "left outer join b.formato f " +
                    "where f.nome = :nome "
    )
    Page<Barraca> recuperarBarracasPaginadasPorNomeDoFormato(@Param("nome") String nome, Pageable pageable);

    @Query(
            value = "select b from Barraca b " +
                    "left outer join fetch b.formato f " +
                    "order by b.nome",
            countQuery = "select count(b) from Barraca b "
    )
    Page<Barraca> recuperarBarracasPaginadas(Pageable pageable);

    @Query(
            value = "select b from Barraca b " +
                    "left outer join fetch b.formato f " +
                    "where f.id = :id " +
                    "order by b.avaliacao desc",
            countQuery = "select count(b) " +
                    "from Barraca b " +
                    "left outer join b.formato f " +
                    "where f.id = :id"
    )
    Page<Barraca> recuperarMelhoresBarracasPaginadasPorIdDoFormato(
            @Param("id") Long id,
            Pageable pageable);
}
