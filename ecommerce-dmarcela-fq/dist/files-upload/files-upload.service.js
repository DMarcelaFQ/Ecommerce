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
exports.FilesUploadService = void 0;
const common_1 = require("@nestjs/common");
const files_upload_repository_1 = require("./files-upload.repository");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const products_entity_1 = require("../entities/products.entity");
let FilesUploadService = class FilesUploadService {
    constructor(filesUploadRepository, productsRepository) {
        this.filesUploadRepository = filesUploadRepository;
        this.productsRepository = productsRepository;
    }
    async uploadProductImage(file, productId) {
        const product = await this.productsRepository.findOne({
            where: { id: productId }
        });
        if (!product) {
            throw new common_1.NotFoundException(`Producto con ID ${productId} no encontrado.`);
        }
        ;
        const uploadImage = await this.filesUploadRepository.uploadImage(file);
        await this.productsRepository.update(product.id, { imgUrl: uploadImage.secure_url });
        const productUpdated = await this.productsRepository.findOneBy({ id: productId });
        return {
            message: `La imagen del producto con ID ${product.id} fue actualizada.`,
            productUpdated
        };
    }
};
exports.FilesUploadService = FilesUploadService;
exports.FilesUploadService = FilesUploadService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(products_entity_1.Product)),
    __metadata("design:paramtypes", [files_upload_repository_1.FilesUploadRepository,
        typeorm_2.Repository])
], FilesUploadService);
//# sourceMappingURL=files-upload.service.js.map