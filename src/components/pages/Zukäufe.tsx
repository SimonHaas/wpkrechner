import { useState } from "react";
import { Calculator, Snapshot } from "wpk";
import AssetClassesSelect from "../AssetClassSelect";

export type OptionType = { label: string, value: string }

export default function Zukäufe(props: {
  setSimulationOutput: React.Dispatch<React.SetStateAction<any>>,
  snapshot: Snapshot
}) {

  const [options] = useState<OptionType[]>(() => {
    let temp = ([{ value: '-1', label: 'keine Angabe' }])
    for (let i = 0; i < props.snapshot.getUserAssetClasses().length; i++) {
      temp = [...temp, { value: i.toString(), label: props.snapshot.getUserAssetClasses()[i].title }]
    }
    return temp
  })

  const [volume, setVolume] = useState<number>(0)

  const selectAssetClass = (index: number) => {

    console.log(index)

    // if (index == -1) {
    //   updateVolume(volume)
    // } else {
    //   let result = Calculator.siumulate(props.snapshot, { 'volume': volume, 'assetClassIndex': index }, 'handel')
    //   props.setSimulationOutput(result)
    // }
  }

  const updateVolume = (newVolume: number) => {
    setVolume(newVolume)
    let result = Calculator.siumulate(props.snapshot, { 'volume': volume }, 'handel')
    props.setSimulationOutput(result)
  }

  return (
    <div>
      <div className="containerLeft-header">
        <h3>Zukauf</h3>
      </div>
      <AssetClassesSelect options={options} selectAssetClass={selectAssetClass}></AssetClassesSelect>
      <div className="eingabeItem">
        <div className="eingabe-title">
          <label>Kaufvolumen</label>
          <div className="underLine"></div>
        </div>
        <div className="eingabe-form">
          <input
            type="number"
            placeholder="Kaufvolumen"
            min="0"
            onChange={(e) => updateVolume(+e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
