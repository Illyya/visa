<template>
  <div class="form__item form__item_country">
    <p class="form__label">Выберите страну</p>
    <div
      class="form__input"
      @click="areOptionsVisible = !areOptionsVisible"
      :class="{ inputBackcolor: areOptionsVisible }"
    >
      {{ selectedCountry }}
    </div>
    <div class="form__options" v-if="areOptionsVisible">
      <ul>
        <li
          class="form__option"
          v-for="option in this.$store.state.options.countries"
          :key="option.value"
          @click="selectedOption(option)"
        >
          {{ option.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "select1",
  props: ["selectedCountry"],
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