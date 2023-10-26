<template>
  <button
    :class="[
    className ? className : 'p-4',
    {
    primary: 'bg-white text-black',
    secondary: 'bg-green-500 text-red',
    }[type],
    disabled ? 'opacity-50' : 'opacity-100',
    'transition-all'
    ]"
    :disabled="disabled"
    @click="onClick"
    v-bind="$attrs"
    >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      onClick: Function,
      className: String
    }
  };
</script>

