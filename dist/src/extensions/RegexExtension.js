"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RegexExtension {
    static matchNumber(input) {
        const match = input.match(/\d+/);
        if (match != null) {
            return Number(match[0]);
        }
        return undefined;
    }
}
exports.default = RegexExtension;
