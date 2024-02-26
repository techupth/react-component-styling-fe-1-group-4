import "./App.css";
import { Button } from "./components/Button";
import { Alert } from "./components/Alert";
import checkmark from './assets/checkmark.png';
import dangercircle from './assets/danger-circle.png';
import error from './assets/error.png';
import sad from './assets/sad.png';

const PrimaryBgColor = 'blue';
const SecondaryBgColor = '#6CB4EE';
const colorError = '#FA8072';
const colorWarning = '#FBCEB1';
const colorInfo = '#FFC72C';
const colorSuccess = '#ACE1AF';
const messageError = 'This is error box';
const messageWarning = 'This is warning alert box';
const messageInfo = 'This is info alert box';
const messageSuccess = 'This is success alert box';

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
      <Button color= {PrimaryBgColor} />
      <Button color= {SecondaryBgColor} />
    </div>
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
      <Alert img= {sad} color= {colorError} message = {messageError} />
      <Alert img= {error} color= {colorWarning} message = {messageWarning} />
      <Alert img= {dangercircle} color= {colorInfo} message = {messageInfo} />
      <Alert img= {checkmark} color= {colorSuccess} message = {messageSuccess} />
      </div>
    </div>
    
  );
}

export default App;
