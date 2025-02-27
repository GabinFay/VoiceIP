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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var API_KEY = process.env.CROSSMINT_API_KEY;
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var createResponse, createdIpAsset, getResponse, retrievedIpAsset, confirmResponse, action;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://staging.crossmint.com/api/v1/ip/collections/{collectionId}/ipassets", {
                        method: "POST",
                        headers: {
                            "X-API-KEY": API_KEY || '',
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            owner: 'email:creator@example.com:story-testnet',
                            nftMetadata: {
                                name: 'Snowflake Funk',
                                description: 'A disco groovy song for a house party during the winter time',
                                image: 'https://cdn2.suno.ai/image_large_c001fd6e-d6cd-474f-a7b6-6e6a9b3e2515.jpeg'
                            },
                            ipAssetMetadata: {
                                title: 'Snowflake Funk',
                                createdAt: '2025-02-11T11:13:00',
                                ipType: 'music',
                                creators: [
                                    {
                                        name: 'John Doe',
                                        email: 'john.doe@example.com',
                                        crossmintUserLocator: 'email:john.doe@example.com:story-testnet',
                                        contributionPercent: 100
                                    },
                                ],
                                media: [
                                    {
                                        name: 'Snowflake Funk',
                                        url: 'https://gateway.pinata.cloud/ipfs/Qmcuzm3oknzQ8eRSekyjAYw37GPvG4eTn2EcEsNscyZFoY',
                                        mimeType: 'audio/mpeg'
                                    },
                                ],
                                attributes: [
                                    {
                                        key: 'Suno Artist',
                                        value: 'InfluentialCoda427'
                                    },
                                    {
                                        key: 'Source',
                                        value: 'Suno.com'
                                    }
                                ]
                            }
                        })
                    })];
                case 1:
                    createResponse = _a.sent();
                    return [4 /*yield*/, createResponse.json()];
                case 2:
                    createdIpAsset = _a.sent();
                    console.log("Created IP Asset:", createdIpAsset);
                    return [4 /*yield*/, fetch("https://staging.crossmint.com/api/v1/ip/collections/{collectionId}/ipassets/{ipAssetId}", {
                            method: "GET",
                            headers: {
                                "X-API-KEY": API_KEY || '',
                                "Content-Type": "application/json"
                            }
                        })];
                case 3:
                    getResponse = _a.sent();
                    return [4 /*yield*/, getResponse.json()];
                case 4:
                    retrievedIpAsset = _a.sent();
                    console.log("Retrieved IP Asset:", retrievedIpAsset);
                    return [4 /*yield*/, fetch("https://staging.crossmint.com/api/v1/ip/actions/{actionId}", {
                            method: "GET",
                            headers: {
                                "X-API-KEY": API_KEY || '',
                                "Content-Type": "application/json"
                            }
                        })];
                case 5:
                    confirmResponse = _a.sent();
                    return [4 /*yield*/, confirmResponse.json()];
                case 6:
                    action = _a.sent();
                    console.log("Action:", action);
                    return [2 /*return*/];
            }
        });
    });
}
main().catch(console.error);
