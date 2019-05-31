let $ = require("jquery"); // jQuery now loaded and assigned to $
//let fs = require("fs");
//let filename = "authorities";
const ipc = require("electron").ipcRenderer;

$("#btn_login").on("click", () => {
  let txtUser = $("#txtUsr").val();
  let txtPwd = $("#txtPwd").val();
  if (txtUser == "manish" && txtPwd == "manish") {
    ipc.sendSync("entry-accepted", "ping");
  } else {
    $("#lbl").text("username or password is incorrect");
  }
  /*
  if (fs.existsSync(filename)) {
    let data = fs.readFileSync(filename, "utf8").split("\n");

    data.forEach((authorities, index) => {
      let [user, password] = authorities.split(",");
      console.log(user);
      console.log(password);
      let [name1, usr] = user.split(":");
      let [name2, pass] = password.split(":");

      let txtUser = $("#txtUsr").val();
      let txtPwd = $("#txtPwd").val();

      if (txtUser == usr && txtPwd == pass) {
        ipc.sendSync("entry-accepted", "ping");
      } else {
        $("#lbl").text("username or password is incorrect");
      }
    });
  }*/
});
$("#btn_cancel").on("click", () => {
  ipc.sendSync("cancel-login");
});
