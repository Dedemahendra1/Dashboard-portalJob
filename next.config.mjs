/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'xqwywcuxtibxjmmqrzub.supabase.co',
                pathname: '/storage/v1/object/public/company/public/**',
            },
        ],
    },
};

export default nextConfig;
