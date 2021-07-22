import React from 'react';
import './faq.scss';

const Faq = () => (
  <div className="container">
    <h1 className="main-title">FAQ</h1>
    <h2 className="sub-title">A quoi ça sert ?</h2>
    <p>Cette application permet de trouver une liste de dépôts GitHub pour un critère donné.</p>
    <h2 className="sub-title">Comment faire une recherche ?</h2>
    <p>Sur la page recherche, complétez le champ de recherche et valider la recherche.</p>
    <h2 className="sub-title">Puis-je chercher n'importe quel terme ?</h2>
    <p>Oui, c'est fou.</p>
  </div>
);

export default Faq;
