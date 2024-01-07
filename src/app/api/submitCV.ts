// Filename: pages/api/submitCV.ts

import type { NextApiRequest, NextApiResponse } from "next";

// Typ dla danych wejściowych, dostosuj zgodnie z potrzebami.
interface CVData {
  personalData: {
    imie: string;
    nazwisko: string;
    kontakt: {
      email: string;
      telefon: string;
    };
  };
  praca: Array<{
    firma: string;
    pozycja: string;
    okres: string;
  }>;
  edukacja: Array<{
    uczelnia: string;
    kierunek: string;
    stopien: string;
  }>;
  hobby: string[];
  skille: string[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Parsowanie i logowanie danych CV
    try {
      const data: CVData = JSON.parse(req.body);
      console.log("Odebrane dane CV:", data);

      res.status(200).json({ message: "CV pomyślnie odebrane i przetworzone" });
    } catch (error) {
      console.error("Błąd przetwarzania danych:", error);
      res
        .status(400)
        .json({ message: "Błędne żądanie: Niepoprawny format danych" });
    }
  } else {
    // Obsługa innych metod niż POST
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
