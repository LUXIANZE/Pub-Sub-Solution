import express, { Request, Response } from "express";
import net, { Socket } from "net"
import cors from "cors";
const app = express()

app.use(cors());

// Array to store list of subscribers
let subscribers: Array<Socket> = [];

app.get("/subscribe", (req: Request, res: Response) => {
    // TODO@LUXIANZE: #1 Need to create socket properly

    /** 
     * The mistake is, I am expecting things to return to a page that displays DATA
     * I should actually: 
     * 1. serve a static page
     * 2. make request from the statuc page using js
     * 3. server create and pertains socket
     * 4. send data back to page
     */

    // const subscriberSocket = req.socket;
    const subscriberSocket = new net.Socket();
    console.log(req.socket.remoteAddress);
    const socketPort = req.socket.remotePort;
    const socketIP = req.socket.remoteAddress;
    if(socketPort && socketIP){
        subscriberSocket.connect(socketPort, socketIP);
    }
    // console.log(subscriberSocket);
    subscriberSocket ? subscribers.push(subscriberSocket) : null;
    res.status(200).send("Hello World!");
})

app.listen(8000,()=>{
    console.log('Server Started at Port, 8000')
})

setInterval(() => {
    if(subscribers.length > 0){
        subscribers.forEach(subscriber => {
            subscriber.write(Date.now.toString(), ( status )=>{
                // status ? console.log("Success") : console.log("failed");
            });
        });
    }
}, 2000);
