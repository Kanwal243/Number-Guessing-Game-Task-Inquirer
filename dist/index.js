"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const responseValidator_1 = __importDefault(require("./ts/responseValidator"));
const validateAnswer_1 = __importDefault(require("./validateAnswer"));
function promptQuestion(round = 1, lastNum = 5) {
    inquirer_1.default.prompt([{
            type: "input",
            name: "answer",
            message: `Round ${round}, Enter a number from 1 to ${lastNum}:`,
            validate: (0, responseValidator_1.default)(Number(lastNum)),
        }]).then(({ answer }) => {
        (0, validateAnswer_1.default)(round, lastNum, answer);
    });
}
exports.default = promptQuestion;
promptQuestion();
//# sourceMappingURL=index.js.map