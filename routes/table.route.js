const { updateRestoTable, createRestoTable, deleteRestoTable, getAllRestoTables, getSingleRestoTable, deleteRestoTable } = require("../controllers/table.controller");

module.exports = (app) => {
    var router = require("express").Router();

    router.route("/")
        .post(createRestoTable)
        .get(getAllRestoTables)
    router.route('/:id')
        .delete(deleteRestoTable)
        .put(updateRestoTable)
        .get(getSingleRestoTable)


    app.use("/api/table", router);
};