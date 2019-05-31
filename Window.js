"use strict";
const { BrowserWindow } = require("electron");

//default window settings
const defProps = {
  width: 500,
  height: 800,
  show: false
};
class Window extends BrowserWindow {
  constructor({ file, ...windowSettings }) {
    //calls new BrowserWindow with these props
    super({ defProps, ...windowSettings });
    this.loadFile(file);
    //this.webContents.openDevTools();
    //show only when ready, prevents flickering
    this.once("ready-to-show", () => {
      this.show();
    });
  }
}
module.exports = Window;
