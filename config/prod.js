module.exports = {
    google: {
        oauth: {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }
    },
    facebook: {
        oauth: {
            clientID: '796937408888-769llh0bafqbhgq74c97n1lqsvboall2.apps.googleusercontent.com',
            clientSecret: 'xzJZcJhHEotPl3D96QDiNf8r'
        }
    },
    mlab: {
        uri: {
            link: process.env.MONGO_URI
        }
    },
    cookies: {
        first: process.env.COOKIE_FIRST,
        second: process.env.COOKIE_SECOND,
        third: process.env.COOKIE_THIRD
    },
    secreteOrKey: process.env.SECRETE_KEY
};