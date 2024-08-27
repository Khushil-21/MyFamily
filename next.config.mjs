/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        ppr: 'incremental',
        after: true,
        reactCompiler: true,
    },

};

export default nextConfig;
