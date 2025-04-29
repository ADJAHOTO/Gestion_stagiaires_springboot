package com.example.gestionstagiaires.repository;

import com.example.gestionstagiaires.model.Stagiaire;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StagiaireRepository extends JpaRepository<Stagiaire, Integer> {
    // Tu peux ajouter des méthodes spécifiques comme la recherche par formation, par date de début, etc.
  
}
