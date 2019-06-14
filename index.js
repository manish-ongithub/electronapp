let $ = require("jquery"); // jQuery now loaded and assigned to $
const ipc = require("electron");
var AWS = require("aws-sdk");
const modal = require("electron-modal");
// Set the credentials

AWS.config.loadFromPath("./awsconfig.json");
// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
var params = {
  TableName: "AdminUsers",
  Key: {
    userid: { N: "1" }
  },
  ProjectionExpression: "userid,firstname,lastname"
};
//$("#btn-open-modal").on("click", () => {});
$("#exampleModalCenter").on("shown.bs.modal", function() {
  console.log("modal shown");
  $("#divModalBody").html("<b>Modal Opened</b>");

  // Call DynamoDB to create the table
  ddb.getItem(params, function(err, data) {
    if (err) {
      //console.log("Error", err);
      $("#divModalBody").html(" Error -> " + err.message);
    } else {
      //console.log("Success", data.Item.userid);
      $("#divModalBody").html(
        " Success -> " +
          data.Item.userid["N"] +
          " - " +
          data.Item.firstname["S"] +
          " - " +
          data.Item.lastname["S"]
      );
    }
  });
});
function ShowCustomerPage() {
  $("#divCustomerActions").show();
  $("#divCampaignActions").hide();
  $("#divVoucherActions").hide();
  $("#divProfileDetails").hide();
  $.ajax({
    url: "customer.html",
    dataType: "html",
    async: true,
    success: function(html) {
      $("#divCustomerActions").html(html);
      /*
      $.getScript("myscript.js", function() {
        $("#content input[type=checkbox]").attr("checked", "true");
      });
      */
    }
  });
}

function ShowVoucherPage() {
  $("#divCustomerActions").hide();
  $("#divCampaignActions").hide();
  $("#divProfileDetails").hide();
  $("#divVoucherActions").show();
  $.ajax({
    url: "voucher.html",
    dataType: "html",
    async: true,
    success: function(html) {
      $("#divVoucherActions").html(html);
      /*
      $.getScript("myscript.js", function() {
        $("#content input[type=checkbox]").attr("checked", "true");
      });
      */
    }
  });
}

function ShowProfilePage() {
  $("#divCustomerActions").hide();
  $("#divCampaignActions").hide();
  $("#divVoucherActions").hide();
  $("#divProfileDetails").show();
  $("#divProfileDetails").load("profile.html");
  /*
  $.ajax({
    url: "profile.html",
    dataType: "html",
    async: true,
    success: function(html) {
      $("#divProfileDetails").html(html);
      
      // $.getScript("myscript.js", function() {
      //   $("#content input[type=checkbox]").attr("checked", "true");
      // });
      
    }
  });
  */
}
