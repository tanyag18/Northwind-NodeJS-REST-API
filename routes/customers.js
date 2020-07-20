const express = require("express")
const mysqlConnection =require('../connection')
const Router = express.Router()

Router.get("/",(req,res) => {
    mysqlConnection.query('SElECT * FROM customers', (err,rows,fields) => {
        if(err) return err
            res.send(rows)
    })
})



//select a Customer using CustomerID
Router.get("/:id",(req,res) => {
    mysqlConnection.query('SElECT * FROM customers WHERE CustomerID=?',[req.params.id], (err,rows,fields) => {
        if(err) return err

        if(rows!=0)
        res.send(rows)
        else
        res.status(400).send("No Such Customer exists")
    })
})

//delete a customer
Router.delete("/:id",(req,res) => {
    mysqlConnection.query('SElECT * FROM customers WHERE CustomerID=?',[req.params.id], (err,rows,fields) => {
        if(err) return err
        if(rows!=0){
            mysqlConnection.query('DELETE FROM customers WHERE CustomerID=?',[req.params.id], (err,rows,fields) => {
                res.send('Deleted Successfully')
            })
        }
        else
        res.status(400).send("No Such Customer exists for deletion")
    })
})

//Insert a customer
Router.post("/",(req,res) => {
    let Cus = req.body
    var sql = "SET @CustomerID=?;SET @CompanyName=?;SET @ContactName=?; SET @ContactTitle=?; SET @Address=?; SET @City=?; SET @Region=?; SET @PostalCode =?; SET @Country=?; SET @Phone =?; SET @Fax=?; \
    CALL CustomerAddOrEdit(@CustomerID,@CompanyName,@ContactName,@ContactTitle,@Address,@City,@Region,@PostalCode,@Country,@Phone,@Fax);";
    mysqlConnection.query(sql,[Cus.CustomerID, Cus.CompanyName, Cus.ContactName, Cus.ContactTitle, Cus.Address, Cus.City, Cus.Region, Cus.PostalCode, Cus.Country, Cus.Phone, Cus.Fax], (err,rows,fields) => {
        if(err) return err
        res.send('Inserted New Customer Successfully')
    })
})

// Update customer record
Router.put("/",(req,res) => {
    let Cus = req.body
    var sql = "SET @CustomerID=?;SET @CompanyName=?;SET @ContactName=?; SET @ContactTitle=?; SET @Address=?; SET @City=?; SET @Region=?; SET @PostalCode =?; SET @Country=?; SET @Phone =?; SET @Fax=?; \
    CALL CustomerAddOrEdit(@CustomerID,@CompanyName,@ContactName,@ContactTitle,@Address,@City,@Region,@PostalCode,@Country,@Phone,@Fax);";
    mysqlConnection.query(sql,[Cus.CustomerID, Cus.CompanyName, Cus.ContactName, Cus.ContactTitle, Cus.Address, Cus.City, Cus.Region, Cus.PostalCode, Cus.Country, Cus.Phone, Cus.Fax], (err,rows,fields) => {
        if(err) return err
        res.send('Updated Customer Data')
    })
})


//Order History of the customer
Router.get("/orderhistory/:id",(req,res) => {
    mysqlConnection.query('SELECT Orders.OrderID , CustomerID , OrderDate , ProductID , UnitPrice*Quantity-Discount AS Price FROM Orders \
    INNER JOIN orderdetails ON Orders.OrderID=orderdetails.OrderID where CustomerID =? order by OrderDate',[req.params.id], (err,rows,fields) => {
        if(err) return err
            res.send(rows)
    })
})

/*SELECT *
FROM Orders
INNER JOIN orderdetails ON Orders.OrderID=orderdetails.OrderID
where CustomerID = "VINET"
order by OrderDate;*/

module.exports=Router