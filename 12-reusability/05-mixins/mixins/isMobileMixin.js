// Пример плохого миксина
// Это вычисление - не от реактивных данных и не связано со свойствами экземпляра компонента
// Это вычисление лучше оставить в обычной утилите
export const isMobileMixin = {
  computed: {
    isMobile() {
      const mobileUserAgents = /Android|iPhone|iPad/i;
      return !!navigator.userAgent.match(mobileUserAgents);
    },
  }
}
