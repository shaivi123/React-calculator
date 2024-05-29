import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Calculator from './componant/calculator';
// import First from './learnReactProps/first';
import Home from './components2/Home';
import { AddEmployee }  from './components2/AddEmployee';
import { EditEmployee }  from './components2/EditEmployee';
import { GlobalProvider } from './context/GlobalState';
import './stylesheet/style.css';
// import Calculator from './componant/calculator';

function App() {
  return (

    <>
    {/* <Calculator /> */}
    <GlobalProvider>
      <Router>
        <Switch>
         
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddEmployee} exact />
          <Route path="/edit/:id" component={EditEmployee} exact />
        </Switch>
      </Router>
    </GlobalProvider>
    </>
  );
}

export default App;
