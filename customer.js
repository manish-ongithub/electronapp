// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
window.$ = window.jquery = require("./node_modules/jquery");
window.dt = require("./node_modules/datatables.net")();
//window.editor = require("./node_modules/datatables.net-editor")();

var rowdata = {
  data: [
    {
      DT_RowId: "row_1",
      first_name: "Tiger",
      last_name: "Nixon",
      position: "System Architect",
      email: "t.nixon@datatables.net",
      office: "Edinburgh",
      extn: "5421",
      age: "61",
      salary: "320800",
      start_date: "2011-04-25"
    },
    {
      DT_RowId: "row_2",
      first_name: "Garrett",
      last_name: "Winters",
      position: "Accountant",
      email: "g.winters@datatables.net",
      office: "Tokyo",
      extn: "8422",
      age: "63",
      salary: "170750",
      start_date: "2011-07-25"
    },
    {
      DT_RowId: "row_3",
      first_name: "Ashton",
      last_name: "Cox",
      position: "Junior Technical Author",
      email: "a.cox@datatables.net",
      office: "San Francisco",
      extn: "1562",
      age: "66",
      salary: "86000",
      start_date: "2009-01-12"
    },
    {
      DT_RowId: "row_4",
      first_name: "Cedric",
      last_name: "Kelly",
      position: "Senior Javascript Developer",
      email: "c.kelly@datatables.net",
      office: "Edinburgh",
      extn: "6224",
      age: "22",
      salary: "433060",
      start_date: "2012-03-29"
    },
    {
      DT_RowId: "row_5",
      first_name: "Airi",
      last_name: "Satou",
      position: "Accountant",
      email: "a.satou@datatables.net",
      office: "Tokyo",
      extn: "5407",
      age: "33",
      salary: "162700",
      start_date: "2008-11-28"
    },
    {
      DT_RowId: "row_6",
      first_name: "Brielle",
      last_name: "Williamson",
      position: "Integration Specialist",
      email: "b.williamson@datatables.net",
      office: "New York",
      extn: "4804",
      age: "61",
      salary: "372000",
      start_date: "2012-12-02"
    },
    {
      DT_RowId: "row_7",
      first_name: "Herrod",
      last_name: "Chandler",
      position: "Sales Assistant",
      email: "h.chandler@datatables.net",
      office: "San Francisco",
      extn: "9608",
      age: "59",
      salary: "137500",
      start_date: "2012-08-06"
    },
    {
      DT_RowId: "row_8",
      first_name: "Rhona",
      last_name: "Davidson",
      position: "Integration Specialist",
      email: "r.davidson@datatables.net",
      office: "Tokyo",
      extn: "6200",
      age: "55",
      salary: "327900",
      start_date: "2010-10-14"
    },
    {
      DT_RowId: "row_9",
      first_name: "Colleen",
      last_name: "Hurst",
      position: "Javascript Developer",
      email: "c.hurst@datatables.net",
      office: "San Francisco",
      extn: "2360",
      age: "39",
      salary: "205500",
      start_date: "2009-09-15"
    },
    {
      DT_RowId: "row_10",
      first_name: "Sonya",
      last_name: "Frost",
      position: "Software Engineer",
      email: "s.frost@datatables.net",
      office: "Edinburgh",
      extn: "1667",
      age: "23",
      salary: "103600",
      start_date: "2008-12-13"
    }
  ],
  options: [],
  files: []
};
var editor = null;
// var edt = new window.editor({
//   ajax: rowdata,
//   table: "#example",
//   fields: [
//     {
//       label: "First name:",
//       name: "first_name"
//     },
//     {
//       label: "Last name:",
//       name: "last_name"
//     },
//     {
//       label: "Position:",
//       name: "position"
//     },
//     {
//       label: "Office:",
//       name: "office"
//     },
//     {
//       label: "Extension:",
//       name: "extn"
//     },
//     {
//       label: "Start date:",
//       name: "start_date",
//       type: "datetime"
//     },
//     {
//       label: "Salary:",
//       name: "salary"
//     }
//   ]
// });
window.$("#example").DataTable({
  dom: "Bfrtip",
  ajax: "./objects.txt",
  columns: [
    { data: "name" },
    { data: "position" },
    { data: "office" },
    { data: "extn" },
    { data: "start_date" },
    { data: "salary" }
  ],
  select: true
});
