import ControlledForm from './Form';
import FormWithAction from './FormWithAction.js';

function App() {
  return (
    <div className="App">
      <label>
        Form with React Eventhandler:
        <ControlledForm/>
      </label>
      {/* <label> Form with HTML default action:</label>
      <FormWithAction/> */}

    </div>
  );
}

export default App;
