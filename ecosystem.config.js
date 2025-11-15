module.exports = {
  apps: [
    {
      name: 'review-platform',
      script: 'server.js',
      cwd: '/www/wwwroot/frontend',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        NEXT_PUBLIC_WORDPRESS_URL: 'https://pagcorcasino.ph',
      },
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      max_memory_restart: '512M',
    },
  ],
};
