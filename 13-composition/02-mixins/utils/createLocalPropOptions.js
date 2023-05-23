const deepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

export function createLocalPropOptions(propName, localName) {
  return {
    data() {
      return {
        [localName]: null,
      };
    },

    watch: {
      [propName]: {
        immediate: true,
        deep: true,
        handler() {
          if (!deepEqual(this[propName], this[localName])) {
            this[localName] = deepClone(this[propName]);
          }
        },
      },

      [localName]: {
        deep: true,
        handler() {
          this.$emit(`update:${propName}`, deepClone(this[localName]));
        },
      },
    },
  };
}
