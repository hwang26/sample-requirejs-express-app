# Sample Express App Using RequireJS

This is just an example of how to use RequireJS to import a clientside script, Luxon in our case.

Steps Followed:
- Initialized express app using npm
- Installed require.js script in /public/javascripts/lib
- Installed luxon in /public/javascripts/lib
- Created data-main script which is referenced from our layout.jade HTML template
- Referenced data-main and require.js scripts
- Created common.js script which contains our config (baseUrl and paths)
- Data-main will load common.js and then load the main module which will run our luxon code
