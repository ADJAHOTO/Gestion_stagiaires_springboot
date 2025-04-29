package com.example.gestionstagiaires.resource;

import com.example.gestionstagiaires.model.DemandeStage;
import com.example.gestionstagiaires.model.StatutDemande;
import com.example.gestionstagiaires.service.DemandeStageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/demande-de-stage")
public class DemandeStageController {

    @Autowired
    private DemandeStageService demandeStageService;

    // Récupérer toutes les demandes
    @GetMapping("/toutes_les_demandes")
    public List<DemandeStage> getAllDemandes() {
        return demandeStageService.getToutesLesDemandes();
    }

    // Soumettre une demande
    @PostMapping("/creer_une_demande")
    public DemandeStage createDemande(@RequestBody DemandeStage demande) {
        return demandeStageService.soumettreDemande(demande);
    }

    // Accepter une demande de stage par ID
    @PutMapping("/accepter/{id}")
    public void accepterDemande(@PathVariable int id) {
        demandeStageService.accepterDemande(id);
    }

    // Refuser une demande de stage par ID
    @PutMapping("/refuser/{id}")
    public void refuserDemande(@PathVariable int id) {
        demandeStageService.refuserDemande(id);
    }

    // Filtrer les demandes par statut
    @GetMapping("/statut/{statut}")
    public List<DemandeStage> getDemandesByStatut(StatutDemande statut) {
        return demandeStageService.getDemandesParStatut(statut);
    }
}
