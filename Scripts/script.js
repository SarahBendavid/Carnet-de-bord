function ajouterTache() {
  // Creer fonction "ajouterTache"
  let tacheUtilisateur = champUtilisateur.value;
  const li = document.createElement("li"); // Créer un <li>
  li.textContent = tacheUtilisateur;
  listeTache.appendChild(li); // Ajouter <li> dans la liste
  const btnSupprimer = document.createElement("button");
  btnSupprimer.textContent = "Supprimer";
  li.appendChild(btnSupprimer); // Ajouter le bouton au <li>
  btnSupprimer.style.marginRight = "10px";
  btnSupprimer.addEventListener("click", function () {
    li.remove();
  });
  champUtilisateur.value = ""; // Vide le champ destiné a l'utilisateur
}

btnValider.addEventListener("click", function () {
  // Lors de l'evenement "clique", execute cette ordre.
  ajouterTache(); //Appel de la fonction
});

champUtilisateur.addEventListener("keydown", (event) => {
  // Lors de l'evenemnt "appuie touche du clavier"
  if (event.key === "Enter") {
    // Si la touche appuyé du clavier est "entrer", alors execute cet ordre.
    ajouterTache();
  }
});

btnEffacer.addEventListener("click", function () {
  listeTache.innerHTML = ""; // Vide le contenu de listeTache, soit ul, donc tous les li.
});

// innerHTML est une propriété JavaScript qui représente le contenu HTML à l’intérieur de l’élément qui precede cette propriété.

btnEffacer.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    listeTache.innerHTML = "";
  }
});
