import React, { useState } from "react";
import FAQ from "./FAQs";
import "../styling/information.css";
import "../styling/tabelle.css";
import TabelleChancen from "./TabelleChancen";
import TabelleBanken from "./TabelleBanken";
import TabelleKennzahlen from "./TabelleKennzahlen";

export default function Information() {
  const [faqs, setfaqs] = useState([
    {
      question: "Worum handelt es sich bei diesem Tool?",
      answer:
        "Bekanntlich geht mit einer Investion immer auch ein gewisses Risiko einher und genau aus diesem Grund existiert dieses Tool. Diese Tool soll jedem ermöglichen seinen Kredit einfach und auf einen Blick im Auge behalten zu können, also folglich damit sein eigenes Risikmanagement zu führen. Des Weiteren bietet es durch Simulationen die Möglichkeit mit verschiedenen Werten und Hebeln zu Überprüfen wie der eigenen Kredit auf bestimmte Änderungen reagieren würde. ",
      open: false,
    },

    {
      question: "Was ist ein Wertpapierkredit?",
      answer:         
      "Ein Wertpapierkredit wird auch Lombardkredit genannt. Dabei handelt es sich um ein Darlehen, bei welchem Wertpapiere in dem eigenen Depot als Sicherheit dienen. Mit Hilfe dieses Darlehens können neue Wertpapiere gekauft werden.",
      open: false,
    },

    {
        question: "Chancen und Risiken",
        answer: <TabelleChancen></TabelleChancen>,
        open: false,
    },

    {
        question: "Welche Banken bieten einen WPK an und zu welchen Konditionen?",
        answer: <TabelleBanken></TabelleBanken>,
        open: false,
    },

    {
        question: "Kennzahlen und Berechnungen:",
        answer: <TabelleKennzahlen></TabelleKennzahlen>,
        open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="information-container">
      <h2 className="title">Information</h2>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}
