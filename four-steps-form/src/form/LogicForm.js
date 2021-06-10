import React, { useState } from 'react'
import { useForm, useStep } from "react-hooks-helper";
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Review from './Review';

const steps = [
    { id: "step1" },
    { id: "step2" },
    { id: "step3" },
    { id: "review" },
];

const defaultData = {
    checkedState: [],
    bagsAmount: '',
    location: '',
    localizationSpecific: '',
    helpGroup: '',
}

function LogicForm() {
    const { step, navigation } = useStep({ initialStep: 0, steps });
    const { id } = step;

    const [dataForm, setData] = useState(defaultData);

    const props = { navigation, dataForm, setData };

    switch (id) {
        case "step1":
            return <Step1 {...props} />;
        case "step2":
            return <Step2 {...props} />;
        case "step3":
            return <Step3 {...props} />;
        case "review":
            return <Review {...props} />;
        default:
            return null;
    }
}

export default LogicForm
