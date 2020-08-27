import Constants from 'expo-constants';

const PRODUCTION = "production"
const STAGING = "staging"

const ENV = {
    dev: {
        iosClientId: "610625025554-v66ua61qoglh8q7k49ivd9f59svf7ave.apps.googleusercontent.com",
        androidClientId: "610625025554-h7acvrmb0ul49et1205i2f4rjr92r065.apps.googleusercontent.com",
        iosStandaloneAppClientId: "610625025554-v66ua61qoglh8q7k49ivd9f59svf7ave.apps.googleusercontent.com",
        androidStandaloneAppClientId: "610625025554-h7acvrmb0ul49et1205i2f4rjr92r065.apps.googleusercontent.com"
    },
    staging: {
        iosClientId: null,
        androidClientId: null,
        iosStandaloneAppClientId: null,
        androidStandaloneAppClientId: null
    },
    production: {
        iosClientId: null,
        androidClientId: null,
        iosStandaloneAppClientId: null,
        androidStandaloneAppClientId: null
    }
};

export default (env = Constants.manifest.releaseChannel) => {
    if (__DEV__) {
        return ENV.dev;
    }
    else if (env === STAGING) {
        return ENV.staging;
    }
    else if (env === PRODUCTION) {
        return ENV.production;
    }
}