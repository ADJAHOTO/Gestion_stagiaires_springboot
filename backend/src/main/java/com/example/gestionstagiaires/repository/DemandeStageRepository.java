package com.example.gestionstagiaires.repository;

import com.example.gestionstagiaires.model.StatutDemande;
import com.example.gestionstagiaires.model.DemandeStage;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface DemandeStageRepository extends JpaRepository<DemandeStage, Integer> {
    List<DemandeStage> findByStatut(StatutDemande statut);
}
