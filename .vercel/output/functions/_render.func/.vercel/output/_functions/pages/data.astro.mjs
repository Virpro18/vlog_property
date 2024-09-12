import { c as createComponent, r as renderTemplate, d as renderComponent, e as renderHead, b as createAstro } from '../chunks/astro/server_bgHAYVtm.mjs';
import 'kleur/colors';
import { $ as $$ViewTransitions } from '../chunks/ViewTransitions_BsTKKyO_.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Data = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Data;
  const { headers } = Astro2.request;
  const cookie = headers.get("cookie");
  const dataSent = cookie && cookie.includes("dataSent=true");
  console.log(dataSent);
  if (!dataSent) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/"
        // Ganti dengan halaman yang diinginkan
      }
    });
  }
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> <h1>Selamat, Anda bisa mengakses halaman ini!</h1> </body></html><!-- Konten halaman /data jika data sudah dikirim -->`;
}, "/home/arona/tugas/vlog_web_property/src/pages/data.astro", void 0);

const $$file = "/home/arona/tugas/vlog_web_property/src/pages/data.astro";
const $$url = "/data";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Data,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
