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
exports.FilesUploadController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const files_upload_service_1 = require("./files-upload.service");
const platform_express_1 = require("@nestjs/platform-express");
const auth_guard_1 = require("../Auth/guards/auth.guard");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../decorators/roles.decorator");
const roles_enum_1 = require("../roles.enum");
let FilesUploadController = class FilesUploadController {
    constructor(filesUploadService) {
        this.filesUploadService = filesUploadService;
    }
    async uploadImage(productId, file) {
        return this.filesUploadService.uploadProductImage(file, productId);
    }
};
exports.FilesUploadController = FilesUploadController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    (0, common_1.Post)('uploadImage/:productId'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Param)('productId')),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({
                maxSize: 200000,
                message: `El tamaño del archivo no debe superar los 200 KB`
            }),
            new common_1.FileTypeValidator({
                fileType: /(jpeg|png|gif|bmp|webp|svg\+xml)$/
            })
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FilesUploadController.prototype, "uploadImage", null);
exports.FilesUploadController = FilesUploadController = __decorate([
    (0, common_1.Controller)('files'),
    __metadata("design:paramtypes", [files_upload_service_1.FilesUploadService])
], FilesUploadController);
//# sourceMappingURL=files-upload.controller.js.map