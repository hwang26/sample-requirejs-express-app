
/*
    NOTE: Base URL is by default either the folder that stores the data-main script or the folder that stores the HTML

    NOTE: Paths are relative to the Base URL

    baseUrl will point to `require-js-test/node_modules` folder

    Create a path that leads to `lib` which contains require.js
*/

// I think the URLs here are accurate, but we just don't have access to ancestors beyond `/public/` so we can't navigate backward with ".."

requirejs.config({
    baseUrl: "../node_modules",

    paths: {
        requirejs: "../public/javascripts/lib"
    }
});