
import './styles.scss';
import LanguageSelector from 'react-language-button';
function App() {
  return (
    <div className="App">
      <LanguageSelector
        onClickButton1={() => console.log("first button clicked")}
        onClickButton2={() => console.log("Second button clickec")}
        // classNameButton="test"
        // classNameSelectedLanguage="test3"
        buttonName2='ने'
        buttonName1="EN"
      />
    </div>
  );
}

export default App;
