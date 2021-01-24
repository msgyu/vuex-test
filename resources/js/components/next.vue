<template>
    <div>
        <p>数値：{{ count }}</p>
        <button @click="addCount(1)">+1</button>
        <button @click="addCount(5)">+5</button>
        <button @click="resetCount(5)">リセット</button>
    </div>
</template>
<script>
export default {
    computed: {
        count() {
            return this.$store.state.count;
        }
    },
    methods: {
        addCount(num) {
            this.$store.dispatch("addCounter", num);
        },
        resetCount() {
            this.$store.dispatch("resetCounter");
        }
    }
};
</script>
