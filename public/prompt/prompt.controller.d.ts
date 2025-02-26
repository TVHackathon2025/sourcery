import { PromptService } from './prompt.service';
import { CreatePromptDto } from './dto/create-prompt.dto';
import { UpdatePromptDto } from './dto/update-prompt.dto';
export declare class PromptController {
    private readonly promptService;
    constructor(promptService: PromptService);
    create(createPromptDto: CreatePromptDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePromptDto: UpdatePromptDto): string;
    remove(id: string): string;
}
