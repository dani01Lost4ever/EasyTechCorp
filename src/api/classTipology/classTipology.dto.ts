import { IsMongoId, IsString } from 'class-validator';

export class AddClassTipologyDTO {
    @IsString()
    title: string;

}

export class ListIdDTO{
    @IsString()
    @IsMongoId()
    id: string;
}