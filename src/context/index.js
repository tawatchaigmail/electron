
const path = require('path')
const {app,BrowserWindow , ipcMain} = require('electron')
const isDev = require('electron-is-dev');


var clientId = 'clieantID:'

const createWindow = () => {
      const win = new BrowserWindow({
           width : 800,
           height : 440,
           webPreferences: {
                            preload: path.join(__dirname, 'preload.js')
           }
      });
      
      win.loadURL(
         isDev
           ? 'http://localhost:3000'
           : `file://${path.join(__dirname, './build/index.html')}`
      );

      
     // win.loadFile('./src/context/index.html');
      win.loadFile('./build/index.html');
      /*
      if (isDev) {
        // win.webContents.openDevTools({ mode: 'detach' });
         win.webContents.openDevTools();
       }
       */
      win.webContents.openDevTools()  
   //   ipcMain.handle('ping', () => 'pong')
   //   win.loadFile('index.html');
     
}


app.whenReady().then(() => {
     createWindow()

     app.on('activate', () => {
     if (BrowserWindow.getAllWindows().length === 0) ceareWindow()
     });
});

app.on('window-all-closed',() => {
   if (process.platform !== 'darwin') app.quit()
});
