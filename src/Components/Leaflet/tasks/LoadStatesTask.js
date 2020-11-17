import { features } from '../data/gz_2010_us_040_00_500k.json';
// data comes from https://eric.clst.org/tech/usgeojson/

class LoadStatesTask {
    load = (setState) => {
        setState(features);
    }
}

export default LoadStatesTask;