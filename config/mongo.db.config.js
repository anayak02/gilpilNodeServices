                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://test123:mala123@cluster0.nv4zy.mongodb.net/myFirstDatasbase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  console.log("error=",err);

client.db("my").createCollection("ss", { capped : true, size : 5242880, max : 5000 } )  
  client.close();
});
  // const collection = client.db("myFirstDatasbase").collection("devices");
  
  
 
// });
// var mongoClient = require('mongodb').MongoClient;
// var url ="mongodb://localhost:2717/";

// client.connect(url,(err,db)=>{

//     if(err) throw err;

//      console.log(err);
// //     var dbo = db.db("mydb");
// //     // var myobj = { name: "Company Inc", address: "Highway 37" };
// //     // dbo.collection("customers").insertOne(myobj, function(err, res) {
// //     // if (err) throw err;
// //     // console.log("1 document inserted");
// //     // db.close();

// //     dbo.collection("customers").findOne({}, function(err, result) {
// //         if (err) throw err;

// //         console.log("error =",err);
// //         console.log(result.name);
// //         db.close();
// //       });
  

// });