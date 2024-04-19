import express from "express";
import { User } from "./models/user.models.js";
import { Message } from "./models/message.models.js";
import connect from "./database/config.js";
import cors from 'cors';
import {createServer} from "http"

const app = express();
const corsOptions = {
    origin:"http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
}
app.use(express.json());
app.use(cors(corsOptions));

const httpServer = createServer(app);


// io connections
// io.on("connection", (socket) => {
//     console.log(`A user connected${socket.id}`);
  
//     // Handle "hello" event
//     socket.on("hello", (arg) => {
//       console.log(arg);
  
//     //   // Send response back to the client
//       socket.emit("helloResponse", "Hello from server!");
//     });
  
//   });

// post login user 
connect();
app.post('/userlogin', async (req, res)=>{
    try {
        const reqBody = req.body;
        const {address} =  reqBody;
        console.log(address);
        const user = await  User.findOne({username: address});
        console.log(user);
        if(!user)
        {
                const person = new User({username:address});
                await person.save();
                console.log("done adding");
                return Response.json({message:"connect1 successfullly"}, {status: 200});

        }
        return res.status(200).json({message:"connect2 successfullly"});
    } catch (error) {
        return res.status(500).json({message:"could not add user"});
    }
});


// send data
app.post('/sendData', async(req, res) =>{
    const reqBody = req.body;
    const { content, sender, receiver , name} = reqBody;
    console.log(content, sender, receiver);
    // const u1 = await User.findOne({username: sender});
    const data = new Message({
        sender,
        content,
        receiver,
        filename: name,
    });
    const saved = await data.save();
    res.status(200).json(saved);
})

app.get('/getsendData/:sender', async(req, res) =>{
    const reqBody = req.params.sender;
    console.log(reqBody);
    const sender = reqBody;
    try {
        const msg = await Message.find({
                sender: sender,
        });
        console.log(msg);
        res.status(200).json(msg);
    } catch (error) {
        res.status(400).json("could not find.");
    }
});

// receive data
app.get('/getreceiveData/:receiver', async(req, res) =>{
    const reqBody = req.params.receiver;
    console.log(reqBody);
    const receive = reqBody;
    try {
        const msg = await Message.find({
            receiver: receive,
        });
        console.log(msg);
        res.status(200).json(msg);
    } catch (error) {
        res.status(400).json("could not find.");
    }
});

// sentgraph
// app.get('/sentgraph/:sender', async(req, res) =>{
//     const reqBody = req.params.sender;
//     try {
//         const sentData = await Message.aggregate([
//             {
//               $match: {
//                 sender: sender // Match documents with the specified sender
//               }
//             },
//             {
//               $group: {
//                 _id: { $dateToString: { format: "%b %y", date: "$createdAt" } }, // Group by month and year, e.g., Jan 22
//                 SemiAnalysis: { $sum: 1 } // Count the number of messages for each month and year
//               }
//             },
//             {
//               $sort: {
//                 "_id": 1 // Sort by date in ascending order
//               }
//             }
//           ]);

//           const chartData = sentData.map(entry => ({
//             date: entry._id,
//             SemiAnalysis: entry.SemiAnalysis
//           }));
      
//           res.json(chartData);
      
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// })



httpServer.listen(5002,() => {
    console.log("server running on 5002")
});
