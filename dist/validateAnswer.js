"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.score = void 0;
const _1 = __importDefault(require("."));
const randomInt_1 = require("./ts/randomInt");
exports.score = 0;
let lives = 3;
let randomInt = (0, randomInt_1.generateRandomNumber)(1, 5);
function validateAnswer(round, lastNum, answer) {
    if (answer === 'quit') {
        console.log(`Your final score is ${exports.score}`);
        return;
    }
    else if (parseInt(answer) === randomInt) {
        console.log("Correct!");
        lives = 3 * (round + 1);
        exports.score = exports.score + round;
        console.log(`Lives increased to ${lives}!`);
        console.log(`Score: ${exports.score}`);
        (0, _1.default)(round + 1, lastNum + 5);
        randomInt = (0, randomInt_1.generateRandomNumber)(1, lastNum + 5);
    }
    else {
        lives--;
        if (lives === 0) {
            console.log("Game Over!");
        }
        else {
            console.log(`Wrong! You have ${lives} lives left.`);
            (0, _1.default)(round, lastNum);
        }
    }
}
exports.default = validateAnswer;
//# sourceMappingURL=validateAnswer.js.map