import {useEffect} from "react";
import NavBar from "../components/NavBar";

function CloseOrder() {
    useEffect(() => {
        document.title = "COT : Close Order";
    }, []);
    return (
        <>
            <NavBar />
            <p>Close Order</p>
        </>
    );
}

export default CloseOrder;