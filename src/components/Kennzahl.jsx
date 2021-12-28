export default function Kennzahl({ title, value, description }) {
    return (
        <div className="kennzahl" title={description}>
            <h4>{title}</h4>
            <p>{value}</p>
        </div>
    )
}
