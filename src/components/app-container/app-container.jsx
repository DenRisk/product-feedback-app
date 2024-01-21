import styles from './app-container.module.scss'
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchUser} from "../../store/userSlice.js";
import {fetchProductRequests} from "../../store/productRequestsSlice.js";

export default function AppContainer({children}) {
    const dispatch = useDispatch();

    // fetch initial user data
    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    // fetch initial product requests
    useEffect(() => {
        dispatch(fetchProductRequests());
    }, [dispatch]);


    return (
        <main className={`content-grid ${styles.appContainer}`}>
            {children}
        </main>
    )
}