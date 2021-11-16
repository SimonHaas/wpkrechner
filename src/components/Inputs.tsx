import { Snapshot } from "wpk";

export default function Inputs(props: { snapshot: Snapshot; onChange: (field: string, value: string) => void; }) {
    const onSubmit = (e: any) => {
        e.preventDefault()
        localStorage.setItem("" + Date.now(), JSON.stringify(props.snapshot));
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
                            onChange={(e) => props.onChange('date', e.target.value)}
                        />
                    </div>
                    <div className="eingabeItem">
                        <label>Kontostand</label>
                        <div className="underLine"></div>
                        <input
                            type='number'
                            placeholder='Kontostand'
                            onChange={(e) => props.onChange('balance', e.target.value)}
                        />
                    </div>
                    <div className="eingabeItem">
                        <label>Depotvolumen</label>
                        <div className="underLine"></div>
                        <input
                            type='number'
                            placeholder='Depotvolumen'
                            onChange={(e) => props.onChange('volume', e.target.value)}
                        />
                    </div>
                    <div className="eingabeItem">
                        <label>Beleihungswert</label>
                        <div className="underLine"></div>
                        <input
                            type='number'
                            placeholder='Beleihungswert'
                            onChange={(e) => props.onChange('creditLine', e.target.value)}
                        />
                    </div>
                    <div className="eingabeItem">
                        <label>Sollzinssatz</label>
                        <div className="underLine"></div>
                        <input
                            type='number'
                            placeholder='Sollzinssatz'
                            onChange={(e) => props.onChange('interestRate', e.target.value)}
                        />
                    </div>
                </div>
                {/* <AssetClasses /> */}
            </div>
            <input type='submit' value='Speichern' />
        </form>
    )
}
