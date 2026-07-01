---
name: Strategy Arena
description: Cabinet de Conseil en Stratégie & Organisation · Afrique de l'Ouest
colors:
  primary: "#F4E723"
  primary-hover: "#dbce16"
  primary-dark: "#0F100F"
  bg-dark: "#080808"
  bg-light: "#FAFAFA"
  text-dark: "#0F100F"
  text-light: "#FFFFFF"
  border-light: "rgba(15, 16, 15, 0.08)"
  border-dark: "rgba(244, 231, 35, 0.2)"
typography:
  display:
    fontFamily: "Anton, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Whyte Inktrap, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 300
    lineHeight: 1.6
rounded:
  sm: "12px"
  md: "12px"
  lg: "32px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  button-pill:
    backgroundColor: "transparent"
    textColor: "{colors.text-light}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-dark}"
    rounded: "{rounded.lg}"
    padding: "16px 32px"
---

# Design System: Strategy Arena

## 1. Overview

**Creative North Star: "The Local Sentinel"**

Le système de design de Strategy Arena combine une esthétique éditoriale à haute densité et un minimalisme rigoureux. Inspiré par les réalités du terrain ouest-africain, il rejette la fluidité molle ou les dégradés technologiques génériques pour adopter des angles francs, des contrastes radicaux (Jaune Canari sur Noir Profond) et une typographie grotesque et expressive.

**Key Characteristics:**
- Alternance rythmée de sections sombres (`#080808`) et claires (`#FAFAFA`).
- Typographie percutante qui structure l'espace sans fioritures décoratives.
- Interactions nettes et fluides avec de subtiles micro-animations.

---

## 2. Colors

Le schéma de couleurs repose sur la rareté et l'impact visuel de l'accent primaire.

### Primary
- **Canary Yellow** (`#F4E723` / `oklch(88.45% 0.198 94.75)`): Utilisé uniquement sur les boutons d'appel à l'action principaux, les indicateurs clés et de discrets éléments actifs. 

### Neutral
- **Pitch Black** (`#080808`): La toile de fond pour toutes les sections sombres, le preloader et l'overlay du menu.
- **Deep Dark Ink** (`#0F100F`): Le texte de labeur sur fond clair et les éléments d'accentuation textuelle neutre.
- **Crisp Off-White** (`#FAFAFA`): La couleur d'arrière-plan par défaut des sections claires pour maximiser la lisibilité.
- **Muted Dark Text** (`#555856`): Utilisé pour le texte secondaire et de moindre priorité sur fond clair.
- **Muted Light Text** (`#A5A8A6`): Utilisé pour le texte secondaire sur fond sombre.

### Named Rules
**The 10% Yellow Rule.** Le Jaune Canari ne doit jamais saturer l'écran. Il est réservé à l'accentuation active. Son efficacité provient de sa rareté sur la page.
**The Strict Border Contrast Rule.** Pas de bordures purement décoratives. Les bordures utilisent des opacités contrôlées (`rgba(15, 16, 15, 0.08)` sur fond clair, `rgba(244, 231, 35, 0.2)` ou `rgba(255, 255, 255, 0.08)` sur fond sombre) pour rester extrêmement subtiles.

---

## 3. Typography

**Display Font:** Anton (sans-serif)
**Body Font:** Whyte Inktrap (sans-serif)

La combinaison d'Anton (ultra-condensé et percutant) et de Whyte Inktrap (avec ses inktraps techniques et modernes) confère au site son caractère éditorial brut et premium.

### Hierarchy
- **Display** (`Anton`, `clamp(2.5rem, 5vw, 4.5rem)`, `1.1`): Titres de section et héro principal. Toujours en majuscules avec un espacement serré (`-0.02em`).
- **Headline** (`Anton`, `1.8rem`, `1.2`): Sous-titres importants et en-têtes de cartes. Majuscules systématiques.
- **Body** (`Whyte Inktrap`, `1.05rem` ou `18px`, `1.6`): Texte courant. Longueur de ligne limitée à `70ch` pour garantir le confort de lecture.
- **Label** (`Whyte Inktrap`, `0.9rem` ou `14px`, `1.4`): Métadonnées, boutons, étiquettes. Souvent en majuscules avec un léger espacement (`0.05em`).

---

## 4. Elevation

Le système rejette l'utilisation de ombres portées douces pour simuler la profondeur. Il utilise une esthétique résolument plate ("flat") basée sur la superposition de couches de couleur et des contours de bordures discrets.

### Named Rules
**The Zero Shadow Rule.** Pas d'ombres portées sur les boutons, cartes ou conteneurs. La profondeur et la hiérarchie sont créées uniquement par le contraste des fonds (`#FFFFFF` sur fond `#FAFAFA`, ou transparence sombre sur fond noir) et l'utilisation de bordures minimales.

---

## 5. Components

### Buttons
- **Shape:** Entièrement arrondi en pilule (`border-radius: 32px`) pour les boutons secondaires, ou bords légèrement adoucis (`border-radius: 12px`).
- **Pill Button** (`.btn-pill`): Bordure fine neutre (`1px solid`), texte blanc/noir selon la section, transition de couleur au survol.
- **Primary CTA** (`.cta-banner-btn`): Fond Jaune Canari, texte sombre, flèche rotative SVG, transition sur le déplacement vertical.

### Cards
- **Corner Style:** Bords adoucis (`border-radius: 12px`).
- **Service Card** (`.service-card`): Bloc gauche coloré pour l'icône, bloc droit blanc pour le contenu typographique. Border minimal de `1px` pour structurer.

### FAQ Accordion
- **Style:** Éléments de liste FAQ avec bouton de question déclenchant le panneau de réponse. L'icône change de `plus` à `minus`.

---

## 6. Do's and Don'ts

### Do:
- **Do** utiliser `text-wrap: balance` pour équilibrer les titres display multi-lignes.
- **Do** privilégier Whyte Inktrap pour toute portion de texte prose longue afin de conserver la cohérence typographique.
- **Do** vérifier le contraste de tout texte posé sur fond Jaune Canari (utiliser impérativement un texte sombre comme `#0F100F`).

### Don't:
- **Don't** ajouter des ombres portées adoucies décoratives sur les cartes ou les boutons.
- **Don't** utiliser des dégradés de couleurs pour les arrière-plans ou sur les textes.
- **Don't** utiliser de couleur autre que le Jaune Canari (`#F4E723`) comme accent. Le bleu, vert ou rouge vif sont strictement proscrits.
