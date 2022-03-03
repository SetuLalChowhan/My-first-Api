const express = require("express");

(async function () {
    const app = await require("./express")();

    app.listen(3000, () => {
        console.log("listening on port 3000");
    });
})();
