# Betfada

## First time
If this is the first time you initiate the project, you'll have to run either `npm install` or `yarn install` depending on the package manager you have installed in your system.

**Notice** that the project expect **Node v7.7.4** or higher. But its possible that you won't have any problems building from a previous version.

## Build

### Linux / Mac OSX
To initiate the build process, run `npm run build` on your terminal.

### Windows
To initiate the build process, run `./build.sh` in Git Bash.

## Server

### Linux / Mac OSX
You can run `npm run serve` and this will build, start a server and open the app on your default browser.

This will:
- Compile the styles to css/style.css
- Copy the library.min.js and widgets.min.js files from their respective folders and copy them to the **js** directory

### Windows
Run `./build.sh` and then `live-server build`.

## Dev
You can run `npm run dev` to set up a live development server that will render style/widgets/library updates in real time. Before you do this though, you should do the following steps:

  1. Clone the APEX Library and run it in dev mode: `git clone git@github.com:alphapoint/APEX-Library.git && cd APEX-Library && npm install && npm run dev`
  1. Clone the APEX Widgets and run it in dev mode: `git clone git@github.com:alphapoint/APEX-Widgets.git && cd APEX-Widgets && npm install && npm run dev`

Now the libraries and widgets will be hosted on their own hot-reloading web servers and can be proxied into the live development server you create by running `npm run dev` in this repository. Now any changes made to styles, widgets or library will be instantly available.
