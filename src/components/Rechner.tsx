import { useState } from 'react'
import Kennzahlen from "./Kennzahlen";
import Inputs from "./Inputs";
import { Snapshot } from 'wpk'

export default function Rechner() {
    const [snapshot, setSnapshot] = useState<Snapshot>(new Snapshot(new Date(),0,0,0,0))

    const updateSnapshot = (field: string, value: string) => {
        let newSnapshot: Snapshot = Object.create(snapshot)
        switch(field) {
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
        console.log('updateSnapshot', {field, value})
    }

    return (
        <div>
            <Inputs snapshot={snapshot} onChange={updateSnapshot} />
            <Kennzahlen snapshot={snapshot} />
        </div>
    )
}
