<template>
  <div>
    <div>
      <p>数値：{{ count }}</p>
      <button @click="addCount(1)">+1</button>
      <button @click="addCount(5)">+5</button>
      <button @click="resetCount()">リセット</button>
      <router-link to="/next">次へ</router-link>
    </div>
    <div>
      <p>ローカル：{{ LocalCount }}</p>
      <button @click="addLocalCount(1)">+1</button>
      <button @click="addLocalCount(5)">+5</button>
      <button @click="resetLocalCounter()">リセット</button>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
    LocalCount() {
      return this.$store.state.LocalCount;
    }
  },
  methods: {
    addCount(num) {
      this.$store.dispatch("addCounter", num);
    },
    resetCount() {
      this.$store.dispatch("resetCounter");
    },
    addLocalCount(num) {
      this.$store.dispatch("addLocalCounter", num);
    },
    resetLocalCounter() {
      this.$store.dispatch("resetLocalCounter");
    }
  }
};
</script>
