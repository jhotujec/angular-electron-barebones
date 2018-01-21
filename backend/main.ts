// ./main.js
import {app, BrowserWindow} from "electron";

let win: any = null;

app.on("ready", () => {

    // Initialize the window to our specified dimensions
    win = new BrowserWindow({width: 1000, height: 600});

    // Specify entry point
    win.loadURL("http://localhost:4200");

    // Show dev tools
    // Remove this line before distributing
    win.webContents.openDevTools();

    // Remove window once app is closed
    win.on("closed", () => {
        win = null;
    });

});

app.on("activate", () => {
    if (win === null) {
        // nothing
    }
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});