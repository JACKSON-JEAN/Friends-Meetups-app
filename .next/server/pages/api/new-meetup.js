"use strict";
(() => {
var exports = {};
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 5940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ new_meetup)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/api/new-meetup.js

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        // const { title, image, address, description} = data;
        const client = await external_mongodb_namespaceObject.MongoClient.connect("mongodb+srv://Jackson:test123@cluster0.fgkr5.mongodb.net/Meetups?retryWrites=true&w=majority");
        const db = client.db();
        const meetupsCollection = db.collection("meetups");
        try {
            const result = await meetupsCollection.insertOne(data);
            // console.log(result);
            res.status(201).json({
                message: "Meetup inserted"
            });
        } catch (error) {
            console.error("Error inserting meetup:", error);
            res.status(500).json({
                message: "Inserting meetup failed"
            });
        } finally{
            client.close();
        }
    }
}
/* harmony default export */ const new_meetup = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5940));
module.exports = __webpack_exports__;

})();