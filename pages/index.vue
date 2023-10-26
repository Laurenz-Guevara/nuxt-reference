<template>
  <div>
    <section class="bg-black w-screen h-screen grid place-items-center">
      <div class="grid gap-4">
        <Button
          :isLoading="isLoading"
          :type="'primary'"
          class="py-0"
          >
          Click Me
        </Button>
          <Button
            :isLoading="isLoading"
            type="secondary"
            :disabled="false"
            class="py-0"
            @click="console.log('I pressed a button!')"
            >
            Click Me
          </Button>
            <Anchor type='primary' link='/test'>
            I'm a link!
            </Anchor>
      </div>
    </section>
  </div>
</template>

<script>
  import Button from '../components/Button.vue'; 
  import Anchor from '../components/Anchor.vue';
  export default {
    name: 'Index',
    components: {
      Button,
      Anchor
    },
    data() {
      return {
        isLoading: false, 
      };
    }
  };
</script>

