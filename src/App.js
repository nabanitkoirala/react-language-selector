
import './styles.scss';
import LanguageSelector from 'react-language-select-button';
function App() {

  return (
    <div className="App">
      <LanguageSelector
        onClickButton1={() => console.log("first button clicked")}
        onClickButton2={() => console.log("Second button clickec")}
        containerClassName="container"
        classNameButton="test"
        // classNameButton2="test"
        // classNameSelectedLanguage="test3"
        buttonName2='ने'
        buttonName1="EN"
      />
    </div>
  );
}

export default App;
