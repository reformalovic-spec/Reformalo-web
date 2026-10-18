/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    // Ruta heredada de la web anterior.
    return [{ source: "/presupuesto", destination: "/contacto", permanent: true }];
  },
};

export default nextConfig;
