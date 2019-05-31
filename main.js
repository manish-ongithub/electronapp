// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require("electron");
const { ipcMain } = require("electron");
const path = require("path");
const url = require("url");
require("electron-reload")(__dirname);

// Create menu template
const mainMenuTemplate = [
  // Each object is a dropdown
  {
    label: "File",
    submenu: [
      {
        label: "Quit",
        accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q",
        click() {
          app.quit();
        }
      }
    ]
  },
  {
    label: "User Management",
    submenu: [
      {
        label: "Create New User",
        accelerator: "Ctrl+N",
        click() {}
      }
    ]
  },
  {
    label: "Voucher Management",
    submenu: [
      {
        label: "Create New Voucher",
        accelerator: "Ctrl+K",
        click() {}
      }
    ]
  },
  {
    label: "Rewards Management",
    click() {}
  }
];
let mainWindow;
let loginWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    show: false
  });

  mainWindow.loadURL(path.join());

  mainWindow.loadFile("index.html");

  child = new BrowserWindow({
    parent: mainWindow,
    width: 400,
    height: 300,
    webPreferences: {
      nodeIntegration: true
    },
    frame: false
  });
  child.loadFile("login.html");

  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // Insert menu
  Menu.setApplicationMenu(mainMenu);
});
ipcMain.on("entry-accepted", (event, arg) => {
  console.log("entry-accepted");
  if (arg == "ping") {
    mainWindow.show();
    child.hide();
  }
});

ipcMain.on("cancel-login", event => {
  app.quit();
});

// Quit when all windows are closed.
app.on("window-all-closed", function() {
  app.quit();
});
