export class AiUtil {
  static getAIPrompt(inputData: any): string {
    return `
        You are a DHIS2 analytics assistant.
        Analyze the following DHIS2 data and generate:
        1. Executive summary
        2. Key trends
        3. Best performing areas
        4. Worst performing areas
        5. Recommendations
        Data: ${JSON.stringify(inputData)}
        `;
  }
}
