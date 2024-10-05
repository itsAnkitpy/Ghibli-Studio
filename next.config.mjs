/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['replicate.delivery','picsum.photos']
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'replicate.delivery',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'picsum.photos',
          pathname: '**',
        },
      ],
  },
}

export default nextConfig
