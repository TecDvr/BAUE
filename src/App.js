import { Route } from 'react-router-dom';
import Login from './views/login/Login.js'
import "./styles/Global.css"

function App() {
  return (
    <div className="container">
      <Route 
        exact
        path='/'
        component={Login}
      />
    </div>
  );
}

export default App;
