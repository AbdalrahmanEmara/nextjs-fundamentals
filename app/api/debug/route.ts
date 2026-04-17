export async function GET() {
  return Response.json({
    hasJwtSecret: !!process.env.JWT_SECRET,
    jwtSecretLength: process.env.JWT_SECRET?.length ?? 0,
    first6chars: process.env.JWT_SECRET?.slice(0, 6) ?? 'NOT SET',
  })
}