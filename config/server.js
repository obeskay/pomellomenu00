module.exports = ({ env }) => ({
  url: env("MY_HEROKU_URL"),
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "2a57741fb7c83f540892856a7a01c350"),
    },
  },
});
