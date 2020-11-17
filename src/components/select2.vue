<template>
  <div class="form__item form__item_visa">
    <p class="form__label">Тип визы</p>
    <div
      class="form__input"
      @click="areOptionsVisible = !areOptionsVisible"
      :class="{ inputBackcolor: areOptionsVisible }"
    >
      {{ selectedVisa }}
    </div>
    <div class="form__options" v-if="areOptionsVisible">
      <ul
        v-for="option in this.$root.options.types"
        :key="option.value"
        @click="selectOption(option)"
      >
        <li class="form__option">{{ option.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "select2",
  props: ["selectedVisa"],
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  methods: {
    selectOption(option) {
			this.$emit("select", option), 
			this.areOptionsVisible = false;
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