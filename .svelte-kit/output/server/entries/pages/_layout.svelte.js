import { c as create_ssr_component, b as subscribe, e as each, d as add_attribute, f as escape, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const app = "";
const TopNavbar_svelte_svelte_type_style_lang = "";
const css = {
  code: ".acive.svelte-1t9p4a{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(75 85 99 / var(--tw-text-opacity))\n}",
  map: null
};
const TopNavbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const ITEMS = [{ url: "/", label: "HOME" }, { url: "/about", label: "ABOUT" }];
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<nav class="bg-indigo-100"><div class="flex flex-row items-center justify-between"><div class="flex flex-row">${each(ITEMS, (item) => {
    return `<a${add_attribute("href", item.url, 0)} class="hover:text-gray-600 hover:bg-indigo-200 text-gray-600 font-bold"><div class="${["svelte-1t9p4a", $page.route.id === item.url ? "acive" : ""].join(" ").trim()}"><div class="py-2 px-8">${escape(item.label)}
                        </div></div>
                </a>`;
  })}</div>
        <div class="whitespace-nowrap text-gray-600 text-xl cursor-default font-bold mx-10">MY APP
        </div></div>
</nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(TopNavbar, "TopNavbar").$$render($$result, {}, {}, {})}

<div class="p-8">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
