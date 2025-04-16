import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< HEAD
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'img.clerk.com',
            },
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 'res-console.cloudinary.com',
            },

        ],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    }
=======
  /* config options here */
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'images.unsplash.com',
        },
        {
            protocol: 'https',
            hostname: 'plus.unsplash.com',
        },
        {
            protocol: 'https',
            hostname: 'img.clerk.com',
        },
        {
            protocol: 'https',
            hostname: 'img.freepik.com',
        },
        {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
        },
    ],
},
eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
>>>>>>> 474d7cf81f2ae6e996c5c994db012bf453ae89d6
};

export default nextConfig;
