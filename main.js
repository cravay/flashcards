/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/server/src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const app_service_1 = __webpack_require__("./apps/server/src/app/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
    getCards() {
        return this.appService.getCards();
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", Object)
], AppController.prototype, "getData", null);
(0, tslib_1.__decorate)([
    (0, common_1.Get)('cards'),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], AppController.prototype, "getCards", null);
AppController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _b : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/server/src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const database_module_1 = __webpack_require__("./apps/server/src/database/database.module.ts");
const health_module_1 = __webpack_require__("./apps/server/src/health/health.module.ts");
const app_controller_1 = __webpack_require__("./apps/server/src/app/app.controller.ts");
const app_service_1 = __webpack_require__("./apps/server/src/app/app.service.ts");
let AppModule = class AppModule {
};
AppModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, health_module_1.HealthModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/server/src/app/app.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const prisma_service_1 = __webpack_require__("./apps/server/src/database/prisma.service.ts");
let AppService = class AppService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    getData() {
        return { message: 'Welcome to flashcards-server!' };
    }
    getCards() {
        return this.prisma.card.findMany();
    }
};
AppService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./apps/server/src/database/database.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const prisma_service_1 = __webpack_require__("./apps/server/src/database/prisma.service.ts");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaService],
        exports: [prisma_service_1.PrismaService],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;


/***/ }),

/***/ "./apps/server/src/database/prisma.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const client_1 = __webpack_require__("@prisma/client");
let PrismaService = class PrismaService extends client_1.PrismaClient {
    onModuleInit() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            yield this.$connect();
        });
    }
    enableShutdownHooks(app) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            this.$on('beforeExit', () => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
                yield app.close();
            }));
        });
    }
};
PrismaService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], PrismaService);
exports.PrismaService = PrismaService;


/***/ }),

/***/ "./apps/server/src/health/health.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HealthController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const terminus_1 = __webpack_require__("@nestjs/terminus");
const prisma_health_indicator_1 = __webpack_require__("./apps/server/src/health/prisma.health-indicator.ts");
let HealthController = class HealthController {
    constructor(health, prismaHealthIndicator) {
        this.health = health;
        this.prismaHealthIndicator = prismaHealthIndicator;
    }
    check() {
        return this.health.check([
            () => this.prismaHealthIndicator.isHealthy('database'),
        ]);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(),
    (0, terminus_1.HealthCheck)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], HealthController.prototype, "check", null);
HealthController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('health'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof terminus_1.HealthCheckService !== "undefined" && terminus_1.HealthCheckService) === "function" ? _a : Object, typeof (_b = typeof prisma_health_indicator_1.PrismaHealthIndicator !== "undefined" && prisma_health_indicator_1.PrismaHealthIndicator) === "function" ? _b : Object])
], HealthController);
exports.HealthController = HealthController;


/***/ }),

/***/ "./apps/server/src/health/health.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HealthModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const terminus_1 = __webpack_require__("@nestjs/terminus");
const database_module_1 = __webpack_require__("./apps/server/src/database/database.module.ts");
const health_controller_1 = __webpack_require__("./apps/server/src/health/health.controller.ts");
const prisma_health_indicator_1 = __webpack_require__("./apps/server/src/health/prisma.health-indicator.ts");
let HealthModule = class HealthModule {
};
HealthModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, terminus_1.TerminusModule],
        providers: [prisma_health_indicator_1.PrismaHealthIndicator],
        controllers: [health_controller_1.HealthController],
    })
], HealthModule);
exports.HealthModule = HealthModule;


/***/ }),

/***/ "./apps/server/src/health/prisma.health-indicator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaHealthIndicator = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const terminus_1 = __webpack_require__("@nestjs/terminus");
const prisma_service_1 = __webpack_require__("./apps/server/src/database/prisma.service.ts");
// From https://stackoverflow.com/a/71445270
let PrismaHealthIndicator = class PrismaHealthIndicator extends terminus_1.HealthIndicator {
    constructor(prismaService) {
        super();
        this.prismaService = prismaService;
    }
    isHealthy(key) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.prismaService.$queryRaw `SELECT 1`;
                return this.getStatus(key, true);
            }
            catch (e) {
                throw new terminus_1.HealthCheckError('Prisma check failed', e);
            }
        });
    }
};
PrismaHealthIndicator = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], PrismaHealthIndicator);
exports.PrismaHealthIndicator = PrismaHealthIndicator;


/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/terminus":
/***/ ((module) => {

module.exports = require("@nestjs/terminus");

/***/ }),

/***/ "@prisma/client":
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const app_module_1 = __webpack_require__("./apps/server/src/app/app.module.ts");
function bootstrap() {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map