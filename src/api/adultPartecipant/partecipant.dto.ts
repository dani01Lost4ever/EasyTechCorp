import { Type } from "class-transformer";
import { IsBoolean, IsBooleanString, IsMongoId, IsNumber, IsOptional, IsString, Min } from "class-validator";


export class AddPartecipantDTO{

    @IsString()
    @IsOptional()
    axeraCode: string;


    @IsString()
    firstName: string
    
    @IsString()
    lastName: string;

    @IsNumber()    
    @Type(() => Number)
    @Min(18)
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
    
    @IsMongoId()
    tipologyId: string;

    
    @IsBoolean()
    @IsOptional()
    iscriptionForm: boolean;
    
    @IsBoolean()
    @IsOptional()
    privacyAccepted: boolean;
    
    @IsBoolean()
    @IsOptional()
    imageReleaseAccepted: boolean;
    
    @IsBoolean()
    @IsOptional()
    paymentDone: boolean;
    
    @IsBoolean()
    @IsOptional()
    paymentVerified: boolean;
}

export class findPartecipantDTO{

  
    @IsMongoId()
    @IsOptional()
    tipologyId: string;
    
    @IsBoolean()
    @IsOptional()
    iscriptionForm: boolean;
    
    @IsBoolean()
    @IsOptional()
    privacyAccepted: boolean;
    
    @IsBoolean()
    @IsOptional()
    imageReleaseAccepted: boolean;
    
    @IsBoolean()
    @IsOptional()
    paymentDone: boolean;
    
    @IsBoolean()
    @IsOptional()
    paymentVerified: boolean;
}

export class getOnePartecipantDTO{

    @IsMongoId()
    partecipantId: string;
}

export class updateDTO{

  
    @IsMongoId()
    @IsOptional()
    partecipantId: string;
    
    @IsBooleanString()
    @IsOptional()
    iscriptionForm: boolean;
    
    @IsBooleanString()
    @IsOptional()
    privacyAccepted: boolean;
    
    @IsBooleanString()
    @IsOptional()
    imageReleaseAccepted: boolean;
    
    @IsBooleanString()
    @IsOptional()
    paymentDone: boolean;
    
    @IsBooleanString()
    @IsOptional()
    paymentVerified: boolean;
}