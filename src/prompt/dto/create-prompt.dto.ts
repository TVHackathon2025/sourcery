export class CreatePromptDto {
    private THIS_is_myVariable:string;

    public obtenerVariable(): string {
        const a = this.THIS_is_myVariable;
        return a;
    }
}
