export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get("nama");
    const password = data.get("password");
    const email = data.get("email");
    const headers = new Headers();
    headers.append("Set-Cookie", `dataSent=true; Max-Age=10; Path=/`);
    console.log(headers.get("Set-Cookie"));
    return new Response(JSON.stringify({ message: "Scam", name, password, email }), { headers });
  } catch (err) {
    return new Response(JSON.stringify({ message: "Error", err }));
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
