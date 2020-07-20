# Node JS REST API for Northwind Database using MySql

![](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJtipGOfb5UGZKszdU3FGOCyFkkgMbkX95ew&usqp=CAU)

A simple API that uses HTTP requests to perform basic CRUD operations on Northwind Database using NodeJS and MySQL for storing the data.


> Northwind Database -  The Northwind database is a sample database used by Microsoft to demonstrate the features of some of its products, including SQL Server and Microsoft Access. The database contains the sales data for Northwind Traders, a fictitious specialty foods exportimport company


##  Features

  - Uses Latest JavaScript and Express features
  - Effecient Error Handling
  - Basic Interface and database connectivity


##  Functions 

  - Insert , Update and Select on Customers
  - Insert , Update and Select on Products
  - Order History of a Customer


###  Creating Database

 You can download the northwind files and load it directly to create a schema in MySql or use the following files
 * Create Tables -  [Tables.sql]()
 * Insert Data to Tables - [Data Insertion.sql]()
 * Create Stored Procedures - [Stored Procedures.sql]()
 

###  Installation

Download the API Folder and Open it in any editor like Visual Studio .
Navigate to the folder and install the dependencies and devDependencies to start the server using

```sh
$ npm install
```

This will load the  `node_modules` folder and the API will be ready to use.
In `connection.js` replace the Database name and Connection details with your own Credentials from MySql 

```
var mysqlConnection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '******',
    database : 'northwind' ,
    multipleStatements : true
})
```


To start the server, use

```sh
$ nodemon server.js
```

 >To quickly and easily send REST requests you can use Postman and monitor the changes made in database as well.
 
&nbsp;
###  CRUD Operations on Customer 
&nbsp;
 #### 1.Get Router to fetch complete list of Customers
 Select GET from the drop-down list and type in the below URL:
 ```
 http://localhost:30000/Customer
```
It will display you the complete list of Customer Details from the database in the response section.

 #### 2.Get Router to **SELECT** a particular Customer from the list
 Select GET from the drop-down list and type in the below URL:
 ```
 http://localhost:30000/Customer/id
```
It will display you the data of Customer with CustomerID :`id` from the database in the response section if present.

 #### 3.Delete Router to **DELETE** a particular Customer from the list
 Select DELETE from the drop-down list and type in the below URL:
 ```
 http://localhost:30000/Customer/id
```
It will delete the data of Customer with CustomerID :`id` from the database in the response section if present.

#### 4.POST Router to **INSERT** a Customer in the database
 Select POST from the drop-down list and type in the below URL:
 ```
 http://localhost:30000/Customer
```
Moving further,  enter Customer details in the body section (Select Raw JSON data)
```
{
"CustomerID" : "Azada",
"CompanyName" : "Data Mart",
"ContactName" : "Mark Thud",
"ContactTitle" : "Owner",
"Address" : "71 Pem Street",
"City" : "Warszawa",
"Region" : "",
"PostalCode" : "01-912",
"Country" : "Australia",
"Phone" : "(41) 642-7012",
"Fax" : "(41) 642-7999"
}
```
(Make sure you have created the stored procedure `CustomerAddOrEdit`)
It will insert a customer with the above details into the database.

#### 5.PUT Router to **UPDATE** a Customer in the database
 Select POST from the drop-down list and type in the below URL:
 ```
 http://localhost:30000/Customer
```
Moving further,  enter Customer details in the body section (Select Raw JSON data)
- Change company name 
```
{
"CustomerID" : "Azada",
"CompanyName" : "DataGrokr",
"ContactName" : "Mark Thud",
"ContactTitle" : "Owner",
"Address" : "71 Pem Street",
"City" : "Warszawa",
"Region" : "",
"PostalCode" : "01-912",
"Country" : "Australia",
"Phone" : "(41) 642-7012",
"Fax" : "(41) 642-7999"
}
```
Now if you go back to your MySQL workbench and do a refresh, you will see the particular record has been updated.

 -------------------------------------- 

### CRUD Operations on Products
&nbsp;
 ####  1.Get Router to fetch complete list of Products
 Select GET from the drop-down list and type in the below URL:
 ```
 http://localhost:30000/Product
```
It will display you the complete list of Product Details from the database in the response section.

 #### 2.Get Router to **SELECT** a particular Product from the list
 Select GET from the drop-down list and type in the below URL:
 ```
 http://localhost:30000/Product/id
```
It will display you the data of Product with ProductID :`id` from the database in the response section if present.

 #### 3.Delete Router to **DELETE** a particular Product from the list
 Select DELETE from the drop-down list and type in the below URL:
 ```
 http://localhost:30000/Product/id
```
It will display you the data of Product with ProductID :`id` from the database in the response section if present otherwise it will send `400 Bad Request` error.

#### 4.POST Router to **INSERT** a Product in the database
 Select POST from the drop-down list and type in the below URL:
 ```
 http://localhost:30000/Product
```
Moving further,  enter Customer details in the body section (Select Raw JSON data)
```
{
"ProductID" : 78 ,
"ProductName" : "Chaihung",
"SupplierID" : 1 ,
"CategoryID" : 1 ,
"QuantityPerUnit" : "10 boxes x 20 bags",
"UnitPrice" : 18,
"UnitInStock" : 39,
"UnitsOnOrder" : 0,
"ReorderLevel" : 10
}
```
(Make sure you have created the stored procedure `ProductAddOrEdit`)
It will insert a product with the above details into the database.

#### 5.PUT Router to **UPDATE** a Product in the database
 Select POST from the drop-down list and type in the below URL:
 ```
 http://localhost:30000/Product
```
Moving further,  enter Customer details in the body section (Select Raw JSON data)
- Change Product name 
```
{
"ProductID" : 78 ,
"ProductName" : "Salaviloi",
"SupplierID" : 1 ,
"CategoryID" : 1 ,
"QuantityPerUnit" : "10 boxes x 20 bags",
"UnitPrice" : 18,
"UnitInStock" : 39,
"UnitsOnOrder" : 0,
"ReorderLevel" : 10
}
```
It should update the particular product.

 -------------------------------------- 
### Fetching Customer's Order History
&nbsp;
To display the order history of the customer select GET from the drop-down list and type in the below URL:
 ```
 http://localhost:30000/Customer/orderhistory/id
```
It will display the Order Details of the Customer with CustomerID : `id` in the response section.



>The App has also been deployed on AWS lambda using serverless (can not access the database for now)
Copy and paste the link on browser...

[https://dzca9owbch.execute-api.us-east-2.amazonaws.com/production]()


 -------------------------------------- 


















 

 













