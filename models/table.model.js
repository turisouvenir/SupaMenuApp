const Joi = require("joi");
const { default: mongoose } = require("mongoose");

const tableSchema = new mongoose.Schema({
    tableNumber: {
        type: String,
        unique: true,
        required: true,
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true,
    },
});

// Create an index to enforce unique tableNumber
tableSchema.index({ tableNumber: 1 }, { unique: true });

const Table = mongoose.model('Table', tableSchema);
module.exports.Table = Table

// Define validation schema for table data
module.exports.tableValidationSchema = Joi.object({
    tableNumber: Joi.string().required(),
    restaurant: Joi.string().required(),
});
