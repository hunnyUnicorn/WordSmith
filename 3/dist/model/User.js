"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    address: {
        type: String
    },
    phone: {
        type: Number
    }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)("User", UserSchema);
