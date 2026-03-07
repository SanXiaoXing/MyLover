import 'piccolore';
import { q as decodeKey } from './chunks/astro/server_DM4J3xSo.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_D0btLve_.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Volumes/SanXiaoXing/Blog/Code/MyLover/","cacheDir":"file:///Volumes/SanXiaoXing/Blog/Code/MyLover/node_modules/.astro/","outDir":"file:///Volumes/SanXiaoXing/Blog/Code/MyLover/dist/","srcDir":"file:///Volumes/SanXiaoXing/Blog/Code/MyLover/src/","publicDir":"file:///Volumes/SanXiaoXing/Blog/Code/MyLover/public/","buildClientDir":"file:///Volumes/SanXiaoXing/Blog/Code/MyLover/dist/client/","buildServerDir":"file:///Volumes/SanXiaoXing/Blog/Code/MyLover/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/gallery.BkU8mG9h.css"}],"routeData":{"route":"/gallery","isIndex":false,"type":"page","pattern":"^\\/gallery\\/?$","segments":[[{"content":"gallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gallery.astro","pathname":"/gallery","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/gallery.BkU8mG9h.css"}],"routeData":{"route":"/story","isIndex":false,"type":"page","pattern":"^\\/story\\/?$","segments":[[{"content":"story","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/story.astro","pathname":"/story","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/gallery.BkU8mG9h.css"},{"type":"inline","content":".ripple-ring[data-astro-cid-s63xw3ci]{width:100%;height:100%;animation:ripple 3s linear infinite}.ripple-delay-1s[data-astro-cid-s63xw3ci]{animation-delay:1s}.ripple-delay-2s[data-astro-cid-s63xw3ci]{animation-delay:2s}@keyframes ripple{0%{transform:scale(1);opacity:.8;border-width:2px}to{transform:scale(3.5);opacity:0;border-width:0px}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Volumes/SanXiaoXing/Blog/Code/MyLover/src/pages/gallery.astro",{"propagation":"none","containsHead":true}],["/Volumes/SanXiaoXing/Blog/Code/MyLover/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Volumes/SanXiaoXing/Blog/Code/MyLover/src/pages/story.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/gallery@_@astro":"pages/gallery.astro.mjs","\u0000@astro-page:src/pages/story@_@astro":"pages/story.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BnH0644W.mjs","/Volumes/SanXiaoXing/Blog/Code/MyLover/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_SeFk7gri.mjs","/Volumes/SanXiaoXing/Blog/Code/MyLover/src/pages/gallery.astro?astro&type=script&index=0&lang.ts":"_astro/gallery.astro_astro_type_script_index_0_lang.idUaNmlP.js","/Volumes/SanXiaoXing/Blog/Code/MyLover/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.bRL0-I6a.js","/Volumes/SanXiaoXing/Blog/Code/MyLover/src/pages/story.astro?astro&type=script&index=0&lang.ts":"_astro/story.astro_astro_type_script_index_0_lang.DxzXPUpZ.js","/Volumes/SanXiaoXing/Blog/Code/MyLover/src/components/LifeTimer.astro?astro&type=script&index=0&lang.ts":"_astro/LifeTimer.astro_astro_type_script_index_0_lang.D2V7BLoo.js","/Volumes/SanXiaoXing/Blog/Code/MyLover/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.CJDfUZHu.js","/Volumes/SanXiaoXing/Blog/Code/MyLover/src/components/Footer.astro?astro&type=script&index=0&lang.ts":"_astro/Footer.astro_astro_type_script_index_0_lang.Ckkm6ccr.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/gallery.BkU8mG9h.css","/avatar.png","/favicon.ico","/favicon.svg","/_astro/Footer.astro_astro_type_script_index_0_lang.Ckkm6ccr.js","/_astro/Header.astro_astro_type_script_index_0_lang.CJDfUZHu.js","/_astro/LifeTimer.astro_astro_type_script_index_0_lang.D2V7BLoo.js","/_astro/ScrollTrigger.Cv03IO65.js","/_astro/gallery.astro_astro_type_script_index_0_lang.idUaNmlP.js","/_astro/index.CB87Sc6I.js","/_astro/index.astro_astro_type_script_index_0_lang.bRL0-I6a.js","/_astro/story.astro_astro_type_script_index_0_lang.DxzXPUpZ.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"6u8jxcihVarobwUz7II4rMN3tbiGAocXO7gQoWVlGwk="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
