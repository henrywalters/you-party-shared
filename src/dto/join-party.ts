import { IsString, IsOptional, IsNumber } from "class-validator";

class JoinParty {
    @IsString()
    @IsOptional()
    key!: string;

    @IsNumber()
    @IsOptional()
    id!: number;
}

export {JoinParty}