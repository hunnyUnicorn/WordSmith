"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("../model/User"));
const router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.default.find();
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new User_1.default({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        address: req.body.address,
        phone: req.body.phone,
    });
    try {
        yield user.save();
        res.status(201).json(user);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
router.patch('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    try {
        const user = yield User_1.default.findById(req.params.id);
        if (user != null) {
            user.name = (_a = req.body.name) !== null && _a !== void 0 ? _a : user.name;
            user.email = (_b = req.body.email) !== null && _b !== void 0 ? _b : user.email;
            user.age = (_c = req.body.age) !== null && _c !== void 0 ? _c : user.age;
            user.address = (_d = req.body.address) !== null && _d !== void 0 ? _d : user.address;
            user.phone = (_e = req.body.phone) !== null && _e !== void 0 ? _e : user.phone;
            yield user.save();
        }
        else {
            res.status(404).json({ message: "Something is wrong with this request..." });
        }
        res.status(202).json(user);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
router.delete('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.deleteMany();
        res.status(202).json(user);
    }
    catch (err) {
        res.status(204).json({ message: err.message });
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = yield User_1.default.findById(req.params.id);
        todo === null || todo === void 0 ? void 0 : todo.deleteOne();
        res.status(202).json(todo);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
exports.default = router;
