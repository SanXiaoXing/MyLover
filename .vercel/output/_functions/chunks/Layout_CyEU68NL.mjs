import { e as createComponent, m as maybeRenderHead, g as addAttribute, l as renderScript, r as renderTemplate, h as createAstro, o as renderHead, k as renderComponent, p as renderSlot } from './astro/server_DM4J3xSo.mjs';
import 'piccolore';
/* empty css                           */
import 'clsx';

const galleryImages = [
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=600&auto=format&fit=crop"
];
const content = {
  zh: {
    nav: {
      story: "故事",
      gallery: "画廊",
      contact: "联系我"
    },
    story: {
      title: "我们的故事",
      events: [
        {
          date: "2000.08.02",
          title: "我的开始",
          description: "世界变得更加明亮的那一天。一颗注定闪耀的星星诞生了。"
        },
        {
          date: "未来",
          title: "未完待续",
          description: "每一个明天都是我们将共同书写的空白页。最好的尚未到来。"
        }
      ]
    },
    gallery: {
      title: "我们的画廊"
    },
    lifeTimer: {
      calculating: "计算中...",
      love: "恋爱 ${d} 天 ${h} 小时 ${m} 分",
      life: "我已经生活了 ${d} 天 ${h} 小时 ${m} 分"
    }
  },
  en: {
    nav: {
      story: "Story",
      gallery: "Gallery",
      contact: "Contact"
    },
    story: {
      title: "Our Story",
      events: [
        {
          date: "2000.08.02",
          title: "I Beginning",
          description: "The day the world became a little brighter. A star was born, destined to shine."
        },
        {
          date: "Future",
          title: "Unwritten",
          description: "Every tomorrow is a blank page we will write together. The best is yet to come."
        }
      ]
    },
    gallery: {
      title: "Our Gallery"
    },
    lifeTimer: {
      calculating: "Calculating...",
      love: "In love for ${d} days ${h} hours ${m} mins",
      life: "I have lived for ${d} days ${h} hours ${m} mins"
    }
  }
};

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const lang = Astro2.url.searchParams.get("lang") || "zh";
  const currentContent = content[lang] || content["zh"];
  const { nav } = currentContent;
  const getLangLink = (targetLang) => {
    const url = new URL(Astro2.url);
    url.searchParams.set("lang", targetLang);
    return url.pathname + url.search;
  };
  const getNavLink = (path) => {
    const separator = path.includes("?") ? "&" : "?";
    return `${path}${separator}lang=${lang}`;
  };
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 md:py-6 flex justify-between items-center mix-blend-difference text-white opacity-0" id="main-header" data-astro-cid-3ef6ksr2> <div class="logo font-display text-2xl tracking-widest uppercase cursor-pointer hover:opacity-70 transition-opacity" data-astro-cid-3ef6ksr2> <a${addAttribute(getNavLink("/"), "href")} data-astro-cid-3ef6ksr2>Lover</a> </div> <nav class="hidden md:flex gap-8 font-light text-sm tracking-widest uppercase items-center" data-astro-cid-3ef6ksr2> <a${addAttribute(getNavLink("/story"), "href")} class="hover:text-zinc-400 transition-colors relative group" data-astro-cid-3ef6ksr2> ${nav.story} <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" data-astro-cid-3ef6ksr2></span> </a> <a${addAttribute(getNavLink("/gallery"), "href")} class="hover:text-zinc-400 transition-colors relative group" data-astro-cid-3ef6ksr2> ${nav.gallery} <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" data-astro-cid-3ef6ksr2></span> </a> <a${addAttribute(`mailto:your@email.com`, "href")} class="hover:text-zinc-400 transition-colors relative group" data-astro-cid-3ef6ksr2> ${nav.contact} <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" data-astro-cid-3ef6ksr2></span> </a> <!-- Language Switcher --> <div class="ml-4 flex gap-2 text-xs opacity-80 z-50 relative pointer-events-auto" data-astro-cid-3ef6ksr2> <a${addAttribute(getLangLink("zh"), "href")}${addAttribute(`hover:opacity-100 transition-opacity ${lang === "zh" ? "font-bold opacity-100" : ""}`, "class")} data-astro-cid-3ef6ksr2>CN</a> <span data-astro-cid-3ef6ksr2>/</span> <a${addAttribute(getLangLink("en"), "href")}${addAttribute(`hover:opacity-100 transition-opacity ${lang === "en" ? "font-bold opacity-100" : ""}`, "class")} data-astro-cid-3ef6ksr2>EN</a> </div> </nav> <div class="md:hidden flex gap-4 items-center" data-astro-cid-3ef6ksr2> <!-- Mobile Lang Switcher (Simplified) --> <div class="flex gap-2 text-xs opacity-80" data-astro-cid-3ef6ksr2> <a${addAttribute(getLangLink("zh"), "href")}${addAttribute(lang === "zh" ? "font-bold" : "", "class")} data-astro-cid-3ef6ksr2>CN</a> <a${addAttribute(getLangLink("en"), "href")}${addAttribute(lang === "en" ? "font-bold" : "", "class")} data-astro-cid-3ef6ksr2>EN</a> </div> <button class="text-white focus:outline-none" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> </header> ${renderScript($$result, "/Volumes/SanXiaoXing/Blog/Code/MyLover/src/components/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Volumes/SanXiaoXing/Blog/Code/MyLover/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="fixed bottom-0 left-0 w-full z-50 px-6 py-4 md:px-12 md:py-6 flex justify-between items-end mix-blend-difference text-white opacity-0 pointer-events-none md:pointer-events-auto" id="main-footer" data-astro-cid-sz7xmlte> <div class="text-xs font-light tracking-widest opacity-60" data-astro-cid-sz7xmlte>
&copy; ${currentYear} LOVER. ALL RIGHTS RESERVED.
</div> <div class="flex gap-6 text-xs font-light tracking-widest uppercase" data-astro-cid-sz7xmlte> <a href="https://v.douyin.com/UdSnt7JD9Ss/ 9@2.com " class="hover:opacity-60 transition-opacity pointer-events-auto" data-astro-cid-sz7xmlte>TikTok</a> <a href="https://space.bilibili.com/476596573" class="hover:opacity-60 transition-opacity pointer-events-auto" data-astro-cid-sz7xmlte>Bilibili</a> </div> </footer> ${renderScript($$result, "/Volumes/SanXiaoXing/Blog/Code/MyLover/src/components/Footer.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Volumes/SanXiaoXing/Blog/Code/MyLover/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="zh-CN"> <head><meta charset="UTF-8"><meta name="description" content="Lover - 个人主页"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-white text-zinc-900 font-sans antialiased overflow-x-hidden min-h-screen flex flex-col selection:bg-zinc-200 selection:text-zinc-900 relative"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Volumes/SanXiaoXing/Blog/Code/MyLover/src/layouts/Layout.astro", void 0);

export { $$Layout as $, content as c, galleryImages as g };
