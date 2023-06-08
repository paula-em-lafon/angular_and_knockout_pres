# AngularJS and Knockout pres

Follow these instructions to play around with the code on the presentation and more

## Installation

you must have [nodejs](https://nodejs.org/en/download) installed in your computer.
it is recommended to also have [VSCode](https://code.visualstudio.com/Download) installed. you might need to restart vscode after installing nodejs

on the root of each folder run the following command
```bash
npm install
```

## Usage

```bash
# to start the server on each folder where there is one run:
node server.js
# the localhost port is 8080 (localhost:8080)

# to start the database server on the sportsstore project use
npx json-server -p 5500  db.json
# do this in the main sportsstore directory in the angular section
# this will start the json-server to the correct port.

```
## Using the thing
For knockoutjs just type in the name of the html file you want to visit. ex to go to knockout\3bindings\3forms\clickbinding.html go to localhost:8080/3forms/clickbinding.html

For AngularJS the files are inside of the angularjs subdirectories, type the templates found there. ex to go to the angular\sportsstore\angularjs\app.html type localhost:8080/app.htm