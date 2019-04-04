export const ENVIRONMENT =
{
    SERVER_PORT: process.env.PORT || 3001,
    BD_URL_CONNECTION:
    {
        TESTING:'',
        DEVELOPING: 'mongodb+srv://eva:123@cluster0-jicnc.mongodb.net/test?retryWrites=true',
        PRODUCTION: ''
    },
    ROUTES_MAIN_MODULES:
    {
        INDEX: '/'
    }
}