import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Navigation from './components/Navigation';
import Pokemon from './components/Pages/Pokemon';

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Switch>
                    <Route exact path="/pokemon">
                        <Pokemon />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
