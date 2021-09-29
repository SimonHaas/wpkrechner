import Calculator from "../calculator/Calculator"

export default function Information() {

    let test = new Calculator(123)

    console.log(test.value)
    console.log(Calculator.title)

    return (
        <div>
            <p>Information</p>
        </div>
    )
}
