"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptController = void 0;
const common_1 = require("@nestjs/common");
const prompt_service_1 = require("./prompt.service");
const create_prompt_dto_1 = require("./dto/create-prompt.dto");
const update_prompt_dto_1 = require("./dto/update-prompt.dto");
let PromptController = class PromptController {
    constructor(promptService) {
        this.promptService = promptService;
    }
    create(createPromptDto) {
        return this.promptService.create(createPromptDto);
    }
    findAll() {
        return this.promptService.findAll();
    }
    findOne(id) {
        return this.promptService.findOne(+id);
    }
    update(id, updatePromptDto) {
        return this.promptService.update(+id, updatePromptDto);
    }
    remove(id) {
        return this.promptService.remove(+id);
    }
};
exports.PromptController = PromptController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_prompt_dto_1.CreatePromptDto]),
    __metadata("design:returntype", void 0)
], PromptController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PromptController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PromptController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_prompt_dto_1.UpdatePromptDto]),
    __metadata("design:returntype", void 0)
], PromptController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PromptController.prototype, "remove", null);
exports.PromptController = PromptController = __decorate([
    (0, common_1.Controller)('prompt'),
    __metadata("design:paramtypes", [prompt_service_1.PromptService])
], PromptController);
//# sourceMappingURL=prompt.controller.js.map