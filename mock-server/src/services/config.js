import {
  isBoolean,
  isNumber,
  isObject,
  loadJSONFromFile,
  updateFile
} from '../utility';

const CONFIG_OVERRIDE_PATH = 'config.json';
const DEFAULT_CONFIG = {
  port: 3002,
  delay: 0,
  delayUrls: [],
  log: false,
  error: false,
  overrideUrls: [],
  overrideStatusCode: 200,
  overrideResponse: {}
};

const constructValidConfig = (payloadConfig) => {
  const existingConfig = loadConfiguration();

  const port = isNumber(payloadConfig.port) ? payloadConfig.port : existingConfig.port;
  const delay = isNumber(payloadConfig.delay) ? payloadConfig.delay : existingConfig.delay;
  const delayUrls = Array.isArray(payloadConfig.delayUrls) ? payloadConfig.delayUrls : existingConfig.delayUrls;
  const log = isBoolean(payloadConfig.log) ? payloadConfig.log : existingConfig.log;
  const logfile = isBoolean(payloadConfig.logfile) ? payloadConfig.logfile : existingConfig.logfile;
  const error = isBoolean(payloadConfig.error) ? payloadConfig.error : existingConfig.error;
  const overrideUrls = Array.isArray(payloadConfig.overrideUrls) ? payloadConfig.overrideUrls : existingConfig.overrideUrls;
  const overrideStatusCode = isNumber(payloadConfig.overrideStatusCode) ? payloadConfig.overrideStatusCode : existingConfig.overrideStatusCode;
  const overrideResponse = isObject(payloadConfig.overrideResponse) ? payloadConfig.overrideResponse : existingConfig.overrideResponse;

  return {
    port,
    delay,
    delayUrls,
    log,
    logfile,
    error,
    overrideUrls,
    overrideStatusCode,
    overrideResponse
  };
};

const loadConfiguration = () => {
  const configFile = loadJSONFromFile(CONFIG_OVERRIDE_PATH, DEFAULT_CONFIG);
  const parsedConfigFile = {
    ...DEFAULT_CONFIG,
    ...configFile
  };

  return parsedConfigFile;
};

const updateConfiguration = (payloadConfig) => {
  const updatedConfig = constructValidConfig(payloadConfig);

  return updateFile(CONFIG_OVERRIDE_PATH, updatedConfig);
};

export {
  loadConfiguration,
  updateConfiguration
};