"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divisao = exports.Multiplicacao = exports.Subtracao = exports.Soma = void 0;
var Soma = /** @class */ (function () {
    function Soma() {
    }
    Soma.calcular = function (a, b) {
        return a + b;
    };
    return Soma;
}());
exports.Soma = Soma;
var Subtracao = /** @class */ (function () {
    function Subtracao() {
    }
    Subtracao.calcular = function (a, b) {
        return a - b;
    };
    return Subtracao;
}());
exports.Subtracao = Subtracao;
var Multiplicacao = /** @class */ (function () {
    function Multiplicacao() {
    }
    Multiplicacao.calcular = function (a, b) {
        return a * b;
    };
    return Multiplicacao;
}());
exports.Multiplicacao = Multiplicacao;
var Divisao = /** @class */ (function () {
    function Divisao() {
    }
    Divisao.calcular = function (a, b) {
        if (b === 0)
            throw new Error("Divisão por zero não é permitida.");
        return a / b;
    };
    return Divisao;
}());
exports.Divisao = Divisao;
