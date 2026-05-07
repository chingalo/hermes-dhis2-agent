import { Dhis2Process, HermesAgent } from '.';

export class AppProcess {
  async startAppProcess() {
    try {
      const dhis2Process = new Dhis2Process();
      const data = await dhis2Process.getAnalytics();
      const hermesAgent = new HermesAgent(data);
      await hermesAgent.run();
    } catch (error) {
      console.log({ error });
    }
  }
}
