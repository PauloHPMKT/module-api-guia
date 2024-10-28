export namespace OpenaiModel {
  export class ToCreateChat {
    messages: CreateMessageDto[];
  }

  class CreateMessageDto {
    role: ChatRole;
    content: string | null;
  }

  export enum ChatRole {
    SYSTEM = 'system',
    USER = 'user',
  }
}
