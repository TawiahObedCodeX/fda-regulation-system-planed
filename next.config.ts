/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    '192.168.0.161',     // Your current IP
    'localhost',
    '127.0.0.1'
  ],
};

module.exports = nextConfig;