export default function Rechner() {
    return (
        <div>
            <div className="eingabenBox">
                <h3>Eingaben</h3>
                <div className="eingabeItem">
                    <h4>Datum</h4>
                    <div className="underLine"></div>
                    <form className="form" id="eingabe">
                        {/* <input type="date" id="datum"> */}
                    </form>
                </div>
                <div className="eingabeItem">
                    <h4>Kontostand</h4>
                    <div className="underLine"></div>
                    <form className="form" id="eingabe">
                        {/* <input type="text" id="kontostand"> */}
                    </form>
                </div>
                <div className="eingabeItem">
                    <h4>Depotvolumen</h4>
                    <div className="underLine"></div>
                    <form className="form" id="eingabe">
                        {/* <input type="text" id="depotvolumen"> */}
                    </form>
                </div>
                <div className="eingabeItem">
                    <h4>Beleihungswert</h4>
                    <div className="underLine"></div>
                    <form className="form" id="eingabe">
                        {/* <input type="text" id="beleihungswert"> */}
                    </form>
                </div>
                <div className="eingabeItem">
                    <h4>Sollzinssatz</h4>
                    <div className="underLine"></div>
                    <form className="form" id="eingabe">
                        {/* <input type="text" id="sollzinssatz"> */}
                    </form>
                </div>
                <div className="anlageklasse">
                    <h5>Anlageklassen</h5>
                </div>
                <div className="saveButton">
                    <h5>Speichern</h5>
                </div>
            </div>
            <div className="kennzahlenBox">
                <div className="">
                </div>
                <span>
                    <h3>Kennzahlen</h3>
                </span>
                <span>
                    <h4>Datum</h4>
                </span>
                <span>
                    <h5>Sollzinssatz</h5>
                </span>
                <span>
                    <h5>Kontostand</h5>
                </span>
                <span>
                    <h5>Depotvolumen</h5>
                </span>
                <span>
                    <h5>Beleihungswert</h5>
                </span>
            </div>
        </div>
    )
}
