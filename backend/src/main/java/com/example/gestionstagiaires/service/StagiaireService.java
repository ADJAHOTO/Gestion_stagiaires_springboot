package com.example.gestionstagiaires.service;

import com.example.gestionstagiaires.model.Stagiaire;
import com.example.gestionstagiaires.repository.StagiaireRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StagiaireService {
    @Autowired
    private final StagiaireRepository repository;

    
    public StagiaireService(StagiaireRepository repository) {
        this.repository = repository;
    }

    public List<Stagiaire> listerTousLesStagiaires() {
        return repository.findAll();
    }

    public Stagiaire rechercherParId(int id) {
        Optional<Stagiaire> stagiaire = repository.findById(id);
        return stagiaire.orElse(null);  // Retourne null si le stagiaire n'existe pas
    }

    public void enregistrerStagiaire(Stagiaire stagiaire) {
        repository.save(stagiaire);
    }

    public void modifierStagiaire(Stagiaire stagiaire) {
        repository.save(stagiaire);  // Cela gère aussi la mise à jour
    }

    public void supprimerStagiaire(int id) {
        repository.deleteById(id);
    }
   
}
