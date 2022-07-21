const deepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

export function localPropMixin(propName, { propOptions, localName }) {
  const localPropName = localName ?? `${propName}Local`;

  return {
    props: {
      [propName]: propOptions,
    },

    emits: [`update:${propName}`],

    data() {
      return {
        [localPropName]: null,
      };
    },

    watch: {
      [propName]: {
        immediate: true,
        deep: true,
        handler(newValue) {
          if (!deepEqual(this[propName], this[localPropName])) {
            this[localPropName] = deepClone(newValue);
          }
        },
      },

      [localPropName]: {
        deep: true,
        handler(newValue) {
          this.$emit(`update:${propName}`, deepClone(newValue));
        },
      },
    },
  };
}
