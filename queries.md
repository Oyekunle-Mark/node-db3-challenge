# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT p.ProductName, c.CategoryName
FROM Products as p
JOIN Categories as c
on p.CategoryID = c.CategoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT o.OrderID, s.ShipperID
FROM Orders as o
JOIN Shippers as s
on o.ShipperID = s.ShipperID
WHERE o.OrderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT p.ProductName, o.Quantity
FROM OrderDetails as o
JOIN Products as p
on o.ProductID = p.ProductID
where o.OrderID = 10251
order by p.ProductName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT
o.OrderID, c.CustomerName, e.LastName
FROM Orders as o
JOIN Customers as c
ON c.CustomerID = o.CustomerID
JOIN Employees as e
ON e.EmployeeID = o.EmployeeID

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
