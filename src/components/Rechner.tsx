import { useState } from "react";
import Kennzahlen from "./Kennzahlen";
import Inputs from "./Inputs";
import { Snapshot } from "wpk";

export default function Rechner() {
  const [snapshot, setSnapshot] = useState<Snapshot>(
    new Snapshot(new Date(), 0, 0, 0, 0)
  );

  const saveSnapshot = (e: any) => {
    e.preventDefault();
    localStorage.setItem("" + Date.now(), JSON.stringify(snapshot));
  };

  const updateSnapshot = (field: string, value: string) => {
    let newSnapshot = Snapshot.fromJson(JSON.stringify(snapshot))
    switch (field) {
      case 'date':
        newSnapshot.date = new Date(value)
        setSnapshot(newSnapshot)
        break
      case 'volume':
        newSnapshot.volume = +value
        setSnapshot(newSnapshot)
        break
      case 'creditLine':
        newSnapshot.creditLine = +value
        setSnapshot(newSnapshot)
        break
      case 'balance':
        newSnapshot.balance = +value
        setSnapshot(newSnapshot)
        break
      case 'interestRate':
        newSnapshot.interestRate = +value
        setSnapshot(newSnapshot)
        break
    }
    console.log('updateSnapshot', JSON.stringify(newSnapshot))
  }

  return (
    <div className="mainPage-rechner">
      <Inputs onSubmit={saveSnapshot} onChange={updateSnapshot} />
      <Kennzahlen snapshot={snapshot} />
    </div>
  );
}
