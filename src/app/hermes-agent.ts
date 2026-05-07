import axios from 'axios';
import {
  HERMES_AGENT_BASE_URL,
  HERMES_AGENT_KEY,
  HERMES_AGENT_NAME
} from '../config';
import { AiUtil } from '../utils';

export class HermesAgent {
  private aiInputData: any;
  constructor(data: any) {
    this.aiInputData = data;
  }
  async run() {
    const aiPrompt = AiUtil.getAIPrompt(this.aiInputData);
    const response = await this.getResponse(aiPrompt);
    console.log(response);
  }

  async getResponse(prompt: string) {
    let AiResponse = '';
    try {
      const response = await axios.post(
        `${HERMES_AGENT_BASE_URL}/v1/chat/completions`,
        {
          model: HERMES_AGENT_NAME,
          messages: [
            {
              role: 'user',
              content: prompt
            }
          ]
        },
        {
          headers: {
            Authorization: `Bearer ${HERMES_AGENT_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );
      const choises = response.data.choices || [];
      for (const choice of choises) {
        const message = choice.message || {};
        const messageContent = message.content || '';
        AiResponse += messageContent + '\n';
      }
    } catch (error) {
      console.error('Error getting response from Hermes Agent:', error);
    }
    return AiResponse;
  }
}
