<template>
  <div class="form__item form__item_nationality">
    <p class="form__label">Гражданство</p>
    <div
      class="form__input"
      @click="areOptionsVisible = !areOptionsVisible"
      :class="{ inputBackcolor: areOptionsVisible }"
    >
      {{ selectedNationality }}
    </div>
    <div class="form__options" v-if="areOptionsVisible">
      <ul
        v-for="option in this.$store.state.options.nationality"
        :key="option.value"
        @click="selectedOption(option)"
      >
        <li class="form__option">{{ option.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "select5",
  props: ["selectedNationality"],
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  methods: {
    selectedOption(option) {
      this.$emit("selectedOption", option), (this.areOptionsVisible = false);
    },
    hideSelect() {
      this.areOptionsVisible = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>

<style>
</style>