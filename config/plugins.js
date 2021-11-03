module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("pomellolab"),
      api_key: env("922474225723822"),
      api_secret: env("D8hH7plHuciUz1VYECWdNYS9hA0"),
    },
  },
  // ...
});
