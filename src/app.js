import Counter from './components/counter/counter';
import { Fragment } from "react";
import Header from "./components/header/header";
import Auth from "./components/auth/auth";


function App() {
    return (
        <Fragment>
            <Header/>
            <Auth/>
            <Counter/>
        </Fragment>
    );
}

export default App;
