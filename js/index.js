import settings from './settings/settings';

import Mediator from './Mediator';

const mediator = new Mediator(settings);

mediator.start();