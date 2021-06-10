import React, { useState } from 'react'

function Step2({ navigation, dataForm, setData }) {
    const { next, previous } = navigation;
    const bags = ["wybierz", 1, 2, 3, 4, 5]
    const [error, setError] = useState("");

    const { bagsAmount } = dataForm;

    const handleNumberChange = (e) => {
        console.log(e.target.value);
        if (e.target.value == "wybierz") {
            setError("wybierz pole");
            setData(prevState => ({ ...prevState, bagsAmount: bags[0] }));
        } else {
            setError("");
            setData(prevState => ({ ...prevState, bagsAmount: e.target.value }));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(bagsAmount);
        if (bagsAmount === "wybierz" || bagsAmount === "") {
            setError("wybierz pole");
            setData(prevState => ({ ...prevState, bagsAmount: bags[0] }));
        }
        else {
            next();
        }
    }

    return (
        <form>
            <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
            <label>Liczba 60l worków:</label>
            <select value={bagsAmount} onChange={handleNumberChange}>
                {bags.map((item, index) => {
                    return (
                        <option
                            value={item}
                        >{item}</option>
                    )
                })
                }
            </select>
            {error && <p className="error">{error}</p>}
            <button onClick={previous}>previous</button>
            <button onClick={handleSubmit}>Next</button>
        </form>
    )
}

export default Step2
