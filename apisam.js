var  express = require("express")
var ejs = require("ejs")
var app = express() 

const request = require("request")

const port = 2000

app.get("/results", function(req,res){
    var url = "https://route.api.here.com/routing/7.2/calculateroute.json"
    request(url,function(error,response,body){
        if(!error && response.statusCode==200)
        {
            res.send(body)
            
        
        
        }

    })
})
app.listen(port, () => console.log(`Listening on port ${port}`))