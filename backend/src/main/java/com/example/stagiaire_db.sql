CREATE DATABASE gestion_stagiaires;

USE gestion_stagiaires;

-- Table des stagiaires
CREATE TABLE stagiaire (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    email VARCHAR(150) UNIQUE,
    telephone VARCHAR(20),
    formation VARCHAR(100),
    date_debut DATE,
    date_fin DATE
);

-- Table des demandes de stage
CREATE TABLE demande_stage (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    email VARCHAR(150),
    formation VARCHAR(100),
    motivation TEXT,
    statut ENUM('EN_ATTENTE', 'ACCEPTEE', 'REFUSEE') DEFAULT 'EN_ATTENTE'
);

-- Table des encadrants
CREATE TABLE encadrant (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100),
    poste VARCHAR(100),
    email VARCHAR(150)
);

-- Lien entre stagiaire et encadrant (relation many-to-one)
ALTER TABLE stagiaire ADD encadrant_id INT,
    ADD FOREIGN KEY (encadrant_id) REFERENCES encadrant(id);
