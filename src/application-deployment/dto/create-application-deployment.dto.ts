import { IsNotEmpty, IsString } from 'class-validator';

export class CreateApplicationDeploymentDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsNotEmpty()
  applicationenvironment: string;
}
