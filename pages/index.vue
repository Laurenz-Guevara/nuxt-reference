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
            :type="'secondary'"
            :disabled="false"
            class="py-0"
            @click="console.log('I pressed a button!')"
            >
            Click Me
          </Button>
      </div>
    </section>
  </div>
</template>

<script>
  import Button from '../components/Button.vue'; 

  export default {
    name: 'Index',
    components: {
      Button
    },
    data() {
      return {
        isLoading: false, 
      };
    }
  };
</script>

