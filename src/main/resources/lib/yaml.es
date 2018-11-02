import {shim} from 'array.prototype.find'; // Needed by yaml

shim();
import yaml from 'yaml'; // eslint-disable-line import/first

export default yaml;
