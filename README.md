# Sample Express App Using RequireJS

This is just an example of how to use RequireJS to import a clientside script, Luxon in our case.

Steps Followed:
- Initialized express app using npm
- Installed require.js script in /public/javascripts/lib
- Installed luxon in /public/javascripts/lib
- Created data-main script 
- Referenced data-main and require.js scripts in HTML template
- Created common.js script which contains our config (baseUrl and paths)
- Created printCurrentDate which contains our main code
- Data-main will load common.js and then load printCurrentDate which will run our luxon code
