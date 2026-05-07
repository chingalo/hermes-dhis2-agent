import { DHIS2_BASE_URL, DHIS2_PASSWORD, DHIS2_USERNAME } from '../config';
import { HttpUtil } from '../utils';

export class Dhis2Process {
  private _headers: {
    Authorization: string;
    'Content-Type': string;
  };
  private _baseUrl: string;

  constructor() {
    const username = DHIS2_USERNAME || '';
    const password = DHIS2_PASSWORD || '';
    this._headers = {
      'Content-Type': 'application/json',
      Authorization:
        'Basic ' + Buffer.from(`${username}:${password}`).toString('base64')
    };
    this._baseUrl = DHIS2_BASE_URL || '';
  }

  async getAnalytics() {
    const url = `${this._baseUrl}/api/analytics.json?dimension=dx:Uvn6LCg7dVU;ReUHfIn0pTQ&dimension=pe:LAST_12_MONTHS&dimension=ou:LEVEL-2`;
    const data = await HttpUtil.getHttp(this._headers, url);
    return data;
  }
}
