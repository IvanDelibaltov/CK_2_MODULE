"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _6lab_transport_js_1 = require("./6lab_transport.js");
const owner = new _6lab_transport_js_1.Transport.Owner('Иванов', 'Иван', 'Иванович', '15.05.1985', _6lab_transport_js_1.Transport.DocType.passport, 1234, 567890);
const mercedes = new _6lab_transport_js_1.Transport.Car('Mercedes-Benz', 'S-Class', 2022, 'WDD22212345678901', 987654, owner, _6lab_transport_js_1.Transport.BodyType.Sedan, _6lab_transport_js_1.Transport.CarClass.Luxury);
mercedes.hello = "hello";
console.log(mercedes.hello);
/*(Transport.Car as any).prototype.testFunc = function() {
    console.log("test");
}*/
console.log(mercedes.brand);
