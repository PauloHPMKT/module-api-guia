import { OpenaiModel } from '../domain/model/openai.model';

export interface GenerateChatProtocol {
  generateChat: (prompt: OpenaiModel.ToCreateChat) => Promise<string>;
}
