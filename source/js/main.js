import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initProjectsSlider} from './modules/init-projets-slider';
import {initWorkPrinciplesSlider} from './modules/init-work-principles-slider';
import {initCompanySlider} from './modules/init-company-slider';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------
initProjectsSlider();
initWorkPrinciplesSlider();
initCompanySlider();
