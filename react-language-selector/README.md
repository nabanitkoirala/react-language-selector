# Introduction

It is the language toggle button that helps to switch the language for the WebApp/Website.



# Installation

```npm install react-language-select-button```

# Usage

For use it in your app:

With React Component

```
import './styles.scss';
import LanguageSelector from 'react-language-select-button';
function App() {

  return (
    <div className="App">
      <LanguageSelector
        onClickButton1={() => console.log("first button clicked")}
        onClickButton2={() => console.log("Second button clickec")}
        buttonName2='ने'
        buttonName1="EN"
        classNameButton="test"
        selectedLanguageClassName="test2"
      />
    </div>
  );
}

export default App;
```


# Props

Common props you may want to specify include:

* onClickButton1 - function to control the output on clicking first button
* onClickButton2 - function to control the output on clicking second button
* classNameButton - Classname to change the css style for the default buttons
* selectedLanguageClassName - Classname to change the css style for selected button
* buttonName1 - Name to be provided for first button
* buttonName2 - Name to be provided for second button


Example sample Button

!['sample image button'](https://github.com/nabanitkoirala/react-language-selector/blob/master/react-language-selector/src/image/screenShot.png?raw=true)
