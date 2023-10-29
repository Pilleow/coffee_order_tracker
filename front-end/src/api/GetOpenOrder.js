import {Card} from "react-bootstrap";

function GetOpenOrder() {
    const usedCurrency = "PLN";
    const currencyConverter = 1.0;
    const ordersAvailable = [
        {name: "Ristretto", price: 3.99},
        {name: "Espresso Solo", price: 3.99},
        {name: "Espresso Doppio", price: 4.99},
        {name: "Cortado", price: 7.99},
        {name: "Cappuccino", price: 9.99},
        {name: "Mocha", price: 9.99},
        {name: "Latte", price: 11.99},
        {name: "Latte Macchiato", price: 11.99},
        {name: "Iced Latte", price: 11.99}
    ];
    let selectedOrders = [];
    const addOrder = (name) => {
        selectedOrders.push(name);
        console.log(selectedOrders);
    };
    const removeOrder = (name) => {
        selectedOrders.splice(selectedOrders.indexOf(name),1);
        console.log(selectedOrders);
    }

    let i = 0;
    return (
        <>
            {ordersAvailable.map(order => (
                <Card key={i++} className="menuItem">
                    <Card.Body onClick={()=>{addOrder(order.name)}}>
                        <Card.Title>{order.name}</Card.Title>
                        <Card.Subtitle>{order.price * currencyConverter} {usedCurrency}</Card.Subtitle>
                    </Card.Body>
                    <Card.Footer onClick={()=>{removeOrder(order.name)}}>Remove</Card.Footer>
                </Card>
            ))}
        </>
    );
}

export default GetOpenOrder;
