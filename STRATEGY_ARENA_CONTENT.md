# Cartographie Complète du Contenu du Site Web · Strategy Arena

Ce document présente une structuration détaillée et exhaustive de l'ensemble des contenus éditoriaux, techniques et stratégiques présents sur le site web de **Strategy Arena**, cabinet de conseil en stratégie et organisation opérationnelle basé à Cotonou, Bénin.

---

## 1. Identité de Marque & Ligne Directrice (Design & Produit)

Inspiré du concept créatif **"The Local Sentinel"**, le site adopte des codes visuels modernes et affirmés (typographie display, contraste franc, structure haute densité), recontextualisés avec une rigueur de terrain propre aux réalités ouest-africaines, plutôt que rejetés.

*   **Public Cible :** Gérants et décideurs de PME, commerces de détail et entreprises agroalimentaires au Bénin et en Afrique de l'Ouest.
*   **Mission :** Auditer les opérations réelles sur le terrain, identifier les frictions organisationnelles et concevoir/déployer des solutions durables (processus simplifiés, automatisations légères) adaptées aux réalités locales (connectivité fluctuante, budgets maîtrisés, compétences d'équipe).
*   **Palette de Couleurs :**
    *   **Canary Yellow (`#F4E723`) :** Utilisé avec parcimonie (Règle des 10%) pour les boutons d'appel à l'action (CTA) majeurs et les éléments d'accentuation.
    *   **Pitch Black (`#080808`) & Deep Dark Ink (`#0F100F`) :** Couleurs d'arrière-plan des sections sombres et couleur principale des textes sur fond clair.
    *   **Crisp Off-White (`#FAFAFA`) :** Fond des sections claires pour maximiser le contraste et la lisibilité sous le soleil d'Afrique de l'Ouest.
*   **Typographie :**
    *   **Anton :** Pour les titres display et en-têtes majeurs (ultra-condensée, percutante, en capitales).
    *   **Whyte Inktrap :** Pour le corps du texte (technique, moderne, assurant une excellente lisibilité).

---

## 2. Structure Détaillée de la Page d'Accueil (`index.html`)

La page d'accueil est découpée en 12 sections clés alternant fonds sombres et fonds clairs pour rythmer le parcours utilisateur.

### A. En-tête (Navbar)
*   **Éléments :** Logo officiel (`Logoss.svg`), liens d'accès rapide.
*   **Comportement :** Barre flottante et minimaliste, s'adaptant de façon dynamique au défilement.

### B. Section Hero
*   **Titre Principal :** `BÂTIR VOTRE CROISSANCE MAIN DANS LA MAIN`
*   **Description :** Strategy Arena audite vos opérations, identifie vos vraies frictions et recommande les outils, process ou technologies adaptés à votre réalité, sans jamais imposer de solution générique d'avance.
*   **Visuel de fond :** `images/new_image_hero.jpg`.

### C. Section À Propos (`#about`)
*   **Titre :** `Un diagnostic juste, avant toute solution.`
*   **Contenu :** Présentation de la philosophie basée sur le Design Thinking. Le diagnostic terrain s'impose avant l'implémentation de tout logiciel informatique pour éviter « d'automatiser le chaos ».
*   **Les Trois Piliers d'Action (Pills) :**
    1.  *(01) Origines & Terrain* : Ancrage local ouest-africain.
    2.  *(02) Savoir-faire Technique* : Processus, automatisation, intégration.
    3.  *(03) Décision par la Data* : Indicateurs chiffrés et suivi objectif.

### D. Section Réalisations (Études de Cas - `#realisations`)
*   **Titre :** `Des résultats concrets.`
*   **Description :** Co-construction de systèmes opérationnels durables adaptés aux équipes locales.
*   **Cartes Projets Présentées :**
    1.  **Gestion des Stocks** (Bénin Distribution) : Élimination de la double saisie papier/numérique, gain de 15h de travail par semaine. (Voir [benin-distribution.html](file:///Users/shalomtalesman/Downloads/ARENA/cases/benin-distribution.html))
    2.  **Pilotage des Marges** (Sahel Foods) : Centralisation comptable physique et outil de suivi, hausse de +8% de marge nette. (Voir [sahel-foods.html](file:///Users/shalomtalesman/Downloads/ARENA/cases/sahel-foods.html))
    3.  **Flux Opérationnels** (Atlantique Logistique) : Remplacement de l'ordre de mission papier par une messagerie directe, 98% de livraisons à l'heure. (Voir [atlantique-logistique.html](file:///Users/shalomtalesman/Downloads/ARENA/cases/atlantique-logistique.html))

### E. Section Services (`#services`)
*   **Titre :** `Des solutions adaptées pour chaque niveau.`
*   **Les 4 Offres Clés :**
    1.  **Diagnostiquer votre entreprise (01) :** Audit opérationnel, diagnostic de processus, analyse organisationnelle. (Bouton vers [services/diagnostiquer.html](file:///Users/shalomtalesman/Downloads/ARENA/services/diagnostiquer.html))
    2.  **Structurer votre organisation (02) :** Planification stratégique, gouvernance, rôles & responsabilités, pilotage de la performance. (Bouton vers [services/structurer.html](file:///Users/shalomtalesman/Downloads/ARENA/services/structurer.html))
    3.  **Transformer vos opérations (03) :** Gestion du changement, architecture IT cible, intégration ERP/CRM, automatisation de flux. (Bouton vers [services/transformer.html](file:///Users/shalomtalesman/Downloads/ARENA/services/transformer.html))
    4.  **Accélérer votre croissance (04) :** Optimisation de la supply chain, amélioration continue (Lean), définition et suivi des KPI. (Bouton vers [services/supply-chain-et-croissance.html](file:///Users/shalomtalesman/Downloads/ARENA/services/supply-chain-et-croissance.html))

### F. Bannière d'Appel à l'Action (CTA Middle)
*   **Titre :** `BÂTIR VOTRE CROISSANCE MAIN DANS LA MAIN`
*   **Bouton :** Demander un diagnostic (Redirection vers le formulaire de contact).

### G. Section Méthodologie (`#methodology`)
*   **Titre :** `Une méthode robuste, secteurs de prédilection.`
*   **Timeline en 4 Étapes (Design Thinking) :**
    1.  **Étape 01 - Comprendre (Empathie & Diagnostic) :** Immersion physique, entretiens, cartographie détaillée des flux.
    2.  **Étape 02 - Concevoir (Idéation & Prescription) :** Scénarios de solutions organisationnelles, technologiques et humaines adaptés au budget.
    3.  **Étape 03 - Déployer (Prototypage & Mise en œuvre) :** Installation progressive des process, développement/configuration d'outils, rédaction de documentation simplifiée.
    4.  **Étape 04 - Piloter (Test & Amélioration continue) :** Suivi des indicateurs clés sur tableau de bord d'impact et ajustements terrain.

### H. Section Métriques (`#metrics`)
*   **Chiffres clés animés :**
    *   **45+** : Diagnostics d'organisation et d'opérations terrain menés.
    *   **12** : Frictions identifiées et résolues en moyenne par mission.
    *   **14 jours** : Délai moyen entre le premier contact et la livraison du plan d'action.
    *   **98%** : Taux de satisfaction client constaté.

### I. Bandeau Défilant (Ticker)
*   **Texte en mouvement continu :** `Diagnostic terrain · Optimisation des flux · Design Thinking · Stratégie opérationnelle` (répété pour effet boucle).

### J. Section Témoignages (`#testimonials`)
*   **Titre :** `Ce que disent nos clients.`
*   **Témoignage Vedette :** Komi Agbessi, Directeur des Opérations chez *Bénin Distribution*.
    *   *« Strategy Arena a commencé par auditer notre gestion de stock. C'est ce diagnostic qui a révélé qu'une automatisation ciblée était la bonne réponse, évitant ainsi une refonte complète. Leurs automatisations nous ont fait gagner un temps précieux et éliminé les erreurs de saisie. Le ROI a été visible dès le premier mois. »*

### K. Section Tarifs (`#pricing`)
*   **Titre :** `Tarifs transparents`
*   **Sélecteur de Facturation :** Switch Mensuel / Annuel (offrant une réduction de **-20%** en annuel).
*   **Grille Tarifaire :**
    *   **Plan Diagnostic (150k FCFA/mois ou 120k FCFA/mois en annuel) :** Audit terrain complet, cartographie des frictions, feuille de route priorisée, 1 atelier de restitution.
    *   **Plan Prescription (Recommandé - 350k FCFA/mois ou 290k FCFA/mois en annuel) :** Tout le plan diagnostic, mise en œuvre des priorités, intégration d'outils simples (si nécessaire), ateliers de formation des équipes.
    *   **Plan Pilotage (600k FCFA/mois ou 490k FCFA/mois en annuel) :** Tout le plan prescription, suivi d'indicateurs sur mesure, ajustements itératifs terrain, support hebdomadaire dédié.

### L. Section FAQ (`#faq`)
*   **Questions fréquentes résolues :**
    1.  *Pourquoi un accompagnement local au Bénin ?* (Contraintes d'infrastructures internet, usage de WhatsApp, culture managériale).
    2.  *Proposez-vous toujours une solution digitale ?* (Non, parfois la réorganisation des équipes ou la simplification des process papier suffit. Le digital n'est qu'un outil parmi d'autres).
    3.  *Comment savez-vous quelle solution recommander ?* (Design thinking, étude comparative multi-scénarios en fonction du budget et de la culture de l'entreprise).
    4.  *Sous quel délai voit-on des résultats concrets ?* (Premiers résultats visibles sous 4 à 8 semaines après cadrage).
    5.  *Formez-vous nos équipes après déploiement ?* (Oui, formation sur site ou à distance, avec guides d'utilisation simplifiés pour garantir l'autonomie).

### M. Section Blog/Articles (`#articles`)
*   **Titre :** `Décryptages & Guides`
*   Cinq articles SEO et d'analyse terrain sont mis en avant (voir détails en Section 4).

### N. Pied de Page (Footer)
*   **Appel à l'Action :** `Prêt à structurer votre croissance ?` avec contact par email (`contact@strategie-arena.com`).
*   **Navigation & Informations de Contact :** Coordonnées à Cotonou (+229 01 40 78 99 21), lien WhatsApp direct, liens vers les réseaux et pages légales.
*   **Marquee Visuel :** Texte défilant `STRATEGY ARENA` séparé par des icônes SVG.

---

## 3. Détail des Pages de Services

Chaque grand service possède sa propre page détaillée pour approfondir la méthodologie et répondre aux besoins spécifiques des décideurs.

### A. Diagnostiquer votre entreprise (`services/diagnostiquer.html`)
*   **Objectif :** Comprendre l'origine réelle des frictions opérationnelles avant d'investir dans des solutions complexes.
*   **Symptômes traités :** Saisie d'information redondante, écarts d'inventaire récurrents, goulots d'étranglement invisibles.
*   **Livrables :** Cartographie complète des flux de données, rapport d'audit organisationnel détaillé, matrice de priorisation des chantiers d'amélioration.

### B. Structurer votre organisation (`services/structurer.html`)
*   **Objectif :** Aligner les compétences de l'équipe et concevoir une structure capable de soutenir la croissance de manière ordonnée.
*   **Chantiers :** Clarification des rôles (fiches de poste claires, gouvernance), mise en place de réunions d'équipes structurées, définition des flux de décision.
*   **Livrables :** Organigramme fonctionnel cible, référentiel des responsabilités (RACI), calendrier des rituels managériaux.

### C. Transformer vos opérations (`services/transformer.html`)
*   **Objectif :** Mettre en œuvre les changements organisationnels et intégrer des outils technologiques simples et adaptés aux équipes.
*   **Chantiers :** Simplification et numérisation des processus de travail, choix et paramétrage d'outils légers (CRM, bases de données collaboratives cloud), conduite du changement.
*   **Livrables :** Guide de configuration des outils déployés, supports de formation des équipes, plan d'accompagnement post-déploiement.

### D. Accélérer votre croissance / Supply Chain (`services/supply-chain-et-croissance.html`)
*   **Objectif :** Optimiser les flux physiques de marchandises et de transport pour stabiliser l'approvisionnement et réduire les coûts.
*   **Chantiers :** Audit physique des stocks en entrepôt, réorganisation de la logistique du premier au dernier kilomètre, indicateurs clés d'efficacité (KPI).
*   **Livrables :** Plan d'aménagement d'entrepôt, grille d'évaluation des prestataires logistiques, tableau de bord de suivi des délais et coûts de transport.

---

## 4. Détail des Études de Cas (Cases Studies)

Les études de cas sont documentées selon une structure rigoureuse en trois parties : Défi Opérationnel, Stratégie Recommandée, et Déploiement Terrain, avec des indicateurs de réussite précis.

### Case 1 : Bénin Distribution
*   **Secteur :** Commerce & Retail · **Durée :** 6 semaines · **Méthode :** Design Thinking
*   **Le Défi :** Écarts de stocks fréquents dus à une double saisie manuelle systématique (cahier de vente sur le terrain puis ressaisie sur ordinateur en fin de journée).
*   **La Stratégie :** Remplacement des formulaires papier par une application mobile de saisie simplifiée fonctionnant hors-ligne. Une automatisation légère met à jour la base de données de l'entrepôt dès qu'une connexion internet est détectée.
*   **Résultats Mesurés :**
    *   **15h** de travail économisées par semaine en traitement administratif.
    *   **0** rupture de stock imprévue constatée sur les 3 premiers mois d'utilisation.
    *   **100%** d'adoption du nouvel outil par les équipes de vente terrain.

### Case 2 : Sahel Foods
*   **Secteur :** Agroalimentaire · **Durée :** 5 semaines · **Méthode :** Design Thinking
*   **Le Défi :** Manque de visibilité financière sur le coût de revient réel des lots de production. Les dépenses d'achat de matières premières et de logistique étaient payées en espèces par différents collaborateurs et notées de manière informelle.
*   **La Stratégie :** Instauration d'une nomenclature standardisée de dépenses physiques (collecte papier des justificatifs) et mise en place d'un tableau de bord financier collaboratif cloud, mis à jour de façon centralisée par une unique personne formée.
*   **Résultats Mesurés :**
    *   **+8%** de marge nette récupérée en seulement 2 mois d'exploitation.
    *   **100%** de visibilité sur le coût de revient réel de chaque produit fini.
    *   **0** erreur de calcul dans les bilans hebdomadaires de production.

### Case 3 : Atlantique Logistique
*   **Secteur :** Transport & Logistique · **Durée :** 5 semaines · **Méthode :** Design Thinking
*   **Le Défi :** Retards importants au départ des livraisons de conteneurs dus à la transmission physique des ordres de mission (papier imprimé au bureau du dépôt). Perte fréquente des feuilles de route routières et communications téléphoniques floues en cours de trajet.
*   **La Stratégie :** Dématérialisation et simplification du protocole d'instruction. Mise en place d'un canal de messagerie instantanée structuré sur mobile avec messages pré-enregistrés, permettant la transmission instantanée de l'ordre de mission numérique (lisible hors-ligne) et des justificatifs officiels.
*   **Résultats Mesurés :**
    *   **5 minutes** : délai moyen de transmission d'un ordre de mission (au lieu de plusieurs heures).
    *   **98%** des livraisons de conteneurs arrivées à l'heure.
    *   **0** retard routier causé par la perte de la feuille de route papier.

---

## 5. Décryptages & Guides Pratiques (Articles SEO - Blog)

Le site propose cinq articles de fond orientés SEO pour asseoir l'expertise locale du cabinet et attirer des prospects ciblés.

### Article 1 : Comment digitaliser une PME au Bénin : Guide & erreurs à éviter
*   *Fichier :* `articles/comment-digitaliser-pme-benin.html`
*   *Thématique :* Guide Pratique
*   *Pitch :* Analyse de la digitalisation locale qui ne doit pas bêtement calquer les modèles occidentaux. Met l'accent sur l'importance des outils légers, de la formation continue et du respect de la culture managériale locale.

### Article 2 : L'impact de WhatsApp Business pour le commerce de détail à Cotonou
*   *Fichier :* `articles/whatsapp-business-retail-cotonou.html`
*   *Thématique :* Commerce & Retail
*   *Pitch :* WhatsApp étant le canal informel le plus puissant au Bénin, ce guide explique comment le structurer, l'automatiser partiellement et y intégrer un suivi client pour transformer les dispositions informelles en ventes récurrentes.

### Article 3 : Pourquoi l'audit opérationnel est indispensable avant d'acheter un logiciel
*   *Fichier :* `articles/importance-audit-operationnel.html`
*   *Thématique :* Méthodologie
*   *Pitch :* Démonstration factuelle de l'échec des projets informatiques sur étagère. Explique pourquoi cartographier ses flux réels sur le terrain prévient les investissements perdus dans des progiciels inadaptés.

### Article 4 : Comment optimiser sa chaîne logistique à Cotonou
*   *Fichier :* `articles/optimisation-logistique-cotonou.html`
*   *Thématique :* Logistique & Transport
*   *Pitch :* Analyse des goulots d'étranglement du Port Autonome de Cotonou et du transit urbain. Recommande des leviers pratiques (centralisation douanière sur Airtable, SLA transporteurs, gestion de créneaux d'entrepôt).

### Article 5 : Comment digitaliser ses opérations logistiques en Côte d'Ivoire
*   *Fichier :* `articles/digitalisation-logistique-cote-divoire.html`
*   *Thématique :* Logistique & Transport
*   *Pitch :* Analyse similaire adaptée aux flux logistiques ivoiriens, abordant la gestion des stocks déportés, la numérisation des bons de livraison et la fluidité des communications entre expéditeurs et transporteurs.

---

## 6. Mentions Légales & Informations Administratives (`mentions-legales.html`)

*   **Nom Commercial / Éditeur :** Strategy Arena
*   **Type d’Activité :** Cabinet de Conseil en Stratégie & Organisation
*   **Siège Social :** Cotonou, Bénin
*   **Adresse Email Officielle :** `contact@strategie-arena.com`
*   **Téléphone :** `+229 01 40 78 99 21`
*   **Numéro Registre du Commerce et du Crédit Mobilier (RCCM) :** `RB/ABC/25 B 1024`
*   **Date d'entrée en vigueur des conditions :** 2 juillet 2026
