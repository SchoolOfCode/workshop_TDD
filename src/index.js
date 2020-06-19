import {
  newLogger,
} from '@travel-cloud/simple-lambda-logger';

const logger = newLogger();

const exampleOneEntryPoint = ({
  event,
},
logToConsole = true) => {
  if (logToConsole) {
    logger.debug('Example One Entry Point invoked');
    logger.info(`Invoked with event: ${JSON.stringify(event)}`);
  }

  // Pass in an object

  // Invoke a thing with object

  // Thing should default a var

  // Object could contain a null value

  // Return updated version of Object
  return event;
};

export default exampleOneEntryPoint;
