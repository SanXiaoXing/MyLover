import { e as createComponent, m as maybeRenderHead, r as renderTemplate, n as defineScriptVars, g as addAttribute, k as renderComponent, h as createAstro, l as renderScript } from '../chunks/astro/server_DM4J3xSo.mjs';
import 'piccolore';
import { c as content, $ as $$Layout } from '../chunks/Layout_CyEU68NL.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Ripple = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none overflow-visible" data-astro-cid-s63xw3ci> <div class="ripple-ring absolute rounded-full border border-zinc-200 opacity-0 ripple-delay-0" data-astro-cid-s63xw3ci></div> <div class="ripple-ring absolute rounded-full border border-zinc-200 opacity-0 ripple-delay-1s" data-astro-cid-s63xw3ci></div> <div class="ripple-ring absolute rounded-full border border-zinc-200 opacity-0 ripple-delay-2s" data-astro-cid-s63xw3ci></div> </div> `;
}, "/Volumes/SanXiaoXing/Blog/Code/MyLover/src/components/Ripple.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Avatar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Avatar;
  const {
    size = 150,
    magneticRange = 100,
    src = "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=minimalist%20avatar%20portrait%20illustration%20simple%20line%20art%20style%20white%20background%20serene%20expression&image_size=square",
    id = "avatar-default"
  } = Astro2.props;
  const anchorId = `${id}-anchor`;
  const movingPartId = `${id}-moving-part`;
  return renderTemplate(_a || (_a = __template(["", "<div", ' class="avatar-anchor relative flex items-center justify-center group"', "> <div", ' class="avatar-moving-part relative z-10 will-change-transform cursor-pointer flex items-center justify-center"> <!-- Ripple inside moving part so it follows the avatar --> <div class="absolute inset-0 z-0 flex items-center justify-center"> <div', "> ", ' </div> </div> <!-- Avatar Image --> <div class="relative z-10 rounded-full overflow-hidden shadow-sm border-2 border-zinc-50 bg-white hover:shadow-md transition-shadow duration-300"', "> <img", ' alt="Avatar" class="w-full h-full object-cover"', "", ' loading="eager"> </div> </div> </div> <script>(function(){', "\n  const anchor = document.getElementById(anchorId);\n  const movingPart = document.getElementById(movingPartId);\n  \n  if (anchor && movingPart) {\n    const range = parseInt(anchor.dataset.magneticRange || '150', 10);\n    \n    let ticking = false;\n    let isHovering = false;\n\n    // Apply initial transition style for smooth return\n    movingPart.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';\n    \n    const updatePosition = (e) => {\n      // Calculate center based on the STATIC anchor\n      const rect = anchor.getBoundingClientRect();\n      const centerX = rect.left + rect.width / 2;\n      const centerY = rect.top + rect.height / 2;\n      \n      const distanceX = e.clientX - centerX;\n      const distanceY = e.clientY - centerY;\n      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);\n\n      if (distance < range) {\n        if (!isHovering) {\n          isHovering = true;\n          // When hovering, use a quicker transition for responsiveness\n          movingPart.style.transition = 'transform 0.1s ease-out';\n        }\n\n        // Magnetic pull strength\n        const strength = 0.4; \n        const x = distanceX * strength;\n        const y = distanceY * strength;\n        \n        movingPart.style.transform = `translate(${x}px, ${y}px)`;\n      } else {\n        if (isHovering) {\n          isHovering = false;\n          // When leaving (snapping back), use elastic transition\n          movingPart.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';\n          movingPart.style.transform = 'translate(0, 0)';\n        }\n      }\n    };\n\n    document.addEventListener('mousemove', (e) => {\n      if (!ticking) {\n        window.requestAnimationFrame(() => {\n          updatePosition(e);\n          ticking = false;\n        });\n        ticking = true;\n      }\n    });\n    \n    document.addEventListener('mouseleave', () => {\n       isHovering = false;\n       movingPart.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';\n       movingPart.style.transform = 'translate(0, 0)';\n    });\n  }\n})();<\/script>"], ["", "<div", ' class="avatar-anchor relative flex items-center justify-center group"', "> <div", ' class="avatar-moving-part relative z-10 will-change-transform cursor-pointer flex items-center justify-center"> <!-- Ripple inside moving part so it follows the avatar --> <div class="absolute inset-0 z-0 flex items-center justify-center"> <div', "> ", ' </div> </div> <!-- Avatar Image --> <div class="relative z-10 rounded-full overflow-hidden shadow-sm border-2 border-zinc-50 bg-white hover:shadow-md transition-shadow duration-300"', "> <img", ' alt="Avatar" class="w-full h-full object-cover"', "", ' loading="eager"> </div> </div> </div> <script>(function(){', "\n  const anchor = document.getElementById(anchorId);\n  const movingPart = document.getElementById(movingPartId);\n  \n  if (anchor && movingPart) {\n    const range = parseInt(anchor.dataset.magneticRange || '150', 10);\n    \n    let ticking = false;\n    let isHovering = false;\n\n    // Apply initial transition style for smooth return\n    movingPart.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';\n    \n    const updatePosition = (e) => {\n      // Calculate center based on the STATIC anchor\n      const rect = anchor.getBoundingClientRect();\n      const centerX = rect.left + rect.width / 2;\n      const centerY = rect.top + rect.height / 2;\n      \n      const distanceX = e.clientX - centerX;\n      const distanceY = e.clientY - centerY;\n      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);\n\n      if (distance < range) {\n        if (!isHovering) {\n          isHovering = true;\n          // When hovering, use a quicker transition for responsiveness\n          movingPart.style.transition = 'transform 0.1s ease-out';\n        }\n\n        // Magnetic pull strength\n        const strength = 0.4; \n        const x = distanceX * strength;\n        const y = distanceY * strength;\n        \n        movingPart.style.transform = \\`translate(\\${x}px, \\${y}px)\\`;\n      } else {\n        if (isHovering) {\n          isHovering = false;\n          // When leaving (snapping back), use elastic transition\n          movingPart.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';\n          movingPart.style.transform = 'translate(0, 0)';\n        }\n      }\n    };\n\n    document.addEventListener('mousemove', (e) => {\n      if (!ticking) {\n        window.requestAnimationFrame(() => {\n          updatePosition(e);\n          ticking = false;\n        });\n        ticking = true;\n      }\n    });\n    \n    document.addEventListener('mouseleave', () => {\n       isHovering = false;\n       movingPart.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';\n       movingPart.style.transform = 'translate(0, 0)';\n    });\n  }\n})();<\/script>"])), maybeRenderHead(), addAttribute(anchorId, "id"), addAttribute(magneticRange, "data-magnetic-range"), addAttribute(movingPartId, "id"), addAttribute(`width: ${size}px; height: ${size}px; position: relative;`, "style"), renderComponent($$result, "Ripple", $$Ripple, {}), addAttribute(`width: ${size}px; height: ${size}px;`, "style"), addAttribute(src, "src"), addAttribute(size, "width"), addAttribute(size, "height"), defineScriptVars({ anchorId, movingPartId }));
}, "/Volumes/SanXiaoXing/Blog/Code/MyLover/src/components/Avatar.astro", void 0);

const $$Astro = createAstro();
const $$LifeTimer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LifeTimer;
  const lang = Astro2.url.searchParams.get("lang") || "zh";
  const currentContent = content[lang] || content["zh"];
  const { lifeTimer } = currentContent;
  const { birthDate, mode = "life" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="fixed bottom-24 left-0 right-0 text-center select-none pointer-events-none opacity-0 translate-y-4" id="life-timer-container"> <span id="life-timer" class="font-body text-zinc-400 text-sm tracking-wide"${addAttribute(new Date(birthDate).toISOString(), "data-birth-date")}${addAttribute(mode, "data-mode")}${addAttribute(lifeTimer.love, "data-text-love")}${addAttribute(lifeTimer.life, "data-text-life")}> <!-- Initial render on server if possible? No, time changes. --> ${lifeTimer.calculating} </span> </div> ${renderScript($$result, "/Volumes/SanXiaoXing/Blog/Code/MyLover/src/components/LifeTimer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/SanXiaoXing/Blog/Code/MyLover/src/components/LifeTimer.astro", void 0);

createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="heartbeat-container relative w-24 h-12 flex items-center justify-center" data-astro-cid-kwrwarpx> <svg viewBox="0 0 200 100" class="w-full h-full text-red-400" data-astro-cid-kwrwarpx> <path d="M0,50 L20,50 L30,20 L50,80 L70,30 L90,50 L110,50 L120,20 L140,80 L160,30 L180,50 L200,50" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="ecg-line" data-astro-cid-kwrwarpx></path> </svg> <div class="absolute inset-0 flex items-center justify-center" data-astro-cid-kwrwarpx> <div class="animate-pulse-fast drop-shadow-[0_0_8px_rgba(239,68,68,0.6)] text-red-500" data-astro-cid-kwrwarpx> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" data-astro-cid-kwrwarpx> <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" data-astro-cid-kwrwarpx></path> </svg> </div> </div> </div> `;
}, "/Volumes/SanXiaoXing/Blog/Code/MyLover/src/components/Heartbeat.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const birthDate = "2000-08-02T11:24:00";
  const singleAvatar = "/avatar.png";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lover" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden opacity-0" id="main-content"> ${renderTemplate`<div class="relative z-10 transform translate-y-[-10%] avatar-wrapper"> ${renderComponent($$result2, "Avatar", $$Avatar, { "size": 180, "magneticRange": 150, "src": singleAvatar, "id": "avatar-single" })} </div>`} </main> ${renderComponent($$result2, "LifeTimer", $$LifeTimer, { "birthDate": birthDate, "mode": "life" })} ` })} ${renderScript($$result, "/Volumes/SanXiaoXing/Blog/Code/MyLover/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/SanXiaoXing/Blog/Code/MyLover/src/pages/index.astro", void 0);

const $$file = "/Volumes/SanXiaoXing/Blog/Code/MyLover/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
