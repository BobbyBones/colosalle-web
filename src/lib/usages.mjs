export const USAGES = [
  {
    slug: "studio-danse-paris",
    nomCourt: "Studios de danse",
    h1: "Studios de danse à louer à l'heure à Paris",
    titre: "Studio de danse à louer à l'heure à Paris | Colosalle",
    accroche: "Miroirs, sol adapté, hauteur sous plafond — à l'heure, sans adhésion.",
    chapo:
      "Miroirs, sol adapté, hauteur sous plafond : des studios parisiens réservables à l'heure, sans adhésion annuelle ni engagement au trimestre.",
    filtre: (v) => v.type === "studio" || v.equipments.some((e) => e.id === "miroirs"),
    sections: [
      {
        h2: "Ce qu'il faut vérifier",
        p: [
          "Le sol passe avant la surface : un parquet sur lambourdes amortit les réceptions, une dalle béton renvoie le choc dans les chevilles. Pour le classique et le contemporain, demandez s'il y a un tapis de danse et dans quel état il est.",
          "Comptez trois mètres sous plafond dès qu'il y a des portés ou des sauts, un mur entier de miroirs plutôt que des panneaux séparés, et une vraie ventilation — un studio qui n'aère pas devient irrespirable en vingt minutes.",
        ],
      },
    ],
  },
  {
    slug: "salle-pour-casting-paris",
    nomCourt: "Salles pour casting",
    h1: "Salles pour casting et auditions à Paris",
    titre: "Salle pour casting à louer à l'heure à Paris | Colosalle",
    accroche: "Des espaces calmes et neutres, à l'heure ou à la demi-journée.",
    chapo:
      "Des espaces calmes et neutres, à l'heure ou à la demi-journée, pour faire passer des essais sans transformer son salon en studio.",
    filtre: (v) => v.capacity > 0 && v.capacity <= 30,
    sections: [
      {
        h2: "Ce qu'il faut vérifier",
        p: [
          "Le calme d'abord : une salle sur boulevard rend les prises inexploitables, le bruit de fond ressort sur chaque bande. Demandez si la pièce donne sur cour, et ce qui se passe à l'étage au-dessus.",
          "Prévoyez ensuite un pan de mur uni pour le fond, des fenêtres plutôt au nord pour une lumière qui ne change pas en cours de journée, des prises accessibles, et un coin où patientent les candidats.",
          "Côté durée, comptez dix à quinze minutes par comédien plus une demi-heure d'installation : au-delà de dix candidats, la demi-journée revient moins cher que l'heure.",
        ],
      },
    ],
  },
  {
    slug: "salle-italienne-paris",
    nomCourt: "Salles à l'italienne",
    h1: "Salles à l'italienne et théâtres à louer à Paris",
    titre: "Salle à l'italienne à louer à Paris | Colosalle",
    accroche: "Scène frontale, gradins, rideaux et régie — pour une italienne, un filage ou une générale.",
    chapo:
      "Scène frontale, gradins, rideaux et régie : des théâtres parisiens disponibles à l'heure pour une italienne, un filage ou une générale.",
    filtre: (v) => v.type === "theatre",
    sections: [
      {
        h2: "Choisir selon l'étape de travail",
        p: [
          "Une salle à l'italienne, c'est un rapport frontal : public en gradins face au plateau, cadre de scène et rideau. C'est la configuration dans laquelle la majorité du répertoire a été écrite — et un spectacle réglé en black box s'y redécoupe entièrement.",
          "Une italienne, texte dit assis, ne demande ni lumière ni son : une salle nue suffit et c'est le créneau le moins cher. Un filage demande les bonnes dimensions de plateau et des coulisses. Une générale suppose une régie, et quelqu'un pour la faire tourner.",
        ],
      },
    ],
  },
];
