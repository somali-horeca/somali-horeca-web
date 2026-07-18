import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// TEMPORARY: shows a generic 404 for every route.
// To restore the real site, delete this file and push again.
export function proxy(request: NextRequest) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>404: This page could not be found.</title>
</head>
<body style="margin:0; font-family:-apple-system,Helvetica,Arial,sans-serif; background:#fff; color:#000; min-height:100vh; display:flex; align-items:center; justify-content:center;">
  <div style="display:flex; align-items:center;">
    <h1 style="margin:0; padding-right:23px; font-size:24px; font-weight:500; border-right:1px solid rgba(0,0,0,.3);">404</h1>
    <div style="padding-left:23px;">
      <h2 style="margin:0; font-size:14px; font-weight:400; line-height:28px;">This page could not be found.</h2>
    </div>
  </div>
</body>
</html>`;

  return new NextResponse(html, {
    status: 404,
    headers: { "Content-Type": "text/html" },
  });
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|icon.png).*)",
};
