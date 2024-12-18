export default function handler(req, res) {
    console.log("Hualla loco me han llamado");
    console.log("=====req=====");
    console.log(req);

    console.log("=====req.method=====");
    console.log(req.method);
    
    console.log("=====req.body=====")
    console.log(req.body);


    res.status(200).json({ message: 'Hello I m a webhook!' })
}