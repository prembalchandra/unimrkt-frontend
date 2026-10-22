module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'admin-secret-unimrkt-fallback'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'token-salt-unimrkt-fallback'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'transfer-salt-unimrkt-fallback'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
