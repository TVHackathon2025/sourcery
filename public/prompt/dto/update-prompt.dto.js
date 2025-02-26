"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePromptDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_prompt_dto_1 = require("./create-prompt.dto");
class UpdatePromptDto extends (0, mapped_types_1.PartialType)(create_prompt_dto_1.CreatePromptDto) {
}
exports.UpdatePromptDto = UpdatePromptDto;
//# sourceMappingURL=update-prompt.dto.js.map