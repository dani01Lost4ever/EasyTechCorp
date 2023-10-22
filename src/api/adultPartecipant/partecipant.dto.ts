import { Type } from "class-transformer";
import { IsBoolean, IsMongoId, IsNumber, IsOptional, IsString, Min } from "class-validator";


export class AddPartecipantDTO{

    @IsBoolean()
    @IsOptional()
    axeraCode: boolean;


    @IsString()
    firstName: string
    
    @IsString()
    lastName: string;

    @IsNumber()    
    @Type(() => Number)
    @Min(1)
    age:number;

    @IsString()
    address: string;

    @IsString()
    nationalInsuranceNumber: string;

    @IsString()
    email: string;

    @IsNumber()
    @Type(() => Number)
    @Min(1)
    telephoneNumber:number;
    
    @IsString()
    tipology: string;

    
    @IsBoolean()
    iscriptionForm: boolean;
    
    @IsBoolean()
    privacyAccepted: boolean;
    
    @IsBoolean()
    imageReleaseAccepted: boolean;
    
    @IsBoolean()
    paymentDone: boolean;
}

export class findPartecipantDTO{

    @IsBoolean()
    @IsOptional()
    iscriptionForm: boolean;
}

export class getOnePartecipantDTO{

    @IsMongoId()
    partecipantId: string;
}