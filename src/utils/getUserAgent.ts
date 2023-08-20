import { GetServerSidePropsContext } from "next";

export function getUserAgentSSR(ctx: GetServerSidePropsContext) {
  const userAgent = ctx.req.headers['user-agent'];
  
  const isMobile = /(iPad|iPhone|Android|Mobile)/i.test(userAgent || "") || false
  
  return isMobile;
}