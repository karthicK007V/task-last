const express=require("express");
const employeerouter=require("./EmployeeRouter/router")
const mango =require("./connect");
const dotenv=require("dotenv");
const employeeregsiter=require("./EmployeeRouter/regsiterrouter")
// const auth =require("./Employeemodule/authmodules");
const cors=require("cors")


dotenv.config();
const app =express();
app.use(express.json())
mango.connect();
// app.use(cors());
app.use(cors({origin:"*",credentials : true}))
app.use("/register",employeeregsiter);

// app.use("/",auth.authuser)
app.use("/employee",employeerouter)

app.listen(process.env.PORT); 