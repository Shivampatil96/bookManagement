"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const source_map_support_1 = __importDefault(require("source-map-support"));
source_map_support_1.default.install();
const port = 3000; //process.env.PORT || 8081
App_1.default.listen(port, () => {
    console.log('app listing to ', port);
});
//# sourceMappingURL=index.js.map