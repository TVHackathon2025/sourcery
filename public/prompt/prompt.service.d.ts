import { CreatePromptDto } from './dto/create-prompt.dto';
import { UpdatePromptDto } from './dto/update-prompt.dto';
export declare class PromptService {
    create(createPromptDto: CreatePromptDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePromptDto: UpdatePromptDto): string;
    remove(id: number): string;
}
