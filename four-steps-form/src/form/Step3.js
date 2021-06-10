import React, { useState } from 'react'

function Step3({ navigation, dataForm, setData }) {
    const { next, previous } = navigation;
    const locations = ["wybierz", "Poznań", "Warszawa", "Kraków", "Wrocław", "Katowice"]
    const helpGroups = ["dzieciom", "samotnym matkom", "bezdomnym", "niepełnosprawnym", "osobom starszym"]
    const [error, setError] = useState("");

    const { location, localizationSpecific, helpGroup } = dataForm;

    const handleLocationChange = (e) => {
        console.log(e.target.value)
        if (e.target.value == "wybierz") {
            setError("wybierz pole");
            setData(prevState => ({ ...prevState, location: locations[0] }));
        } else {
            setError("");
            setData(prevState => ({ ...prevState, location: e.target.value }));
        }
    }

    const handleHelpGroupsChange = (e) => {
        setData(prevState => ({...prevState, helpGroup: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        if (location === "wybierz" || location === "") {
            setError("wybierz pole");
            setData(prevState => ({ ...prevState, location: locations[0] }));
        }
        if ( helpGroup === "") {
            setError("wybierz pole");
            setData(prevState => ({ ...prevState, helpGroup: "" }));
        }
        else {
            next();
        }
    }

    return (
        <form>
            <h1>Lokalizacja</h1>
            <select value={location} onChange={handleLocationChange}>
                {locations.map((item, index) => {
                    return (
                        <option
                            value={item}
                        >{item}</option>
                    )
                })
                }
            </select>
            {error && <p className="error">{error}</p>}
            <div className="radio_box" >
                {helpGroups.map((name, index) => {
                    return (
                        <>
                            <input
                                type="radio"
                                name={`option${index + 1}`}
                                value={name}
                                checked={helpGroup === name}
                                onChange={handleHelpGroupsChange}
                            />
                            <label>{name}</label>
                        </>
                    );
                })}
                {error && <p className="error">{error}</p>}
            </div>
            <div className="optional_field">
                <label>Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
                <input
                    type="text"
                    name="localizationSpecific"
                    value={localizationSpecific}
                    onChange={setData}
                />
            </div>
            <button onClick={previous}>previous</button>
            <button onClick={handleSubmit}>Next</button>
        </form>
    )
}

export default Step3
