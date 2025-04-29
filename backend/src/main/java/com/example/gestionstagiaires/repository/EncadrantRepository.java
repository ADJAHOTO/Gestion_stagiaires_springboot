package com.example.gestionstagiaires.repository;

import com.example.gestionstagiaires.model.Encadrant;
import org.springframework.data.jpa.repository.JpaRepository;


public interface EncadrantRepository extends JpaRepository<Encadrant, Integer> {
    // Tu peux ajouter des méthodes spécifiques si nécessaire
    


}
