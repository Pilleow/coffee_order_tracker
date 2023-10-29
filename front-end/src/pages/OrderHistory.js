import {useEffect} from "react";
import NavBar from "../components/NavBar";

function OrderHistory() {
    useEffect(() => {
        document.title = "COT : Order History";
    }, []);
    return (
        <>
            <NavBar />
            <p>Order History</p>
        </>
    );
}

export default OrderHistory;