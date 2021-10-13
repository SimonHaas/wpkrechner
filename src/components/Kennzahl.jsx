export default function Kennzahl({ title, value }) {
    return (
        <div className="eingabeItem">
            <h4>{title}</h4>
            <div className="underLine"></div>
            <p>{value}</p>
        </div>
    )
}
