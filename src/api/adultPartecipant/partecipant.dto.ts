import { IsBoolean, IsMongoId, IsNumber, IsOptional, IsString } from "class-validator";


export class AddPartecipantDTO{

    @IsBoolean()
    @IsOptional()
    axeraCode: boolean;


    @IsString()
    firstName: string
    
    @IsString()
    lastName: string;

    @IsNumber()
    age:number;

    @IsString()
    address: string;

    @IsString()
    nationalInsuranceNumber: string;

    @IsString()
    email: string;

    @IsNumber()
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

}

export class getOnePartecipantDTO{

    @IsMongoId()
    partecipantId: string;
}