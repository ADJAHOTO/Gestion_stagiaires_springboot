package com.example.gestionstagiaires.service;

import com.example.gestionstagiaires.model.DemandeStage;
import com.example.gestionstagiaires.model.StatutDemande;
import com.example.gestionstagiaires.repository.DemandeStageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DemandeStageService {

    @Autowired
    private DemandeStageRepository demandeStageRepository;

    @Autowired
    private EmailService emailService; // Injection du service d'email

    // Récupérer toutes les demandes de stage
    public List<DemandeStage> getToutesLesDemandes() {
        return demandeStageRepository.findAll();
    }

    // Soumettre une nouvelle demande
    public DemandeStage soumettreDemande(DemandeStage demande) {
        return demandeStageRepository.save(demande);
    }

    // Accepter une demande de stage
    public void accepterDemande(int id) {
        Optional<DemandeStage> demande = demandeStageRepository.findById(id);
        if (demande.isPresent()) {
            DemandeStage d = demande.get();
            d.setStatut(StatutDemande.ACCEPTEE); // Changer le statut

            // Envoyer un email de notification
            String emailText = "Bonjour " + d.getNom() + ",\n\nVotre demande de stage a été acceptée.";
            emailService.sendEmail(d.getEmail(), "Votre demande de stage acceptée", emailText);

            demandeStageRepository.save(d);
        }
    }

    // Refuser une demande de stage
    public void refuserDemande(int id) {
        Optional<DemandeStage> demande = demandeStageRepository.findById(id);
        if (demande.isPresent()) {
            DemandeStage d = demande.get();
            d.setStatut(StatutDemande.REFUSEE); // Changer le statut

            // Envoyer un email de notification
            String emailText = "Bonjour " + d.getNom() + ",\n\nNous regrettons de vous informer que votre demande de stage a été refusée.";
            emailService.sendEmail(d.getEmail(), "Votre demande de stage refusée", emailText);

            demandeStageRepository.save(d);
        }
    }

    // Filtrer les demandes par statut
    public List<DemandeStage> getDemandesParStatut(StatutDemande statut) {
        return demandeStageRepository.findByStatut(statut);
    }
}
