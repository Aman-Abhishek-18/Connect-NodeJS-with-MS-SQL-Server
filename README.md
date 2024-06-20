# Connect-NodeJS-with-MS-SQL-Server

## Prerequisites:
1. Download and Install Visual Studio Code
2. Download and Install NodeJS
3. Download and Install Microsoft SQL Server

Open environment variable and check if node.js and npm path is added or not

![Screenshot 2024-06-20 195121](https://github.com/Aman-Abhishek-18/Connect-NodeJS-with-MS-SQL-Server/assets/70442464/3b5ff5a0-3283-4aff-b44f-7beef52fb24b)


## Open editor Visual Studio Code and then open Terminal
1. npm init (it will install package.json, packafe-lock.json)

![Screenshot 2024-06-20 195905](https://github.com/Aman-Abhishek-18/Connect-NodeJS-with-MS-SQL-Server/assets/70442464/6a681c96-7356-4269-b7be-695ba853dcb1)

2. npm install mssql --save (it will install node modules)




## Database set-up:
1. open SSMS and check user, password and server name
2. go to the properties and enable SQL Server Authentication

![Screenshot 2024-06-20 200314](https://github.com/Aman-Abhishek-18/Connect-NodeJS-with-MS-SQL-Server/assets/70442464/7f12ee55-7676-4795-b771-db8b1924ddc0)


3. perform DDL and DML

![Screenshot 2024-06-20 200624](https://github.com/Aman-Abhishek-18/Connect-NodeJS-with-MS-SQL-Server/assets/70442464/12e2630d-45f2-4144-8676-f0558a54078d)





## Open Editor Visual Studio Code
1. create js file, implement code
2. open terminal and run command node file_name.js


![Screenshot 2024-06-20 201750](https://github.com/Aman-Abhishek-18/Connect-NodeJS-with-MS-SQL-Server/assets/70442464/f056a64f-e86e-4097-b38e-a93aa4bcce4a)




## Error resolution:
Error - ETIMEOUT

![Screenshot 2024-06-20 201521](https://github.com/Aman-Abhishek-18/Connect-NodeJS-with-MS-SQL-Server/assets/70442464/7c4cb684-8623-4c36-9693-f91fe77e7be8)

Solution - 
1. Open Computer Management, go to SQL Server Configuration Manager -> SQL Server Services
2. check if SQL Server(SQLEXPRESS) and SQL Server Browser is running or stopped
3. in case if stopped, right click and start

![Screenshot 2024-06-20 201542](https://github.com/Aman-Abhishek-18/Connect-NodeJS-with-MS-SQL-Server/assets/70442464/95a69ac5-cf9a-49dc-840c-b82f29bcd656)






