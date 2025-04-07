import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty()
  idUser: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  imageUrl: string;
}
