import Counter from './components/counter/counter';
import { Fragment } from "react";
import Header from "./components/header/header";
import Auth from "./components/auth/auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/user-profile/user-profile";


function App() {
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    return (
        <Fragment>
            <Header/>
            {!isAuth && <Auth/>}
            {isAuth && <UserProfile />}
            <Counter/>
        </Fragment>
    );
}

export default App;
