import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.set("view engine", "pug");

app.listen(8501, () => {
  console.log("🚀 Server is running on port 8501");
});

const data = [
  "John A. Medina",
  "Florus Parenteau",
  "Martine Guérette",
  "Orlene Casgrain",
  "Ansel Gilbert",
  "Valérie Babin",
  "Romain	COSTES",
  "Octave Parenteau",
  "Talon Hétu",
  "Jean Godin",
  "Legget Duplanty",
  "Charlot Lejeune",
  "Dorene Jardine",
  "Florismart Duplanty",
  "Emmanuelle Bernard",
  "Virginie Chesnay",
  "Travers Saucier",
  "Rule Tisserand",
  "Adrienne Guilmette",
  "Auguste Jodion",
  "Dielle Bédard",
  "Vignette Sciverit",
  "Durandana Neufville",
  "Amorette Vadnais",
  "Aiglentina Vaillancourt",
];

const draw = (
  nbGroupe: number,
  nbPersonneParGroupe: number,
  listeNom: Array<string> // string[]
): Array<string[]> => {
  const names = [...listeNom];
  // 1. Initialiser un tableau de résultat vide
  const resultat: Array<string[]> = [];

  // 2. Boucler sur le nombre de groupes et de personnes par groupe
  for (let i = 0; i < nbGroupe; i++) {
    resultat[i] = [];
    for (let j = 0; j < nbPersonneParGroupe; j++) {
      // 3. Chosir quelqu'un dans la liste  --> Math.random avec listeNom length
      const index = Math.floor(Math.random() * (names.length - 1));

      // 4. Ajouter à l'équipe
      resultat[i].push(names[index]);

      // 5. Sors du tableau principale
      names.splice(index, 1);
    }
  }

  return resultat;
};

app.get("/groupes", (req: Request, res: Response) => {
  const result = draw(5, 5, data);
  res.json(result);
});
