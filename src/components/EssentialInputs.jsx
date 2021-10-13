import { useState } from 'react'

export default function EssentialInputs() {
    const [date, setDate] = useState('')
    const [volume, setVolume] = useState('')
    const [creditLine, setCreditLine] = useState('')
    const [balance, setBalance] = useState('')
    const [interestRate, setinterestRate] = useState('')

    const onSubmit = (e) => {
        console.log('onSubmit Funktion wird ausgeführt um den Input zu speichern.')
        console.log({date, volume, creditLine, balance, interestRate})
        e.preventDefault()
    }

    return (
        <form onSubmit={onSubmit}>
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
            <input type='submit' value='Speichern' />
        </form>
    )
}
