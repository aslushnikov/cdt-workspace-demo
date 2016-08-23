# Demo: DevTools Workspaces

Install:

```
npm i
```

Run:

```
node app.js
```

### Demo 1: devtools workspaces work

It is **possible** to setup mappings for `good.html` website.

1. Navigate to `localhost:3000/good.html`
2. Open devtools, open Sources Panel
3. Drop folder with this project
4. Map CSS file:
   - in Navigator, right click on "css > style.css" => "Map to file system resource" => select style.css
5. Map JS file:
   - in Navigator, right click on "js > script.js" => "Map to file system resource" => select script.js
6. Map HTML file:
   - in Navigator, right click on "good.html" => "Map to file system resource" => select good.html

**IMPORTANT** 
Mappings should be established in this order. Otherwise they wouldn't work.

### Demo 2: devtools workspaces will not work

1. Navigate to `localhost:3000/bad.html`

It is impossible to setup mappings for this website.

### FAQ

### How to check if workspace mappings are working?

1. Open style.css in Sources panel and try chaning "color: white" into "color: yellow" without saving and
reloading. If Workspace mappings are established successfully
