package com.example.gestionstagiaires.repository;

import com.example.gestionstagiaires.model.DemandeStage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public interface StatutDemandeRepository extends JpaRepository<DemandeStage, Integer> {
    List<DemandeStage> findByStatut(String statut);
  
}
