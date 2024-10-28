import OpenAI from 'openai';
import { Inject } from '@nestjs/common';
import { GenerateChatProtocol } from '../../protocols/generate-chat.protocol';
import { OpenaiModel } from '../../domain/model/openai.model';
import { ConfigService } from '@nestjs/config';

export class OpenAIImplementation implements GenerateChatProtocol {
  constructor(
    @Inject('OPENAI_PROVIDER')
    private readonly openai: OpenAI,
    private readonly configService: ConfigService,
  ) {}
  generateChat: (prompt: OpenaiModel.ToCreateChat) => Promise<string>;

  async genetateChat(prompt: OpenaiModel.ToCreateChat): Promise<string> {
    const { messages } = prompt;
    const response = await this.openai.chat.completions.create({
      model: this.configService.get('OPENAI_MODEL'),
      max_tokens: this.configService.get('OPENAI_MAX_TOKENS'),
      temperature: this.configService.get('OPENAI_TEMPERATURE'),
      messages,
    });
    return response.choices[0].message.content || '';
  }
}
