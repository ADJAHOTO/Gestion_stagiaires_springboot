package com.example.gestionstagiaires.resource;  // Change le package pour correspondre à ton projet Spring Boot

import com.example.gestionstagiaires.model.Encadrant;
import com.example.gestionstagiaires.service.EncadrantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/encadrants")
public class EncadrantController {
    @Autowired
    private final EncadrantService service;

    // Injection de service via le constructeur
    
    public EncadrantController(EncadrantService service) {
        this.service = service;
    }

    // Récupérer tous les encadrants
    @GetMapping("/tous_les_encadrants")
    public List<Encadrant> getAll() {
        return service.listerEncadrants();
    }

    // Créer un encadrant
    @PostMapping("/creer_un_encadrant")
    public ResponseEntity<Void> create(@RequestBody Encadrant encadrant) {
        service.ajouterEncadrant(encadrant);
        return ResponseEntity.status(201).build();  // Code HTTP 201 (Created)
    }

    // Récupérer un encadrant par ID
    @GetMapping("/recuperer_un_encadrant/{id}")
    public ResponseEntity<Encadrant> getById(@PathVariable int id) {
        Encadrant encadrant = service.getById(id);
        return encadrant != null ? ResponseEntity.ok(encadrant) : ResponseEntity.notFound().build();  // Code HTTP 404 si non trouvé
    }
    // Mettre à jour un encadrant existant
    @PutMapping("/mettre_a_jour_encadrant")
    public ResponseEntity<Void> update(@RequestBody Encadrant encadrant) {
        service.ajouterEncadrant(encadrant);
        return ResponseEntity.ok().build();  // Code HTTP 200 (OK)
    }
    // Supprimer un encadrant par ID
    @DeleteMapping("/supprimer_encadrant/{id}")
    public ResponseEntity<Void> delete(@PathVariable int id) {
        Encadrant encadrant = service.getById(id);
        if (encadrant != null) {
            service.ajouterEncadrant(encadrant);
            return ResponseEntity.noContent().build();  // Code HTTP 204 (No Content)
        } else {
            return ResponseEntity.notFound().build();  // Code HTTP 404 si non trouvé
        }
    }
}
