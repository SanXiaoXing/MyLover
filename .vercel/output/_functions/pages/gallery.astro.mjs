import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_DM4J3xSo.mjs';
import 'piccolore';
import { c as content, $ as $$Layout, g as galleryImages } from '../chunks/Layout_CyEU68NL.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gallery;
  const lang = Astro2.url.searchParams.get("lang") || "zh";
  const currentContent = content[lang] || content["zh"];
  const { gallery } = currentContent;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": gallery.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full min-h-screen pt-32 pb-20 px-6 md:px-12"> <div class="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 max-w-6xl mx-auto"> ${galleryImages.map((src, index) => renderTemplate`<div class="gallery-item break-inside-avoid relative group overflow-hidden rounded-lg opacity-0 translate-y-12"> <img${addAttribute(src, "src")}${addAttribute(`Gallery image ${index + 1}`, "alt")} class="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-105" loading="lazy"> <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div> </div>`)} </div> </main> ` })} ${renderScript($$result, "/Volumes/SanXiaoXing/Blog/Code/MyLover/src/pages/gallery.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/SanXiaoXing/Blog/Code/MyLover/src/pages/gallery.astro", void 0);

const $$file = "/Volumes/SanXiaoXing/Blog/Code/MyLover/src/pages/gallery.astro";
const $$url = "/gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gallery,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
