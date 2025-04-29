package com.example.gestionstagiaires.service;

import com.example.gestionstagiaires.model.Encadrant;
import com.example.gestionstagiaires.repository.EncadrantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EncadrantService {
    @Autowired
    private final EncadrantRepository repository;

    
    public EncadrantService(EncadrantRepository repository) {
        this.repository = repository;
    }

    public List<Encadrant> listerEncadrants() {
        return repository.findAll();
    }

    public void ajouterEncadrant(Encadrant encadrant) {
        repository.save(encadrant);
    }

    public Encadrant getById(int id) {
        Optional<Encadrant> encadrant = repository.findById(id);
        return encadrant.orElse(null);  // Retourne null si l'encadrant n'est pas trouvé
    }
}
