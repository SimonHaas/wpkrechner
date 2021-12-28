export default function SnapshotViewElement(props: { title: string, value: number }) {
    return (
        <div className="cardSimulation">
          <div className="cardNameSimulation">
            <h3>{props.title}</h3>
          </div>
          <div className="underLine"></div>
          <div className="number">{props.value}</div>
        </div>
    )
}
