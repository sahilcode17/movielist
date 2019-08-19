
// const request = require("request")
// request("http://www.google.com", function(error , response,body){
//     if(error){
//         console.log("something went wrong")
        
//     }
//     else{
//         if(response.statusCode==200){
//             console.log(body)
//         }
//     }
// })
var  express = require("express")
var ejs = require("ejs")
var app = express() 

const request = require("request")

app.set("view engine","ejs")

const port = 1717
app.get("/", function(req,res){
    res.render("search")
})
app.get("/results", function(req,res){
    var query = req.query.search
    request("http://www.omdbapi.com/?apikey=79f0a67f&"+query,function(error,response,body){
        if(!error && response.statusCode==200)
        {
            const  data = JSON.parse(body)
        
        res.render("first" , { data: data})
        }

    })
})
app.listen(port, () => console.log(`Listening on port ${port}`))

