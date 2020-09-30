# ASP.NET Core Assignment using React 

This assignment is meant to challenge my mastery of ASP.NET Core and how I am able to use ASP.NET Core Web API to create a CRUD application within a REACT View. 

## Installation

```bash
$ git clone https://github.com/jia-von/asp-net-inventory-system-day-2.git
$ cd asp-net-inventory-system-day-2-jia-von
$ start devenv asp-net-inventory-system-day-2-jia-von.sln
````

Use the NuGet Package Manager to install packages:
- Entity Framework [ASP.NET Core Design](https://docs.microsoft.com/en-us/ef/core/get-started/?tabs=netcore-cli).
- Entity Framework [Pomelo Entity Framework Core](https://github.com/PomeloFoundation/Pomelo.EntityFrameworkCore.MySql). 
- Entity Framework [ASP.Net Core SqlServer](https://docs.microsoft.com/en-us/ef/core/).
- [axios.js](https://www.nuget.org/packages/axios.js/)

```bash
PM> dotnet add package Microsoft.EntityFrameworkCore.Design
PM> dotnet add package Pomelo.EntityFrameworkCore.MySQL
PM> dotnet add package Microsoft.EntityFrameworkCore.SqlServer
PM> npm install axios
```

Initiate initial migration to create a database with data seeded.

```bash
PM> dotnet ef migrations add InitialCreation
PM> dotnet ef update database
```

The result of successful database migration and update is shown below in [PHPMyAdmin](https://www.phpmyadmin.net/) `localhost` with the database name **mvc_inventory**.

![table](/References/table.PNG)

## Usage/Approach

- Start the Debugging tool within Visual Studio 2019. 
- A browser will automatically open to show a view of the database. 