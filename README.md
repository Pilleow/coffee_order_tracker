# Coffee Order Tracker

The role of this web application is to help baristas track orders easily and quickly.

The application consists of 3 main pages: 
- OpenOrder.js 
- CloseOrder.js
- OrderHistory.js
---
### OpenOrder.js

This is the page responsible for **creating new orders**, usually accessed by the person receiving orders from customers. 

On the page, there is a matrix of buttons to choose from, with respective coffee icons and their names, along with the price that the customer pays. When clicked, the selected coffee is added to the "cart". At the bottom, there is a "Send" button that finalizes the offer and sends the request to the server, which creates a new coffee order. This order gets sent to `CloseOrder.js` .

### CloseOrder.js

This is the page responsible for **closing orders**, usually accessed by the person making the coffees.

On the page, there is a matrix of orders, which were created on the `OpenOrder.js` page. On every order, there is all the required information to make said order. Every order on this screen is clickable, and if clicked twice _(can be switched to only one click)_, the order is marked as closed, and gets sent to `OrderHistory.js` .

### OrderHistory.js

This is the page archiving all orders marked as closed.

On the page, there is a table of orders, with each row representing a different order and the order's information in each column.

