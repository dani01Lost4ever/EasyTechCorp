import { Type } from "class-transformer";
import {
  IsBoolean,
  IsMongoId,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from "class-validator";

export class AddUPartecipantDTO {
  @IsNumber()
  @IsOptional()
  axeraCode: boolean;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsNumber()
  @Type(() => Number)
  @Min(1)
  age: number;

  @IsString()
  address: string;

  @IsString()
  nationalInsuranceNumber: string;

  @IsString()
  @IsOptional()
  email: string;

  @IsNumber()
  @Type(() => Number)
  @Min(1)
  @IsOptional()
  telephoneNumber: number;

  @IsString()
  tipology: string;
}

export class getOnePartecipantDTO {
  @IsMongoId()
  partecipantId: string;
}
