export const config = {
    user: 'abnernunesnetto1',
    key: 'JMDYyLpxevbVzLm5pGKv',
    hostname: 'hub.browserstack.com',
    specs: [
        './test/specs/**/**.e2e.js'
       ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
            'bstack:options': {
            deviceName: 'Samsung Galaxy S22 Ultra',
            platformVersion: '12.0',
            platformName: 'android'
           }
           
    }],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['browserstack', {
        app: '',
        testObservability: false,
        testObservabilityOptions: {
        user: '',
        key: ''
       },
        browserstackLocal: false
       }]
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
