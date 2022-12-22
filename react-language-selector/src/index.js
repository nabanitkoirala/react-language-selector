import React, { useState } from 'react';
import './styles.css';


const LanguageSelector = (props) => {
    const [selectedButton, setSelectedButton] = useState(1)

    const handleClickButton1 = (data) => {
        setSelectedButton(data)
        props.onClickButton1 && props.onClickButton1()
    }
    const handleClickButton2 = (data) => {
        setSelectedButton(data)
        props.onClickButton2 && props.onClickButton2()
    }
    console.log("These are props", props)
    return (
        <div>
            <button
                className={selectedButton === 1
                    ? `button1 ${props.classNameButton ? props.classNameButton : null} ${props.classNameSelectedLanguage
                        ? props.classNameSelectedLanguage
                        : 'selected-language'}`
                    : `button1 ${props.classNameButton ? props.classNameButton : null}`}
                onClick={() => handleClickButton1(1)}
            >
                {props.buttonName1}
            </button>
            <button
                className={selectedButton === 2
                    ? `button2 ${props.classNameButton ? props.classNameButton : null} ${props.classNameSelectedLanguage
                        ? props.classNameSelectedLanguage
                        : 'selected-language'}`
                    : `button2 ${props.classNameButton ? props.classNameButton : null}`}
                onClick={() => handleClickButton2(2)}
            >

                {props.buttonName2}
            </button>
        </div>
    )
}


export default LanguageSelector