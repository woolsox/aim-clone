const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({ width: 300, height: 450 })

  // and load the index.html of the app.
  win.loadFile('sign_on.html')
 
  // win.webContents.openDevTools()
}

app.on('ready', createWindow)
