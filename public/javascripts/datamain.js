
// require([]) is a top-level async callback version of require()

// require() is only for use inside a define()

requirejs(["./common"], () => {
    require(["a/printCurrentDate"]);
});