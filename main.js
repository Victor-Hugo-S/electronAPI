const {app, BrowserWindow} = require('electron')
const path = require('path')
const {ipcMain} = require('electron')

let ventana
function crearVentana() {
    ventana = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences : ({
            nodeIntegration: true
        })
    })
    ventana.loadFile('./index.html')
}
app.whenReady().then(crearVentana)