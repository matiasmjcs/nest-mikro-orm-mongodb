import { IsNotEmpty, IsString } from 'class-validator';

export class CreateApplicationEnvironmentDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsNotEmpty()
  application: string;
}
