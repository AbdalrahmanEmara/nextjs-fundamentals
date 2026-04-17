import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    // dynamicIO: true,
    cacheComponents: true,
  },
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
}

export default nextConfig
