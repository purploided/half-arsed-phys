const { app, BrowserWindow } = require("electron");
const url = require("url");

function newApp() {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    icon: __dirname + './addatives/physed-logo.png',
    fullscreen: true
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
}

app.on("ready", newApp);
