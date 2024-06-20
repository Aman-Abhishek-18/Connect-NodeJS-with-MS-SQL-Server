const sql = require("mssql");
var config = {
    server: "TEST\\SQLEXPRESS", //When specifying the server name "TEST\SQLEXPRESS" in contexts like connection 
    //strings or configurations, you need to use double backslashes (\\) 
    database: "FirstDB", // your database name
    user: "sa",  // user name 
    password: "check1234", // password
    options: {
        trustedConnection: false, // Use false if using username and password
        encrypt: false, // Use false if not connecting to Azure
        trustServerCertificate: true, // True for self-signed certificates
        connectTimeout: 30000 
    }
};

sql.connect(config, function(err) {
    if (err) {
        console.log("Connection error: ", err);
        return;
    }
    const request = new sql.Request();
    request.query("SELECT * FROM forbes_global_2010_2014'", function(err, result) {
        if (err) console.log("Query error: ", err);
        else {
            const myJson = result.recordset;
            console.log(myJson); // JSON data

            // const myJsonStr = JSON.stringify(myJson);
            // console.log(myJsonStr); // JSON string

            // const jsonArray = JSON.parse(myJsonStr); //Parse the JSON string into a JavaScript object
            // const firstObject = jsonArray[0]; //Access the first object in the array

        }
    });
});


