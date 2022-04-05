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
  
  const clientID = '960074343222747187';
  const discord = require('discord-rpc');
  const RPC = new discord.Client({transport: 'ipc'});

  discord.register(clientID);

  (async () => {
    RPC.on('ready', async () => {
      await RPC.setActivity({
        details: 'Sandbox',
        state: 'Simulating Physics',
        largeImageKey: 'physed-logo',
        largeImageText: 'github.com/NicohIas',
        startTimestamp: Date.now(),
        instance: false,
        buttons: [{ 
          label: 'Source', 
          url: 'https://github.com/NicohIas/half-arsed-phys'
        }]
      }).catch(err => console.error(err));

      console.log('RPC Ready');
    });
    await RPC.login({clientId: clientID}).catch(err => console.error(err));
    await RPC.connect().catch(err => console.error(err));
  })();
}

app.on("ready", newApp);