import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import routes from "./routes";
import Home from "./components/pages/Home";
import Curso from "./components/pages/Curso";


export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        {Object.getOwnPropertyNames(routes).map(pName => {
                            return (
                                <li>
                                    <Link to={routes[pName].route}>{routes[pName].text}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>


                <Switch>
                    <Route path={routes.quemSomos.route}><About/></Route>
                    <Route path={routes.curso.route}><Curso/></Route>
                    <Route path={routes.home.route}><Home/></Route>
                </Switch>
            </div>
        </Router>
    );
}



function About() {
    return <h2>About</h2>;
}

