import { useState } from 'react'
import { Snapshot } from 'wpk'

export default function Inputs() {
    const [date, setDate] = useState<string>("")
    const [volume, setVolume] = useState<string>("")
    const [creditLine, setCreditLine] = useState<string>("")
    const [balance, setBalance] = useState<string>("")
    const [interestRate, setinterestRate] = useState<string>("")

    const onSubmit = (e: any) => {
        e.preventDefault()
        let snapshot = new Snapshot(new Date(date), +balance, +creditLine, +volume, +interestRate);
        localStorage.setItem("" + Date.now(), JSON.stringify(snapshot));
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="eingabenBox">
                <div className="essentialInputs">
                    <div className="eingabeItem">
                        <label>Datum</label>
                        <div className="underLine"></div>
                        <input
                            type='date'
                            placeholder='Datum'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className="eingabeItem">
                        <label>Kontostand</label>
                        <div className="underLine"></div>
                        <input
                            type='number'
                            placeholder='Kontostand'
                            value={balance}
                            onChange={(e) => setBalance(e.target.value)}
                        />
                    </div>
                    <div className="eingabeItem">
                        <label>Depotvolumen</label>
                        <div className="underLine"></div>
                        <input
                            type='number'
                            placeholder='Depotvolumen'
                            value={volume}
                            onChange={(e) => setVolume(e.target.value)}
                        />
                    </div>
                    <div className="eingabeItem">
                        <label>Beleihungswert</label>
                        <div className="underLine"></div>
                        <input
                            type='number'
                            placeholder='Beleihungswert'
                            value={creditLine}
                            onChange={(e) => setCreditLine(e.target.value)}
                        />
                    </div>
                    <div className="eingabeItem">
                        <label>Sollzinssatz</label>
                        <div className="underLine"></div>
                        <input
                            type='number'
                            placeholder='Sollzinssatz'
                            value={interestRate}
                            onChange={(e) => setinterestRate(e.target.value)}
                        />
                    </div>
                </div>
                {/* <AssetClasses /> */}
            </div>
            <input type='submit' value='Speichern' />
        </form>
    )
}
