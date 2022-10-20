"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateVal(lastNum) {
    return (val) => {
        if (val === 'quit') {
            return true;
        }
        else if (isNaN(parseInt(val))) {
            return "Please enter a number";
        }
        else if (parseInt(val) < 1 || parseInt(val) > lastNum) {
            return `Please enter a number from 1 to ${lastNum}`;
        }
        else {
            return true;
        }
        ;
    };
}
exports.default = validateVal;
//# sourceMappingURL=responseValidator.js.map