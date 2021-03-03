
// Requires common.js and loads our module which will run luxon

// baseUrl == "../node_modules"

requirejs(
    ["./common"],
    (common) => {
        requirejs(["requirejs/test"]);
    }
);