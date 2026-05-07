import dotenv from 'dotenv';

dotenv.config();

//DHIS2 Configuration
export const DHIS2_BASE_URL = process.env.DHIS2_BASE_URL || '';
export const DHIS2_USERNAME = process.env.DHIS2_USERNAME || '';
export const DHIS2_PASSWORD = process.env.DHIS2_PASSWORD || '';

//Hermes Agent Configuration
export const HERMES_AGENT_NAME =
  process.env.HERMES_AGENT_NAME || 'hermes-agent';
export const HERMES_AGENT_BASE_URL =
  process.env.HERMES_AGENT_BASE_URL || 'http://localhost:8642';
export const HERMES_AGENT_KEY = process.env.HERMES_AGENT_KEY || '';
