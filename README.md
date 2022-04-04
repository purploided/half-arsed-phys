<p align="center">
  <img width="128" align="center" src="/addatives/physed-logo.png">
</p>
<h1 align="center">
  Half Arsed Phys(ics)
</h1>
The most Half Arsed Physics game on this planet! Please bully me about this, much appreciated!

**[Glowstik's Idea](https://www.youtube.com/channel/UCp-ej91goXSRy8781Xr96Yw)** go subscribe to him!
# How to compile the game (electron)

``` js
npx electron-packager `${file location}` phys-ed --win32 --electron-version=17.1.1 --overwrite
```

Or.. You could also use the **[already packaged thing](https://drive.google.com/file/d/1eQQnvx0sPJhX5LBR3HetmUt35ZaYL55t/view?usp=sharing)**, this is just for people who want to update the game. 

## main.js

``` js
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
```

## Mods

```
                         ____________________________________________________________________
                       /                                                                      \
                      |                             HOW TO USE                                 |
                      |                                                                        |
                      |     Put code or scripts you find inside the "mod" statements           |
                      |     To do this you can paste the code inside the if statements         |
                      |     and set the specific mod slot to "1"                               |
                      |     Please be sure to IF copying code from online, e.g. github         |
                      |     make sure to read the code                                         |
                      |                                                                        |
                      |     For making mods:                                                   |
                      |                                                                        |
                      |     Edit the MOD NAME & MOD DESCRIPTION to your Mod's name and desc-   |
                      |     ription. Please do not create mods that will jack anothers game.   |
                      |     All mods can have their own license, meaning some you can edit, s- |
                      |     ome you cannot, please be sure to abide the the selected mod's     |
                      |     license before modifying or "skidding".                            |
                      |                                                                        |
                      |     Have fun!                                                          |
                      \________________________________________________________________________/
                      
```

## Configs

```
                         _____________________________________________________________________
                       /                                                                       \
                      |                             HOW TO USE                                  |
                      |                                                                         |
                      |     For better fps:                                                     |
                      |                                                                         |
                      |     lagSwitch = true; (better fps)                                      |
                      |     qualitySwitch = true; (better fps)                                  |
                      |     arcadeSwitch = false; (better fps)                                  |
                      |     arcadeMax = false; (better fps)                                     |
                      |                                                                         |
                      |     For better quality:                                                 |
                      |                                                                         |
                      |     lagSwitch = false; (worse fps but smoother experience)              |
                      |     qualitySwitch = false; (worse fps but better quality)               |
                      |     arcadeSwitch = true; (worse fps, and for the arcade enthusiasts)    |
                      |     arcadeMax = true; (worse fps, and for the arcade enthusiasts)       |
                      |                                                                         |
                      |                                                                         |
                      |     or make your own configs!                                           |
                      \_________________________________________________________________________/
```

# Extras

[LICENSE](LICENSE.md)

[README](README.md)
