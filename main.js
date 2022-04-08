(()=>{"use strict";var __webpack_modules__={585:(__unused_webpack_module,exports,__webpack_require__)=>{var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.AppController=void 0;const tslib_1=__webpack_require__(752),common_1=__webpack_require__(481),app_service_1=__webpack_require__(162);let AppController=class AppController{constructor(appService){this.appService=appService}getData(){return this.appService.getData()}getCards(){return this.appService.getCards()}};(0,tslib_1.__decorate)([(0,common_1.Get)(),(0,tslib_1.__metadata)("design:type",Function),(0,tslib_1.__metadata)("design:paramtypes",[]),(0,tslib_1.__metadata)("design:returntype",Object)],AppController.prototype,"getData",null),(0,tslib_1.__decorate)([(0,common_1.Get)("cards"),(0,tslib_1.__metadata)("design:type",Function),(0,tslib_1.__metadata)("design:paramtypes",[]),(0,tslib_1.__metadata)("design:returntype","function"==typeof(_a="undefined"!=typeof Promise&&Promise)?_a:Object)],AppController.prototype,"getCards",null),AppController=(0,tslib_1.__decorate)([(0,common_1.Controller)(),(0,tslib_1.__metadata)("design:paramtypes",["function"==typeof(_b=void 0!==app_service_1.AppService&&app_service_1.AppService)?_b:Object])],AppController),exports.AppController=AppController},343:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.AppModule=void 0;const tslib_1=__webpack_require__(752),common_1=__webpack_require__(481),nestjs_pino_1=__webpack_require__(581),database_module_1=__webpack_require__(191),health_module_1=__webpack_require__(837),user_module_1=__webpack_require__(486),app_controller_1=__webpack_require__(585),app_service_1=__webpack_require__(162);let AppModule=class AppModule{};AppModule=(0,tslib_1.__decorate)([(0,common_1.Module)({imports:[database_module_1.DatabaseModule,health_module_1.HealthModule,nestjs_pino_1.LoggerModule.forRoot(),user_module_1.UserModule],controllers:[app_controller_1.AppController],providers:[app_service_1.AppService]})],AppModule),exports.AppModule=AppModule},162:(__unused_webpack_module,exports,__webpack_require__)=>{var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.AppService=void 0;const tslib_1=__webpack_require__(752),common_1=__webpack_require__(481),prisma_service_1=__webpack_require__(508);let AppService=class AppService{constructor(prisma){this.prisma=prisma}getData(){return{message:"Welcome to flashcards-server!"}}getCards(){return this.prisma.card.findMany()}};AppService=(0,tslib_1.__decorate)([(0,common_1.Injectable)(),(0,tslib_1.__metadata)("design:paramtypes",["function"==typeof(_a=void 0!==prisma_service_1.PrismaService&&prisma_service_1.PrismaService)?_a:Object])],AppService),exports.AppService=AppService},191:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.DatabaseModule=void 0;const tslib_1=__webpack_require__(752),common_1=__webpack_require__(481),prisma_service_1=__webpack_require__(508);let DatabaseModule=class DatabaseModule{};DatabaseModule=(0,tslib_1.__decorate)([(0,common_1.Module)({providers:[prisma_service_1.PrismaService],exports:[prisma_service_1.PrismaService]})],DatabaseModule),exports.DatabaseModule=DatabaseModule},508:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.PrismaService=void 0;const tslib_1=__webpack_require__(752),common_1=__webpack_require__(481),client_1=__webpack_require__(524);let PrismaService=class PrismaService extends client_1.PrismaClient{onModuleInit(){return(0,tslib_1.__awaiter)(this,void 0,void 0,(function*(){yield this.$connect()}))}enableShutdownHooks(app){return(0,tslib_1.__awaiter)(this,void 0,void 0,(function*(){this.$on("beforeExit",(()=>(0,tslib_1.__awaiter)(this,void 0,void 0,(function*(){yield app.close()}))))}))}};PrismaService=(0,tslib_1.__decorate)([(0,common_1.Injectable)()],PrismaService),exports.PrismaService=PrismaService},658:(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.environment=void 0,exports.environment={production:!0,corsOrigin:"https://flashcards-7vuj.onrender.com"}},127:(__unused_webpack_module,exports,__webpack_require__)=>{var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.HealthController=void 0;const tslib_1=__webpack_require__(752),common_1=__webpack_require__(481),terminus_1=__webpack_require__(663),prisma_health_indicator_1=__webpack_require__(192);let HealthController=class HealthController{constructor(health,prismaHealthIndicator){this.health=health,this.prismaHealthIndicator=prismaHealthIndicator}check(){return this.health.check([()=>this.prismaHealthIndicator.isHealthy("database")])}};(0,tslib_1.__decorate)([(0,common_1.Get)(),(0,terminus_1.HealthCheck)(),(0,tslib_1.__metadata)("design:type",Function),(0,tslib_1.__metadata)("design:paramtypes",[]),(0,tslib_1.__metadata)("design:returntype",void 0)],HealthController.prototype,"check",null),HealthController=(0,tslib_1.__decorate)([(0,common_1.Controller)("health"),(0,tslib_1.__metadata)("design:paramtypes",["function"==typeof(_a=void 0!==terminus_1.HealthCheckService&&terminus_1.HealthCheckService)?_a:Object,"function"==typeof(_b=void 0!==prisma_health_indicator_1.PrismaHealthIndicator&&prisma_health_indicator_1.PrismaHealthIndicator)?_b:Object])],HealthController),exports.HealthController=HealthController},837:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.HealthModule=void 0;const tslib_1=__webpack_require__(752),common_1=__webpack_require__(481),terminus_1=__webpack_require__(663),database_module_1=__webpack_require__(191),health_controller_1=__webpack_require__(127),prisma_health_indicator_1=__webpack_require__(192);let HealthModule=class HealthModule{};HealthModule=(0,tslib_1.__decorate)([(0,common_1.Module)({imports:[database_module_1.DatabaseModule,terminus_1.TerminusModule],providers:[prisma_health_indicator_1.PrismaHealthIndicator],controllers:[health_controller_1.HealthController]})],HealthModule),exports.HealthModule=HealthModule},192:(__unused_webpack_module,exports,__webpack_require__)=>{var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.PrismaHealthIndicator=void 0;const tslib_1=__webpack_require__(752),common_1=__webpack_require__(481),terminus_1=__webpack_require__(663),prisma_service_1=__webpack_require__(508);let PrismaHealthIndicator=class PrismaHealthIndicator extends terminus_1.HealthIndicator{constructor(prismaService){super(),this.prismaService=prismaService}isHealthy(key){return(0,tslib_1.__awaiter)(this,void 0,void 0,(function*(){try{return yield this.prismaService.$queryRaw`SELECT 1`,this.getStatus(key,!0)}catch(e){throw new terminus_1.HealthCheckError("Prisma check failed",e)}}))}};PrismaHealthIndicator=(0,tslib_1.__decorate)([(0,common_1.Injectable)(),(0,tslib_1.__metadata)("design:paramtypes",["function"==typeof(_a=void 0!==prisma_service_1.PrismaService&&prisma_service_1.PrismaService)?_a:Object])],PrismaHealthIndicator),exports.PrismaHealthIndicator=PrismaHealthIndicator},656:(__unused_webpack_module,exports,__webpack_require__)=>{var _a,_b,_c;Object.defineProperty(exports,"__esModule",{value:!0}),exports.UserController=void 0;const tslib_1=__webpack_require__(752),common_1=__webpack_require__(481),user_service_1=__webpack_require__(906);let UserController=class UserController{constructor(userService){this.userService=userService}findMany(){return this.userService.findMany()}findOne(id){return this.userService.findOne(id)}};(0,tslib_1.__decorate)([(0,common_1.Get)(),(0,tslib_1.__metadata)("design:type",Function),(0,tslib_1.__metadata)("design:paramtypes",[]),(0,tslib_1.__metadata)("design:returntype","function"==typeof(_a="undefined"!=typeof Promise&&Promise)?_a:Object)],UserController.prototype,"findMany",null),(0,tslib_1.__decorate)([(0,common_1.Get)(":id"),(0,tslib_1.__param)(0,(0,common_1.Param)("id",common_1.ParseIntPipe)),(0,tslib_1.__metadata)("design:type",Function),(0,tslib_1.__metadata)("design:paramtypes",[Number]),(0,tslib_1.__metadata)("design:returntype","function"==typeof(_b="undefined"!=typeof Promise&&Promise)?_b:Object)],UserController.prototype,"findOne",null),UserController=(0,tslib_1.__decorate)([(0,common_1.Controller)("users"),(0,tslib_1.__metadata)("design:paramtypes",["function"==typeof(_c=void 0!==user_service_1.UserService&&user_service_1.UserService)?_c:Object])],UserController),exports.UserController=UserController},486:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.UserModule=void 0;const tslib_1=__webpack_require__(752),common_1=__webpack_require__(481),database_module_1=__webpack_require__(191),user_controller_1=__webpack_require__(656),user_service_1=__webpack_require__(906);let UserModule=class UserModule{};UserModule=(0,tslib_1.__decorate)([(0,common_1.Module)({imports:[database_module_1.DatabaseModule],controllers:[user_controller_1.UserController],providers:[user_service_1.UserService]})],UserModule),exports.UserModule=UserModule},906:(__unused_webpack_module,exports,__webpack_require__)=>{var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.UserService=void 0;const tslib_1=__webpack_require__(752),common_1=__webpack_require__(481),prisma_service_1=__webpack_require__(508);let UserService=class UserService{constructor(prisma){this.prisma=prisma}findMany(){return this.prisma.user.findMany()}findOne(id){return this.prisma.user.findUnique({where:{id},rejectOnNotFound:()=>new common_1.NotFoundException})}};UserService=(0,tslib_1.__decorate)([(0,common_1.Injectable)(),(0,tslib_1.__metadata)("design:paramtypes",["function"==typeof(_a=void 0!==prisma_service_1.PrismaService&&prisma_service_1.PrismaService)?_a:Object])],UserService),exports.UserService=UserService},481:module=>{module.exports=require("@nestjs/common")},143:module=>{module.exports=require("@nestjs/core")},663:module=>{module.exports=require("@nestjs/terminus")},524:module=>{module.exports=require("@prisma/client")},581:module=>{module.exports=require("nestjs-pino")},752:module=>{module.exports=require("tslib")}},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={exports:{}};return __webpack_modules__[moduleId](module,module.exports,__webpack_require__),module.exports}var __webpack_exports__={};(()=>{var exports=__webpack_exports__;Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=__webpack_require__(752),common_1=__webpack_require__(481),core_1=__webpack_require__(143),app_module_1=__webpack_require__(343),environment_1=__webpack_require__(658);(function(){return(0,tslib_1.__awaiter)(this,void 0,void 0,(function*(){const app=yield core_1.NestFactory.create(app_module_1.AppModule),port=process.env.PORT||3333;app.enableCors({origin:environment_1.environment.corsOrigin}),yield app.listen(port),common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}`)}))})().catch(common_1.Logger.error)})();var __webpack_export_target__=exports;for(var i in __webpack_exports__)__webpack_export_target__[i]=__webpack_exports__[i];__webpack_exports__.__esModule&&Object.defineProperty(__webpack_export_target__,"__esModule",{value:!0})})();
//# sourceMappingURL=main.js.map