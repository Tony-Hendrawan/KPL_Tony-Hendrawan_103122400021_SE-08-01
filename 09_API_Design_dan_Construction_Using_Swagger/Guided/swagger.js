import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Film Pribadi',
            version: '1.0.0',
            description: 'Sebuah API sederhana tentang film-film pribadi yang saya miliki',
        },
        servers: [
            {
                url: 'http://localhost:8000',
            },
        ],
    },
    apis: ['app.js'],
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };