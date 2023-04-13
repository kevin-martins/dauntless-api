"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = void 0;
const capitalize = (str) => {
    return str.split("").reduce((acc, curr, i) => {
        if (i === 0) {
            acc += curr.toUpperCase();
        }
        else {
            acc += curr.toLowerCase();
        }
        return acc;
    }, "");
};
exports.capitalize = capitalize;
//# sourceMappingURL=string-manipulation.js.map