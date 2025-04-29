package com.example.gestionstagiaires.resource;  // Change le package pour correspondre à ton projet Spring Boot

import com.example.gestionstagiaires.model.Stagiaire;
import com.example.gestionstagiaires.service.StagiaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stagiaires")
public class StagiaireController {
    @Autowired
    private final StagiaireService service;

    // Injection du service via le constructeur
    
    public StagiaireController(StagiaireService service) {
        this.service = service;
    }

    // Récupérer tous les stagiaires
    @GetMapping("/tous_les_stagiaires")
    public List<Stagiaire> getAll() {
        return service.listerTousLesStagiaires();
    }

    // Récupérer un stagiaire par ID
    @GetMapping("/stagiaire/{id}")
    public ResponseEntity<Stagiaire> getById(@PathVariable int id) {
        Stagiaire stagiaire = service.rechercherParId(id);
        return stagiaire != null ? ResponseEntity.ok(stagiaire) : ResponseEntity.notFound().build();  // Code HTTP 404 si non trouvé
    }

    // Créer un nouveau stagiaire
    @PostMapping("/creer_un_stagiaire")
    public ResponseEntity<Void> create(@RequestBody Stagiaire stagiaire) {
        service.enregistrerStagiaire(stagiaire);
        return ResponseEntity.status(201).build();  // Code HTTP 201 (Created)
    }

    // Mettre à jour un stagiaire existant
    @PutMapping("/metter_a_jour_stagiaire")
    public ResponseEntity<Void> update(@RequestBody Stagiaire stagiaire) {
        service.modifierStagiaire(stagiaire);
        return ResponseEntity.ok().build();  // Code HTTP 200 (OK)
    }

    // Supprimer un stagiaire par ID
    @DeleteMapping("/delete_stagiaire/{id}")
    public ResponseEntity<Void> delete(@PathVariable int id) {
        service.supprimerStagiaire(id);
        return ResponseEntity.noContent().build();  // Code HTTP 204 (No Content)
    }

    

}
