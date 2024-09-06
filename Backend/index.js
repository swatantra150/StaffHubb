const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')
const moment=require('moment')
const app=express()
const port=3001
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
mongoose.
connect('mongodb+srv://swatantra:Swatantra15@cluster0.7diym.mongodb.net/',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log(`Connected to MongoDb`)
}).catch((error)=>{
    console.log(`Error connecting to mongoDb ${error}`); 
})
app.listen(port,(req,res)=>{
    console.log(`Example is runnnig on ${port}`)
})
//Import the employee model
const Employee=require('./models/employee.js')
//Import the Attendencr model
const Attendence=require('./models/attendence.js')
//Enpoint to register
app.post('/addEmployee',async(req,res)=>{
    try {
        const {
            employeeName,
            employeeId,
            designation,
            phoneNumber,
            dateOfBirth,
            joiningDate,
            activeEmployee,
            salary,
            address,
          } = req.body;
      //Create a new Employee
      const newEmployee=new Employee({
        employeeName,
        employeeId,
        designation,
        phoneNumber,
        dateOfBirth,
        joiningDate,
        activeEmployee,
        salary,
        address,
      })
      await newEmployee.save()
      res.status(201).json({message:'Employeee saved successfully',employee:newEmployee})
    } catch (error) {
        console.log(`Error creating employee ${error}`);
        res.status(500).json({message:'Filed to add an employee'})
    }
})
//Endpoint to Fetch all the employee
app.get('/getEmployee',async(req,res)=>{
    try {
         const employees=await Employee.find()
         res.status(200).json(employees)

    } catch (error) {
        res.status(500).json({ message: "Error fetching to get data" });
       
    }
})
// Endpoint to mark the attendance of the User
app.post('/postattendence', async (req, res) => {
    try {
        const { employeeName, employeeId, date, status } = req.body;
        const existingAttendence = await Attendence.findOne({ employeeId, date });

        if (existingAttendence) {
            existingAttendence.status = status;
            await existingAttendence.save();
            res.status(200).json(existingAttendence);
        } else {
            const newAttendence = new Attendence({
                employeeId,
                employeeName,
                date,
                status
            });
            await newAttendence.save();
            res.status(200).json(newAttendence);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error submitting the attendance', details: error.message });
    }
});
//Endpoint to get the attendence for a particular date
app.get('/getattendence',async(req,res)=>{
    try {
       const {date}=req.query
       const attendenceData=await Attendence.find({date:date})
       res.status(200).json(attendenceData) 
    } catch (error) {
       res.status(500).json({message:'Error while fetching the attendence',error}) 
    }
})
//Endpoint to get the attendence for entire month
app.get('/attendence-report-all-employees',async(req,res)=>{
  try {
    const {month,year}=req.query
    console.log(`query parameter ${month} ${year}`);
    const startDate=moment(`${year}-${month}-01`,'YYYY-MM-DD')
    .startOf('month')
    .toDate()
    const endDate=moment(startDate).endOf('month').toDate()
    //Aggresgate the attendence data
    const report = await Attendence.aggregate([
        {
          $match: {
            $expr: {
              $and: [
                {
                  $eq: [
                    { $month: { $dateFromString: { dateString: "$date" } } },
                    parseInt(req.query.month),
                  ],
                },
                {
                  $eq: [
                    { $year: { $dateFromString: { dateString: "$date" } } },
                    parseInt(req.query.year),
                  ],
                },
              ],
            },
          },
        },
  
        {
          $group: {
            _id: "$employeeId",
            present: {
              $sum: {
                $cond: { if: { $eq: ["$status", "present"] }, then: 1, else: 0 },
              },
            },
            absent: {
              $sum: {
                $cond: { if: { $eq: ["$status", "absent"] }, then: 1, else: 0 },
              },
            },
            halfday: {
              $sum: {
                $cond: { if: { $eq: ["$status", "halfday"] }, then: 1, else: 0 },
              },
            },
            holiday: {
              $sum: {
                $cond: { if: { $eq: ["$status", "holiday"] }, then: 1, else: 0 },
              },
            },
          },
        },
        {
          $lookup: {
            from: "employees", // Name of the employee collection
            localField: "_id",
            foreignField: "employeeId",
            as: "employeeDetails",
          },
        },
        {
          $unwind: "$employeeDetails", // Unwind the employeeDetails array
        },
        {
          $project: {
            _id: 1,
            present: 1,
            absent: 1,
            halfday: 1,
            name: "$employeeDetails.employeeName",
            designation:"$employeeDetails.designation",
            salary: "$employeeDetails.salary",
            employeeId: "$employeeDetails.employeeId",
          },
        },
      ]);
      res.status(200).json({ report });
  } catch (error) {
    
  }
})