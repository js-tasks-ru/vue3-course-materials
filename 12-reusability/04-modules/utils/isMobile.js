// Как и dateFormatters, утилита, не привязанная к Vue и компонентам - обычный модуль
// Реактивность тут не требуется, это значение не меняется без перезагрузки

const mobileUserAgents = /Android|iPhone|iPad/i;

export function checkIfMobile() {
  return !!navigator.userAgent.match(mobileUserAgents);
}

export const isMobile = checkIfMobile();
