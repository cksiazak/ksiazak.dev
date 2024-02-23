import type { NextApiRequest, NextApiResponse } from 'next'
import { sql } from '@vercel/postgres'
import geoIp from 'geoip2-api'

type ResponseData = {
  message: string
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const userAgent = req.headers['user-agent'] as string
  const ipAddress = req.headers['x-forwarded-for'] as string
  const ipData = ipAddress ? await geoIp.get(ipAddress) : null

  const isNone = 'None'

  await sql`INSERT INTO Meta
      (ip, user_agent, city, country, created_at)
      VALUES (
        ${ipAddress ?? isNone},
        ${userAgent ?? isNone},
        ${ipData ? ipData?.data?.city ?? isNone : isNone},
        ${ipData ? ipData?.data?.country ?? isNone : isNone},
        CURRENT_TIMESTAMP
      );
    `
  res.status(200)
}
