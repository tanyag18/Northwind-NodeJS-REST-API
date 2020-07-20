const express = require("express")
const mysqlConnection =require('../connection')
const Router = express.Router()

Router.get("/",(req,res) => {
    mysqlConnection.query('SElECT * FROM products', (err,rows,fields) => {
        if(err) return err
            res.send(rows)
    })
})

//Select a product using ProductID
Router.get("/:id",(req,res) => {
    mysqlConnection.query('SElECT * FROM PRODUCTS WHERE ProductID=?',[req.params.id], (err,rows,fields) => {
        if(err) return err

        if(rows!=0)
        res.send(rows)
        else
        res.status(400).send("No Such Product exists")
    })
})

//Delete a product
Router.delete("/:id",(req,res) => {
    mysqlConnection.query('SElECT * FROM products WHERE ProductID=?',[req.params.id], (err,rows,fields) => {
        if(err) return err
        if(rows!=0){
            mysqlConnection.query('DELETE FROM products WHERE ProductID=?',[req.params.id], (err,rows,fields) => {
                res.send('Deleted Successfully')
            })
        }
        else
        res.status(400).send("No Such Product exists for deletion")
    })
})

//Insert a product
Router.post("/",(req,res) => {
    let pro = req.body
    var sql = "SET @ProductID = ?; SET @ProductName = ?; SET @SupplierID = ?; SET @CategoryID = ?; SET @QuantityPerUnit = ?; SET @UnitPrice = ?; SET @UnitInStock = ?; SET @UnitsOnOrder = ?; SET @ReorderLevel = ?; SET @Discontinued = ?;\
    CALL ProductAddOrEdit(@ProductID,@ProductName,@SupplierID,@CategoryID,@QuantityPerUnit,@UnitPrice,@UnitInStock,@UnitsOnOrder,@ReorderLevel,@Discontinued);";
    mysqlConnection.query(sql,[pro.ProductID,pro.ProductName,pro.SupplierID,pro.CategoryID,pro.QuantityPerUnit,pro.UnitPrice,pro.UnitInStock,pro.UnitsOnOrder,pro.ReorderLevel,pro.Discontinued], (err,rows,fields) => {
        if (!err)
            rows.forEach(element => {
                if(element.constructor == Array)
                res.send('Inserted Product with ID: '+ element[0].ProductID);
            });
        else
            console.log(err);
    })
})

//Router to update product data
Router.put("/",(req,res) => {
    let pro = req.body
    var sql = "SET @ProductID = ?; SET @ProductName = ?; SET @SupplierID = ?; SET @CategoryID = ?; SET @QuantityPerUnit = ?; SET @UnitPrice = ?; SET @UnitInStock = ?; SET @UnitsOnOrder = ?; SET @ReorderLevel = ?; SET @Discontinued = ?;\
    CALL ProductAddOrEdit(@ProductID,@ProductName,@SupplierID,@CategoryID,@QuantityPerUnit,@UnitPrice,@UnitInStock,@UnitsOnOrder,@ReorderLevel,@Discontinued);";
    mysqlConnection.query(sql,[pro.ProductID,pro.ProductName,pro.SupplierID,pro.CategoryID,pro.QuantityPerUnit,pro.UnitPrice,pro.UnitInStock,pro.UnitsOnOrder,pro.ReorderLevel,pro.Discontinued], (err,rows,fields) => {
        if(err) return err
        res.send('Product Updated')
    })
})


module.exports=Router