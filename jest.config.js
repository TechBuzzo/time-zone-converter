module.exports = {
    verbose: true,                  // Muestra información detallada durante las pruebas
    testEnvironment: 'node',        // Establece el entorno de pruebas como 'node' (ideal para pruebas backend)
    //setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],  // Rutas a módulos que se ejecutan después de que el entorno de prueba se ha instalado
    //setupFiles: ['jest-fetch-mock'],
    testPathIgnorePatterns: ['/node_modules/'],  // Ignora los directorios al buscar tests
    transform: {                    // Transformaciones para procesar archivos antes de ejecutarlos
        '^.+\\.(js|jsx)$': 'babel-jest', // Transforma archivos JavaScript usando Babel
    },
    collectCoverage: true,          // Habilita la recolección de información de cobertura
    collectCoverageFrom: [          // Especifica los archivos para los cuales se debe recoger cobertura
        'src/**/*.js',
        '!src/index.js',              // Excluye archivos específicos de la cobertura
    ],
    coverageDirectory: './coverage', // Directorio donde se almacenará la cobertura
    coverageReporters: ['text', 'lcov'], // Formatos de reporte de cobertura
};