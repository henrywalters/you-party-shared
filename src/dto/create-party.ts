import {IsOptional, IsString} from "class-validator";

class CreateParty {
    @IsOptional()
    @IsString()
    name!: string | null;
}

export { CreateParty }