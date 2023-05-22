"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
require("isomorphic-fetch");
var UiBadge_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.badge[data-v-88d55a20] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 14px;\n  line-height: 24px;\n  text-align: right;\n  display: flex;\n  flex-direction: row;\n  padding: 4px 12px;\n}\n.badge_primary[data-v-88d55a20] {\n  color: var(--blue);\n  background-color: var(--blue-extra);\n}\n.badge_success[data-v-88d55a20] {\n  color: var(--green);\n  background-color: var(--green-light);\n}\n")();
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const badgeClasses = {
  primary: "badge_primary",
  success: "badge_success"
};
const _sfc_main$b = {
  name: "UiBadge",
  props: {
    type: {
      type: String,
      required: false,
      validator: (value) => Object.keys(badgeClasses).includes(value)
    }
  },
  computed: {
    badgeClass() {
      return badgeClasses[this.type];
    }
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    class: ["badge", $options.badgeClass]
  }, _attrs))} data-v-88d55a20>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/UiBadge.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
var UiBadge = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b], ["__scopeId", "data-v-88d55a20"]]);
var UiCard_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.card[data-v-72200870] {\n  display: flex;\n  flex-direction: row;\n  background-color: var(--white);\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);\n  transition: box-shadow ease 0.2s;\n}\n.card[data-v-72200870]:hover {\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.24);\n}\n.card > .card__col[data-v-72200870] {\n  flex: 1 0 50%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.card__cover[data-v-72200870] {\n  background-size: cover;\n  background-position: center;\n  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), var(--6d2e722c);\n  font-family: Roboto, sans-serif;\n  font-weight: 700;\n  font-size: 36px; /* 40px */\n  line-height: 44px;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  flex-grow: 1;\n  text-align: center;\n  color: var(--white);\n  overflow: hidden;\n  position: relative;\n  min-height: 218px;\n}\n.card__content[data-v-72200870] {\n  padding: 50px;\n  border-left: 5px solid var(--blue);\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n@media all and (max-width: 992px) {\n.card[data-v-72200870] {\n    flex-direction: column;\n}\n.card > .card__col[data-v-72200870] {\n    flex: 1 0 100%;\n}\n.card__content[data-v-72200870] {\n    padding: 40px 24px 32px;\n}\n}\n")();
const __default__ = {
  name: "UiCard",
  props: {
    tag: {
      type: [String, Object],
      default: "div"
    },
    cover: {
      type: String
    },
    badge: {
      type: String,
      required: false
    }
  },
  computed: {
    coverStyle() {
      return this.cover ? `url('${this.cover}')` : `var(--default-cover)`;
    }
  }
};
const __injectCSSVars__ = () => {
  vue.useCssVars((_ctx) => ({
    "6d2e722c": _ctx.coverStyle
  }));
};
const __setup__ = __default__.setup;
__default__.setup = __setup__ ? (props, ctx) => {
  __injectCSSVars__();
  return __setup__(props, ctx);
} : __injectCSSVars__;
const _sfc_main$a = __default__;
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _cssVars = { style: {
    "--6d2e722c": $options.coverStyle
  } };
  serverRenderer.ssrRenderVNode(_push, vue.createVNode(vue.resolveDynamicComponent($props.tag), vue.mergeProps({ class: "card" }, _attrs, _cssVars), {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="card__col" data-v-72200870${_scopeId}><div class="card__cover" data-v-72200870${_scopeId}><header data-v-72200870${_scopeId}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
        _push2(`</header></div></div><div class="card__col" data-v-72200870${_scopeId}><div class="card__content" data-v-72200870${_scopeId}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div></div>`);
      } else {
        return [
          vue.createVNode("div", { class: "card__col" }, [
            vue.createVNode("div", { class: "card__cover" }, [
              vue.createVNode("header", null, [
                vue.renderSlot(_ctx.$slots, "header", {}, void 0, true)
              ])
            ])
          ]),
          vue.createVNode("div", { class: "card__col" }, [
            vue.createVNode("div", { class: "card__content" }, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ])
          ])
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/UiCard.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
var UiCard = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a], ["__scopeId", "data-v-72200870"]]);
var AlertCircle = "/assets/icon-alert-circle.89d82ee3.svg";
var CalSm = "/assets/icon-cal-sm.65eea2b0.svg";
var CalLg = "/assets/icon-cal-lg.70192a7d.svg";
var Check = "/assets/icon-check.2173ef59.svg";
var CheckCircle = "/assets/icon-check-circle.27f4897e.svg";
var ChevronDown = "/assets/icon-chevron-down.7a3c6bb7.svg";
var Clock = "/assets/icon-clock.37e0c4f9.svg";
var Coffee = "/assets/icon-coffee.8db4c97f.svg";
var Key = "/assets/icon-key.1194c161.svg";
var List = "/assets/icon-list.1236dfbc.svg";
var Map = "/assets/icon-map.c9198c63.svg";
var PenTool = "/assets/icon-pen-tool.875c5817.svg";
var PillActive = "/assets/icon-pill-active.cf58a054.svg";
var Search = "/assets/icon-search.f990726f.svg";
var Trash = "/assets/icon-trash.8a24966c.svg";
var Tv = "/assets/icon-tv.f10f7739.svg";
var User = "/assets/icon-user.d930aeb0.svg";
var UiIcon_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.icon[data-v-4b9c8257] {\n  display: block;\n}\n")();
const icons = {
  "alert-circle": AlertCircle,
  "cal-sm": CalSm,
  "cal-lg": CalLg,
  check: Check,
  "check-circle": CheckCircle,
  "chevron-down": ChevronDown,
  clock: Clock,
  coffee: Coffee,
  key: Key,
  list: List,
  map: Map,
  "pen-tool": PenTool,
  "pill-active": PillActive,
  search: Search,
  trash: Trash,
  tv: Tv,
  user: User
};
const _sfc_main$9 = {
  name: "UiIcon",
  props: {
    icon: {
      type: String,
      required: true,
      validator: (name) => Object.keys(icons).includes(name)
    }
  },
  computed: {
    iconSrc() {
      return icons[this.icon];
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<img${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    class: "icon",
    src: $options.iconSrc,
    alt: $props.icon
  }, _attrs))} data-v-4b9c8257>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/UiIcon.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var UiIcon = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-4b9c8257"]]);
var MeetupCard_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.meetup-card[data-v-80a0bc9c] {\n  position: relative;\n}\n.meetup-card__badge[data-v-80a0bc9c] {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n/* meetup-info */\n.meetup-info[data-v-80a0bc9c] {\n  margin: 0;\n  padding: 0;\n}\n.meetup-info__item[data-v-80a0bc9c] {\n  list-style-type: none;\n  position: relative;\n  padding-left: 36px;\n  font-size: 18px;\n  line-height: 28px;\n  margin: 0 0 8px;\n}\n.meetup-info__item[data-v-80a0bc9c]:last-child {\n  margin: 0;\n}\n.meetup-info__icon[data-v-80a0bc9c] {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n")();
const _sfc_main$8 = {
  name: "MeetupsListItem",
  components: {
    UiBadge,
    UiCard,
    UiIcon
  },
  props: {
    meetup: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatAsIsoDate(timestamp) {
      return new Date(timestamp).toISOString().split("T")[0];
    },
    formatAsLocalDate(timestamp) {
      return new Date(timestamp).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ui_card = vue.resolveComponent("ui-card");
  const _component_ui_badge = vue.resolveComponent("ui-badge");
  const _component_ui_icon = vue.resolveComponent("ui-icon");
  _push(serverRenderer.ssrRenderComponent(_component_ui_card, vue.mergeProps({
    tag: "article",
    cover: $props.meetup.image,
    class: "meetup-card"
  }, _attrs), {
    header: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${serverRenderer.ssrInterpolate($props.meetup.title)}`);
      } else {
        return [
          vue.createTextVNode(vue.toDisplayString($props.meetup.title), 1)
        ];
      }
    }),
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if ($props.meetup.organizing) {
          _push2(serverRenderer.ssrRenderComponent(_component_ui_badge, {
            type: "success",
            class: "meetup-card__badge"
          }, {
            default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0443\u044E`);
              } else {
                return [
                  vue.createTextVNode("\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0443\u044E")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        if ($props.meetup.attending) {
          _push2(serverRenderer.ssrRenderComponent(_component_ui_badge, {
            type: "primary",
            class: "meetup-card__badge"
          }, {
            default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`\u0423\u0447\u0430\u0441\u0442\u0432\u0443\u044E`);
              } else {
                return [
                  vue.createTextVNode("\u0423\u0447\u0430\u0441\u0442\u0432\u0443\u044E")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`<ul class="meetup-info" data-v-80a0bc9c${_scopeId}><li class="meetup-info__item" data-v-80a0bc9c${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_ui_icon, {
          icon: "user",
          class: "meetup-info__icon"
        }, null, _parent2, _scopeId));
        _push2(` ${serverRenderer.ssrInterpolate($props.meetup.organizer)}</li><li class="meetup-info__item" data-v-80a0bc9c${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_ui_icon, {
          icon: "map",
          class: "meetup-info__icon"
        }, null, _parent2, _scopeId));
        _push2(` ${serverRenderer.ssrInterpolate($props.meetup.place)}</li><li class="meetup-info__item" data-v-80a0bc9c${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_ui_icon, {
          icon: "cal-lg",
          class: "meetup-info__icon"
        }, null, _parent2, _scopeId));
        _push2(`<time${serverRenderer.ssrRenderAttr("datetime", $options.formatAsIsoDate($props.meetup.date))} data-v-80a0bc9c${_scopeId}>${serverRenderer.ssrInterpolate($options.formatAsLocalDate($props.meetup.date))}</time></li></ul>`);
      } else {
        return [
          $props.meetup.organizing ? (vue.openBlock(), vue.createBlock(_component_ui_badge, {
            key: 0,
            type: "success",
            class: "meetup-card__badge"
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0443\u044E")
            ]),
            _: 1
          })) : vue.createCommentVNode("", true),
          $props.meetup.attending ? (vue.openBlock(), vue.createBlock(_component_ui_badge, {
            key: 1,
            type: "primary",
            class: "meetup-card__badge"
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u0423\u0447\u0430\u0441\u0442\u0432\u0443\u044E")
            ]),
            _: 1
          })) : vue.createCommentVNode("", true),
          vue.createVNode("ul", { class: "meetup-info" }, [
            vue.createVNode("li", { class: "meetup-info__item" }, [
              vue.createVNode(_component_ui_icon, {
                icon: "user",
                class: "meetup-info__icon"
              }),
              vue.createTextVNode(" " + vue.toDisplayString($props.meetup.organizer), 1)
            ]),
            vue.createVNode("li", { class: "meetup-info__item" }, [
              vue.createVNode(_component_ui_icon, {
                icon: "map",
                class: "meetup-info__icon"
              }),
              vue.createTextVNode(" " + vue.toDisplayString($props.meetup.place), 1)
            ]),
            vue.createVNode("li", { class: "meetup-info__item" }, [
              vue.createVNode(_component_ui_icon, {
                icon: "cal-lg",
                class: "meetup-info__icon"
              }),
              vue.createVNode("time", {
                datetime: $options.formatAsIsoDate($props.meetup.date)
              }, vue.toDisplayString($options.formatAsLocalDate($props.meetup.date)), 9, ["datetime"])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MeetupCard.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var MeetupCard = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-80a0bc9c"]]);
var MeetupsList_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.meetups-list[data-v-07686302] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.meetups-list__item[data-v-07686302] {\n  margin: 0 0 32px 0;\n  text-decoration: none;\n}\n.meetups-list__item-link[data-v-07686302] {\n  text-decoration: none;\n  color: inherit;\n}\n")();
const _sfc_main$7 = {
  name: "MeetupsList",
  components: {
    MeetupCard
  },
  props: {
    meetups: {
      type: Array,
      required: true
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MeetupCard = vue.resolveComponent("MeetupCard");
  _push(`<ul${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "meetups-list" }, _attrs))} data-v-07686302><!--[-->`);
  serverRenderer.ssrRenderList($props.meetups, (meetup) => {
    _push(`<li class="meetups-list__item" data-v-07686302><a${serverRenderer.ssrRenderAttr("href", `/meetups/${meetup.id}`)} class="meetups-list__item-link" tabindex="0" data-v-07686302>`);
    _push(serverRenderer.ssrRenderComponent(_component_MeetupCard, { meetup }, null, _parent));
    _push(`</a></li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MeetupsList.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var MeetupsList = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-07686302"]]);
const _sfc_main$6 = {
  name: "MeetupsCalendar",
  props: {
    meetups: {
      type: Array,
      required: true
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "meetups-calendar" }, _attrs))}>\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MeetupsCalendar.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var MeetupsCalendar = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
var UiRadioGroup_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.radio-group[data-v-2b7275f4] {\n  display: flex;\n  flex-direction: row;\n}\n.radio-group__button[data-v-2b7275f4] {\n  position: relative;\n  display: inline-flex;\n}\n.radio-group__label[data-v-2b7275f4] {\n  margin-right: 16px;\n  height: 44px;\n  padding: 6px 16px;\n  border-radius: 22px;\n  border: 2px solid transparent;\n  color: var(--blue);\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 28px;\n  transition: 0.2s border-color;\n}\n.radio-group__label[data-v-2b7275f4]:hover,\n.radio-group__input:checked ~ .radio-group__label[data-v-2b7275f4] {\n  border-color: var(--blue);\n}\n.radio-group__input[data-v-2b7275f4] {\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n@media all and (max-width: 767px) {\n.radio-group__label[data-v-2b7275f4] {\n    margin-right: 8px;\n    padding: 6px 8px;\n}\n}\n")();
const _sfc_main$5 = {
  name: "UiRadioGroup",
  props: {
    options: {
      type: Array,
      required: true
    },
    modelValue: {
      type: String
    },
    name: {
      type: String,
      default: () => `radio-group`
    }
  },
  emits: ["update:modelValue"],
  methods: {
    change(value) {
      this.$emit("update:modelValue", value);
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "radio-group" }, _attrs))} data-v-2b7275f4><!--[-->`);
  serverRenderer.ssrRenderList($props.options, (option) => {
    _push(`<div class="radio-group__button" data-v-2b7275f4><input${serverRenderer.ssrRenderAttr("id", `radio-buttons_${$props.name}_${option.value}`)} class="radio-group__input" type="radio"${serverRenderer.ssrRenderAttr("name", $props.name)}${serverRenderer.ssrRenderAttr("value", $props.options.value)}${serverRenderer.ssrIncludeBooleanAttr(option.value === $props.modelValue) ? " checked" : ""} data-v-2b7275f4><label${serverRenderer.ssrRenderAttr("for", `radio-buttons_${$props.name}_${option.value}`)} class="radio-group__label" data-v-2b7275f4>${serverRenderer.ssrInterpolate(option.text)}</label></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/UiRadioGroup.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var UiRadioGroup = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-2b7275f4"]]);
var UiButtonGroup_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.button-group[data-v-e51bebae] {\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  white-space: nowrap;\n  width: 96px;\n}\n.button-group__button[data-v-e51bebae] {\n  height: 44px;\n  width: 48px;\n  border: 2px solid var(--blue);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  transition-duration: 0.3s;\n  transition-property: background-color, fill;\n  background-color: var(--white);\n  box-shadow: none;\n  outline: none;\n  cursor: pointer;\n}\n.button-group__button[data-v-e51bebae]:first-child {\n  border-radius: 22px 0 0 22px;\n  padding-left: 2px;\n}\n.button-group__button[data-v-e51bebae]:last-child {\n  border-radius: 0 22px 22px 0;\n  padding-right: 2px;\n}\n.button-group__button.button-group__button_active[data-v-e51bebae] {\n  background-color: var(--blue);\n}\n.button-group__button svg[data-v-e51bebae],\n.button-group__button svg[data-v-e51bebae] {\n  fill: var(--blue);\n}\n.button-group__button[data-v-e51bebae]:hover,\n.button-group__button.button-group__button_active[data-v-e51bebae] {\n  background-color: var(--blue);\n}\n.button-group__button:hover svg[data-v-e51bebae],\n.button-group__button.button-group__button_active svg[data-v-e51bebae] {\n  fill: var(--white);\n}\n")();
const _sfc_main$4 = {
  name: "UiButtonGroup",
  props: {
    view: {
      type: String,
      default: "list",
      validator: (value) => ["list", "calendar"].includes(value)
    }
  },
  methods: {
    select(value) {
      this.$emit("update:view", value);
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    class: "button-group",
    role: "group"
  }, _attrs))} data-v-e51bebae><button type="button" class="${serverRenderer.ssrRenderClass([{ "button-group__button_active": $props.view === "list" }, "button-group__button"])}" aria-label="\u0421\u043F\u0438\u0441\u043E\u043A"${serverRenderer.ssrRenderAttr("aria-selected", $props.view === "list")} data-v-e51bebae><svg fill="none" height="28" viewBox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg" data-v-e51bebae><path clip-rule="evenodd" d="m5 7c-.55228 0-1 .44772-1 1s.44772 1 1 1h.01c.55228 0 1-.44772 1-1s-.44772-1-1-1zm5 0c-.55228 0-1 .44772-1 1s.44772 1 1 1h13c.5523 0 1-.44772 1-1s-.4477-1-1-1zm0 6c-.55228 0-1 .4477-1 1s.44772 1 1 1h13c.5523 0 1-.4477 1-1s-.4477-1-1-1zm-1 7c0-.5523.44772-1 1-1h13c.5523 0 1 .4477 1 1s-.4477 1-1 1h-13c-.55228 0-1-.4477-1-1zm-5-6c0-.5523.44772-1 1-1h.01c.55228 0 1 .4477 1 1s-.44772 1-1 1h-.01c-.55228 0-1-.4477-1-1zm1 5c-.55228 0-1 .4477-1 1s.44772 1 1 1h.01c.55228 0 1-.4477 1-1s-.44772-1-1-1z" fill-rule="evenodd" data-v-e51bebae></path></svg></button><button type="button" class="${serverRenderer.ssrRenderClass([{ "button-group__button_active": $props.view === "calendar" }, "button-group__button"])}" aria-label="\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C"${serverRenderer.ssrRenderAttr("aria-selected", $props.view === "calendar")} data-v-e51bebae><svg height="22" viewBox="0 0 20 22" width="20" xmlns="http://www.w3.org/2000/svg" data-v-e51bebae><path clip-rule="evenodd" d="m15 1c0-.552285-.4477-1-1-1s-1 .447715-1 1v1h-6v-1c0-.552285-.44772-1-1-1s-1 .447715-1 1v1h-2c-1.65685 0-3 1.34315-3 3v14c0 1.6569 1.34315 3 3 3h14c1.6569 0 3-1.3431 3-3v-14c0-1.65685-1.3431-3-3-3h-2zm3 7v-3c0-.55228-.4477-1-1-1h-2v1c0 .55228-.4477 1-1 1s-1-.44772-1-1v-1h-6v1c0 .55228-.44772 1-1 1s-1-.44772-1-1v-1h-2c-.55228 0-1 .44772-1 1v3zm-16 2h16v9c0 .5523-.4477 1-1 1h-14c-.55228 0-1-.4477-1-1z" fill-rule="evenodd" data-v-e51bebae></path></svg></button></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/UiButtonGroup.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var UiButtonGroup = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-e51bebae"]]);
var UiContainer_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.container[data-v-317e19fa] {\n  max-width: 1008px;\n  width: 100%;\n  margin: 0 auto;\n}\n@media all and (max-width: 992px) {\n.container[data-v-317e19fa] {\n    padding: 0 16px;\n}\n}\n")();
const _sfc_main$3 = {
  name: "UiContainer"
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "container" }, _attrs))} data-v-317e19fa>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/UiContainer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var UiContainer = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-317e19fa"]]);
var UiAlert_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.alert[data-v-a7208f76] {\n  padding: 28px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  line-height: 28px;\n  color: var(--blue-2);\n  border: 2px solid var(--blue-light);\n  border-radius: 8px;\n  margin: 32px 0;\n}\n")();
const _sfc_main$2 = {
  name: "UiAlert",
  props: {
    text: {
      type: String,
      default: "No data..."
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "alert" }, _attrs))} data-v-a7208f76>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    _push(`${serverRenderer.ssrInterpolate($props.text)}`);
  }, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/UiAlert.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var UiAlert = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-a7208f76"]]);
const API_URL = "https://course-vue.javascript.ru/api";
async function fetchMeetups() {
  return fetch(`${API_URL}/meetups`).then((res) => res.json());
}
var PageMeetups_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.filters-panel[data-v-03924444] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin: 40px 0 32px 0;\n}\n.filters-panel__col[data-v-03924444] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n}\n@media all and (max-width: 767px) {\n.filters-panel[data-v-03924444] {\n    flex-direction: column;\n}\n.filters-panel__col + .filters-panel__col[data-v-03924444] {\n    margin-top: 16px;\n}\n}\n")();
const _sfc_main$1 = {
  name: "PageMeetups",
  dateFilterOptions: [
    { text: "\u0412\u0441\u0435", value: "all" },
    { text: "\u041F\u0440\u043E\u0448\u0435\u0434\u0448\u0438\u0435", value: "past" },
    { text: "\u041E\u0436\u0438\u0434\u0430\u0435\u043C\u044B\u0435", value: "future" }
  ],
  components: {
    UiIcon,
    UiRadioGroup,
    UiButtonGroup,
    UiContainer,
    UiAlert
  },
  inject: ["initialState"],
  async serverPrefetch() {
    await this.fetchData();
    this.initialState[this.$options.name] = {
      meetups: this.meetups
    };
  },
  data() {
    return {
      meetups: null,
      filter: {
        date: "all",
        participation: "all",
        search: ""
      },
      view: "list"
    };
  },
  computed: {
    filteredMeetups() {
      if (!this.meetups) {
        return null;
      }
      const dateFilter = (meetup) => this.filter.date === "all" || this.filter.date === "past" && new Date(meetup.date) <= new Date() || this.filter.date === "future" && new Date(meetup.date) > new Date();
      const participationFilter = (meetup) => this.filter.participation === "all" || this.filter.participation === "organizing" && meetup.organizing || this.filter.participation === "attending" && meetup.attending;
      const searchFilter = (meetup) => [meetup.title, meetup.description, meetup.place, meetup.organizer].join(" ").toLowerCase().includes(this.filter.search.toLowerCase());
      return this.meetups.filter((meetup) => dateFilter(meetup) && participationFilter(meetup) && searchFilter(meetup));
    },
    viewComponent() {
      const viewToComponents = {
        list: MeetupsList,
        calendar: MeetupsCalendar
      };
      return viewToComponents[this.view];
    }
  },
  created() {
    if (this.initialState[this.$options.name]) {
      this.meetups = this.initialState[this.$options.name].meetups;
    } else {
      this.fetchData();
    }
  },
  methods: {
    async fetchData() {
      this.meetups = await fetchMeetups();
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UiContainer = vue.resolveComponent("UiContainer");
  const _component_UiRadioGroup = vue.resolveComponent("UiRadioGroup");
  const _component_UiIcon = vue.resolveComponent("UiIcon");
  const _component_UiButtonGroup = vue.resolveComponent("UiButtonGroup");
  const _component_UiAlert = vue.resolveComponent("UiAlert");
  _push(serverRenderer.ssrRenderComponent(_component_UiContainer, _attrs, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="filters-panel" data-v-03924444${_scopeId}><div class="filters-panel__col" data-v-03924444${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_UiRadioGroup, {
          modelValue: $data.filter.date,
          "onUpdate:modelValue": ($event) => $data.filter.date = $event,
          options: _ctx.$options.dateFilterOptions,
          name: "date"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="filters-panel__col" data-v-03924444${_scopeId}><div class="form-group form-group_inline" data-v-03924444${_scopeId}><div class="input-group input-group_icon input-group_icon-left" data-v-03924444${_scopeId}><div class="input-group__icon" data-v-03924444${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_UiIcon, { icon: "search" }, null, _parent2, _scopeId));
        _push2(`</div><input${serverRenderer.ssrRenderAttr("value", $data.filter.search)} class="form-control form-control_rounded form-control_sm" placeholder="\u041F\u043E\u0438\u0441\u043A" type="search" data-v-03924444${_scopeId}></div></div><div class="form-group form-group_inline" data-v-03924444${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_UiButtonGroup, {
          view: $data.view,
          "onUpdate:view": ($event) => $data.view = $event
        }, null, _parent2, _scopeId));
        _push2(`</div></div></div>`);
        if ($data.meetups) {
          if ($options.filteredMeetups.length) {
            serverRenderer.ssrRenderVNode(_push2, vue.createVNode(vue.resolveDynamicComponent($options.viewComponent), { meetups: $options.filteredMeetups }, null), _parent2, _scopeId);
          } else {
            _push2(serverRenderer.ssrRenderComponent(_component_UiAlert, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u041C\u0438\u0442\u0430\u043F\u043E\u0432 \u043F\u043E \u0437\u0430\u0434\u0430\u043D\u043D\u044B\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E...`);
                } else {
                  return [
                    vue.createTextVNode("\u041C\u0438\u0442\u0430\u043F\u043E\u0432 \u043F\u043E \u0437\u0430\u0434\u0430\u043D\u043D\u044B\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E...")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          }
        } else {
          _push2(serverRenderer.ssrRenderComponent(_component_UiAlert, null, {
            default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...`);
              } else {
                return [
                  vue.createTextVNode("\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        }
      } else {
        return [
          vue.createVNode("div", { class: "filters-panel" }, [
            vue.createVNode("div", { class: "filters-panel__col" }, [
              vue.createVNode(_component_UiRadioGroup, {
                modelValue: $data.filter.date,
                "onUpdate:modelValue": ($event) => $data.filter.date = $event,
                options: _ctx.$options.dateFilterOptions,
                name: "date"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
            ]),
            vue.createVNode("div", { class: "filters-panel__col" }, [
              vue.createVNode("div", { class: "form-group form-group_inline" }, [
                vue.createVNode("div", { class: "input-group input-group_icon input-group_icon-left" }, [
                  vue.createVNode("div", { class: "input-group__icon" }, [
                    vue.createVNode(_component_UiIcon, { icon: "search" })
                  ]),
                  vue.withDirectives(vue.createVNode("input", {
                    "onUpdate:modelValue": ($event) => $data.filter.search = $event,
                    class: "form-control form-control_rounded form-control_sm",
                    placeholder: "\u041F\u043E\u0438\u0441\u043A",
                    type: "search"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [
                      vue.vModelText,
                      $data.filter.search,
                      void 0,
                      { trim: true }
                    ]
                  ])
                ])
              ]),
              vue.createVNode("div", { class: "form-group form-group_inline" }, [
                vue.createVNode(_component_UiButtonGroup, {
                  view: $data.view,
                  "onUpdate:view": ($event) => $data.view = $event
                }, null, 8, ["view", "onUpdate:view"])
              ])
            ])
          ]),
          $data.meetups ? (vue.openBlock(), vue.createBlock(vue.KeepAlive, {
            key: 0,
            include: "MeetupsCalendar"
          }, [
            $options.filteredMeetups.length ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($options.viewComponent), {
              key: 0,
              meetups: $options.filteredMeetups
            }, null, 8, ["meetups"])) : (vue.openBlock(), vue.createBlock(_component_UiAlert, { key: 1 }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("\u041C\u0438\u0442\u0430\u043F\u043E\u0432 \u043F\u043E \u0437\u0430\u0434\u0430\u043D\u043D\u044B\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E...")
              ]),
              _: 1
            }))
          ], 1024)) : (vue.openBlock(), vue.createBlock(_component_UiAlert, { key: 1 }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")
            ]),
            _: 1
          }))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/PageMeetups.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var PageMeetups = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-03924444"]]);
var App_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => "/* https://fonts.googleapis.com/css?family=Nunito&display=swap */\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url('/assets/Nunito-cyrillic-ext.135a2a07.woff2') format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n\n/* cyrillic */\n@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url('/assets/Nunito-cyrillic.b83eeadc.woff2') format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n\n/* latin-ext */\n@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url('/assets/Nunito-latin-ext.f2d335ee.woff2') format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n\n/* latin */\n@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url('/assets/Nunito-latin.06f3af3f.woff2') format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC,\n    U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n:root {\n  --body-color: #34423f;\n  --white: #fff;\n  --grey: #cbd4e9;\n  --grey-light: #f8f9fc;\n  --grey-2: #dee1e1;\n  --grey-3: #ced4d3;\n  --grey-8: #5e706c;\n  --blue: #4c6bb6;\n  --blue-2: #688dc0;\n  --blue-light: #b8c5e2;\n  --blue-extra: #eaedf7;\n  --red: #db3851;\n  --red-light: #e8656f;\n  --green: #24a37e;\n  --green-light: #dff2ec;\n  --default-cover: url('/assets/undraw_conference_speaker_6nt7.3cd91942.svg');\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  font-family: 'Nunito', sans-serif;\n  color: var(--body-color);\n}\n.form-group {\n  position: relative;\n  margin-bottom: 24px;\n}\n.form-group.form-group_inline {\n  display: inline-block;\n  margin-bottom: 0;\n}\n.form-group.form-group_inline + .form-group.form-group_inline {\n  margin-left: 16px;\n}\n.form-group__label {\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 28px;\n  color: var(--body-color);\n  margin-bottom: 10px;\n  display: block;\n}\n.form-control {\n  padding: 12px 16px;\n  height: 52px;\n  border-radius: 8px;\n  border: 2px solid var(--blue-light);\n  font-family: 'Nunito', sans-serif;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 28px;\n  color: var(--body-color);\n  transition: 0.2s border-color;\n  background-color: var(--white);\n  outline: none;\n  box-shadow: none;\n}\n.form-control::placeholder {\n  font-weight: 400;\n  color: var(--blue-2);\n}\n.form-control:focus {\n  border-color: var(--blue);\n}\ntextarea.form-control {\n  width: 100%;\n  min-height: 211px;\n}\n.form-control.form-control_rounded {\n  border-radius: 26px;\n}\n.form-control.form-control_sm.form-control_rounded {\n  border-radius: 22px;\n}\n.form-control.form-control_sm {\n  padding: 8px 16px;\n  height: 44px;\n  border-radius: 4px;\n}\n.input-group {\n  position: relative;\n}\n.input-group .form-control {\n  width: 100%;\n}\n.input-group.input-group_icon .form-control {\n  padding-left: 50px;\n}\n.input-group.input-group_icon .input-group__icon {\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n}\n.input-group.input-group_icon.input-group_icon-left .input-group__icon {\n  left: 16px;\n}\n.input-group.input-group_icon.input-group_icon-right .input-group__icon {\n  right: 16px;\n}\n")();
const _sfc_main = {
  name: "App",
  components: { PageMeetups }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PageMeetups = vue.resolveComponent("PageMeetups");
  _push(serverRenderer.ssrRenderComponent(_component_PageMeetups, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
function createVueApp() {
  const app = vue.createSSRApp(App);
  return {
    app
  };
}
async function render() {
  const { app } = createVueApp();
  const initialState = {};
  app.provide("initialState", initialState);
  const appHtml = await serverRenderer.renderToString(app);
  return {
    appHtml,
    initialState
  };
}
exports.render = render;
