
import './styles.scss';
import LanguageSelector from './LanguageSelector';
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
