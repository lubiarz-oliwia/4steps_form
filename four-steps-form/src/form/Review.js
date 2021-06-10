import React, {useState} from 'react'


function Review({ navigation, dataForm }) {
  
    const {
        checkedState,
        bagsAmount,
        location,
        localizationSpecific,
        helpGroup
    } = dataForm;

    console.log(dataForm);

    const { go, previous } = navigation;

    return (
        <div>
            <h1>Podsumowanie Twojej darowizny</h1>
            <h2>Oddajesz:</h2>
            <p> {checkedState.map((item, index) => {
              return (
                  <li key={index}>{item}</li>
              )
          })
          }
          </p>
          <p>bags {`${bagsAmount}`}</p>
          <p>location {`${location}`}</p>
            <div>
                <button onClick={previous}>Previous</button>
                <button onClick={() => {go("submit")}}>Submit</button>
            </div>
        </div>
    )
}

export default Review
