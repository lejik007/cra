import Header from './components/Header';
import Title from './common/Title';
import Begin from './common/Title/Begin';
import {Switch, Route} from "react-router";
import { Link } from 'react-router-dom'

const Main = function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/src/components' component={<App/>}/>
                <Route path='/src/components/common/Title' component={<Title/>}/>
                <Route path='/src/components/common/Title/Begin' component={<Begin/>}/>
            </Switch>
        </main>
    );
}

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header/>
            </header>
            <main className="App-main">
                <Main/>
            </main>
        </div>
    );
}
