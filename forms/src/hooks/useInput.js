import { useState } from 'react';

export function useInput(defaultValue, validationFn) {
    const [inputValue, setUserInputValue] = useState(defaultValue);
    const [inputTouched, setInputTouched] = useState(false);

    const isValueInvalid = validationFn(inputValue, inputTouched);

    function handleInputValue(value) {
        setUserInputValue(prev => prev = value);
        handleInputBlur();
    }
    
    function handleInputBlur() {
        setInputTouched(prev => prev = true);
    }
    
    return {
        value: inputValue,
        inputTouched: inputTouched,
        isInvalid: isValueInvalid,
        handleInputValue: handleInputValue,
        handleInputBlur: handleInputBlur
    }
}