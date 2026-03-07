import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../chunks/astro/server_DM4J3xSo.mjs';
import 'piccolore';
import { c as content, $ as $$Layout } from '../chunks/Layout_CyEU68NL.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Story = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Story;
  const lang = Astro2.url.searchParams.get("lang") || "zh";
  const currentContent = content[lang] || content["zh"];
  const { story } = currentContent;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": story.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col items-center"> <div class="max-w-3xl w-full relative"> <!-- Vertical Line --> <div class="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[1px] bg-zinc-200 origin-top scale-y-0" id="timeline-line"></div> <div class="space-y-24 py-12"> ${story.events.map((event, index) => renderTemplate`<div class="timeline-item relative flex flex-col items-center text-center opacity-0 translate-y-8"> <!-- Dot --> <div class="w-3 h-3 rounded-full bg-zinc-900 mb-6 z-10 ring-4 ring-white"></div> <div class="font-display text-3xl md:text-4xl text-zinc-800 mb-2"> ${event.date} </div> <h3 class="font-body font-bold text-lg tracking-widest uppercase text-zinc-500 mb-4"> ${event.title} </h3> <p class="font-body font-light text-zinc-600 max-w-md leading-relaxed"> ${event.description} </p> </div>`)} </div> </div> </main> ` })} ${renderScript($$result, "/Volumes/SanXiaoXing/Blog/Code/MyLover/src/pages/story.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/SanXiaoXing/Blog/Code/MyLover/src/pages/story.astro", void 0);

const $$file = "/Volumes/SanXiaoXing/Blog/Code/MyLover/src/pages/story.astro";
const $$url = "/story";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Story,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
