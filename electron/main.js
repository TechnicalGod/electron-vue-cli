const { app, BrowserWindow, Menu, globalShortcut } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
let win = null
function createWindow () {
  // if (process.platform === 'darwin') {
  //    app.dock.hide();
  // } else {
  //   Menu.setApplicationMenu(null)
  // }
  // 顶部菜单
  const mainMenu = Menu.buildFromTemplate([
    // {
    //   label: 'Files',
    //   role: 'dyh',
    //   submenu: [
    //     {
    //       label: '关于作者',
    //       role: 'dyh',
    //       submenu: [
    //         {
    //         label: 'dyh-帅哥',
    //         click: function () {
    //           // electron.shell.openExternal('https://www.jianshu.com/u/1699a0673cfe')
    //           console.log('帅哥')
    //         }
    //       }
    //     ]
    //     }
    //   ]
    // }
  ]);
  Menu.setApplicationMenu(mainMenu);

  win = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.webContents.openDevTools()
  if (isDev) {
    win.loadURL('http://localhost:8080')
  } else {
    win.loadFile(path.resolve(__dirname, '../vue-dist/index.html'))
  }
};

app.whenReady().then(() => {
  createWindow()
  //注册Ctr+x事件
  const ret = globalShortcut.register('CommandOrControl+X', () => {
    console.log('CommandOrControl+X is pressed')
    win.webContents.openDevTools()
  })

  if (!ret) {
    console.log('registration failed')
  }

  // 验证是否注册成功
  console.log(globalShortcut.isRegistered('CommandOrControl+X'))
})

app.on('window-all-closed', () => {
  // Unregister a shortcut.
  globalShortcut.unregister('CommandOrControl+X')

  // Unregister all shortcuts.
  globalShortcut.unregisterAll()

  if (process.platform !== 'darwin') {
    app.quit()
  }
})


app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
});