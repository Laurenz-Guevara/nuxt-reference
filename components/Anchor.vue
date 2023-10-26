<template>
  <a
    :href="link" 
    :class="[
    className ? className : 'p-4',
    {
    primary: 'text-white',
    secondary: 'text-red-500',
    }[type],
    disabled ? 'opacity-50' : 'opacity-100',
    'transition-all'
    ]"
    :disabled="disabled"
    v-bind="$attrs"
    >
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      link: {
        type: String,
        default: '#'
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

