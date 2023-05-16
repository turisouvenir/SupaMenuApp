const {
    createMenuItem,
    getAllMenuItemsForResto,
    getSingleMenuItem,
    updateMenuItem,
    deleteMenuItem
} = require("../controllers/menu.controllers");


module.exports = (app) => {
    var router = require("express").Router();

    router.route("/")
        .post(createMenuItem)
        .get(getAllMenuItemsForResto)
    router.route('/:id')
        .delete(deleteMenuItem)
        .put(updateMenuItem)
        .get(getSingleMenuItem)


    app.use("/api/menu", router);
};