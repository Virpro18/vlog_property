import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get("nama");
    const password = data.get("password");
    const email = data.get("email");

    // Set cookie menandakan data telah dikirim
    const headers = new Headers();
    headers.append("Set-Cookie", `dataSent=true; Max-Age=10; Path=/`);
    console.log(headers.get("Set-Cookie"))

    return new Response(JSON.stringify({ message: "Scam", name, password, email }), { headers });
  } catch (err) {
    return new Response(JSON.stringify({ message: "Error", err }));
  }
};
