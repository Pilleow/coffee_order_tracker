import {useEffect} from "react";
import GetOpenOrder from "../api/GetOpenOrder";
import {Container} from "react-bootstrap";
import NavBar from "../components/NavBar";
import './OpenOrder.css';

function OpenOrder() {
    useEffect(() => {
        document.title = "COT : Open Order";
    }, []);
    return (
        <>
            <NavBar />
            <div style={{display:"flex", alignItems: "center", height: "100vh"}}>
                <Container className="menuList">
                    <GetOpenOrder  />
                </Container>
            </div>
        </>
    );
}

export default OpenOrder;
