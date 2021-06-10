import React, {useState, useEffect} from 'react'

function Step1( {navigation, dataForm, setData }) {
    const giveAways = ["ubrania, które nadają się do ponownego użycia", "ubrania, do wyrzucenia", "zabawki", "książki", "inne"]
    const { next } = navigation;
    const { checkedState } = dataForm;
    
    const [error, setError] = useState("");
    
    const handleOnChange = (e) => {

        // const arrayRemove = (arr, value) => { 
        //     return arr.filter(function(ele){ 
        //         return ele != value; 
        //     });
        // }
        //console.log(checkedState);
        // var result = arrayRemove(checkedState, e.target.checked)

        if (e.target.checked) {
            setData(prevState => ({ ...prevState, checkedState: [...checkedState, e.target.value ]}));
            setError("");
          } 
          else {
              setData([]);
          }
        };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (checkedState.length === 0) {
            setError("wybierz pole");
        }
        else {
            next();
        }
    }
    
    return (
        <form>
        {giveAways.map((name, index) => {
          return (
                <div key={index}>
                  <input
                    type="checkbox"
                    name={name}
                    value={name}
                    checked={checkedState && checkedState.includes(name)}
                    onChange={handleOnChange}
                  />
                  <label>{name}</label>
                </div>
          );
        })}
        {error && <p className="error">{error}</p>}
        <button onClick={handleSubmit}>Next</button>
        </form>
    )

}

export default Step1
