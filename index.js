let $ = require("jquery"); // jQuery now loaded and assigned to $
const ipc = require("electron");
var AWS = require("aws-sdk");
// Set the credentials
AWS.config.loadFromPath("./awsconfig.json");
// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

var params = {
  TableName: "AdminUsers",
  Key: {
    userid: { N: "1" }
  },
  ProjectionExpression: "ATTRIBUTE_NAME"
};

// Call DynamoDB to create the table
ddb.getItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Item);
  }
});

// let count = 0;
// $("#click-counter").text(count.toString());
// $("#countbtn").on("click", () => {
//   count++;
//   $("#click-counter").text(count);
// });

$("#btn-open-modal").on("click", () => {
  console.log("opend modal clicked");
  //$("#input-example-7").val("manish singh");
});
