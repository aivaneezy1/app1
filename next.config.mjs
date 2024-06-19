/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["avatars.githubusercontent.com"],
    },
     experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
