<template>
  <div class="application__content">
    <p class="application__title-step">Шаг 1.</p>
    <form
      name="form"
      action="#"
      class="application__form form"
      method="get"
      id="form1"
    >
      <select1
        :selectedCountry="selectedCountry"
        @select="optionSelect1"
      ></select1>

      <select2 :selectedVisa="selectedVisa" @select="optionSelect2"></select2>

      <div class="form__item form__item_entry">
        <label for="entry" class="form__label">Въезд</label>
        <input
          type="date"
          name="entry"
          id="entry"
          class="form__input"
          v-model="selectedEntry"
        />
      </div>

      <div class="form__item form__item_exit">
        <label for="exit" class="form__label">Выезд</label>
        <input
          type="date"
          name="exit"
          id="exit"
          class="form__input"
          v-model="selectedExit"
        />
      </div>

      <select3
        :selectedAmount="selectedAmount"
        :selectedId="selectedId"
        @select="optionSelect3"
      ></select3>

      <select4
        :selectedTime="selectedTime"
        :selectedId="selectedId"
        @select="optionSelect4"
      ></select4>
    </form>
    <div class="application__row row">
      <div class="row__left">
        <div class="row__cost cost">
          <p class="cost__text">Предварительная стоимость:</p>
          <p class="cost__total">€{{ totalAmount }}</p>
        </div>
      </div>

      <div class="row__right">
        <router-link to="/about" class="btn">Продолжить</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import select1 from "@/components/select1.vue";
import select2 from "@/components/select2.vue";
import select3 from "@/components/select3.vue";
import select4 from "@/components/select4.vue";

export default {
  name: "step1",
  components: {
    select1,
    select2,
    select3,
    select4,
  },
  data() {
    return {
      selectedCountry: this.$root.options.countries[0].name,
      selectedVisa: this.$root.options.types[0].name,
      selectedAmount: this.$root.options.try[0].name,
      selectedTime: this.$root.options.timespent[8].name,
      priceVisa: +this.$root.options.types[0].price.replace(/,/g, "."),
      priceAmount: +this.$root.options.try[0].price.replace(/,/g, "."),
      priceTime: +this.$root.options.timespent[8].price.replace(/,/g, "."),
      selectedEntry: "",
      selectedExit: "",
      selectedId: "",
      totalAmount: "",
    };
  },
  created: function () {
    this.selectedId = this.$root.options.countries[0].id;
    this.totalAmount =
      this.priceVisa +
      this.priceAmount +
      this.priceTime;
    this.totalAmount = this.totalAmount.toFixed(2);
  },
  updated: function () {
    this.totalAmount = this.totalAmount.toFixed(2);
  },
  watch: {
    priceVisa: function () {
      this.totalAmount = 
        this.priceVisa + 
        this.priceAmount + 
        this.priceTime;      
    },
    priceAmount: function () {
      this.totalAmount = 
        this.priceVisa + 
        this.priceAmount + 
        this.priceTime;     
    },
    priceTime: function () {
      this.totalAmount = 
        this.priceVisa + 
        this.priceAmount + 
        this.priceTime;       
    },
    selectedCountry: function () {
      this.$store.state.country = this.selectedCountry;
    },
    selectedVisa: function () {
      this.$store.state.visa = this.selectedVisa;
    },
    selectedTime: function () {
      this.$store.state.time = this.selectedTime;
    },
    selectedAmount: function () {
      this.$store.state.amount = this.selectedAmount;
    },
    selectedEntry: function () {
      this.$store.state.entry = this.selectedEntry;
    },
    selectedExit: function () {
      this.$store.state.exit = this.selectedExit;
    },
    totalAmount: function () {
      this.$store.state.total = this.totalAmount;
    },
  },
  methods: {
    optionSelect1(option) {
      this.selectedCountry = option.name;
      this.selectedId = option.id;
    },
    optionSelect2(option) {
      this.selectedVisa = option.name;

      this.priceVisa = +option.price.replace(/,/g, ".");
    },
    optionSelect3(option) {
      this.selectedAmount = option.name;

      this.priceAmount = +option.price.replace(/,/g, ".");
      
    },
    optionSelect4(option) {
      this.selectedTime = option.name;

      this.priceTime = +option.price.replace(/,/g, ".");
    },
  },
};
</script>

<style lang="scss" scoped>
.application {
  &__content {
  }

  &__title-step {
    margin-bottom: 68px;
    @media (max-width: 576px) {
      margin-bottom: 38px;
    }
  }

  &__form {
  }

  &__row {
  }
}

.form {
  &__item {
    &_country {
      grid-column: 1 / 3;
      @media (max-width: 992px) {
        grid-column: auto;
      }
    }

    &_visa {
      grid-column: 3 / 5;
      @media (max-width: 992px) {
        grid-column: auto;
      }
    }

    &_entry {
      grid-column: 1 / 2;
      @media (max-width: 992px) {
        grid-column: auto;
      }
      .form__input::after {
        background: url(../assets/date.svg) no-repeat;
      }
    }

    &_exit {
      @media (max-width: 992px) {
        grid-column: auto;
      }
      .form__input::after {
        background: url(../assets/date.svg) no-repeat;
      }
    }

    &_number {
      grid-column: 3 / 5;
      @media (max-width: 992px) {
        grid-column: auto;
      }
    }

    &_time {
      grid-column: 5 / 7;
      @media (max-width: 992px) {
        grid-column: auto;
      }
    }
  }

  &__label {
  }

  &__input {
  }
}

.row {
  justify-content: space-between;
  &__left {
  }

  &__cost {
  }

  &__right {
  }
}

.cost {
  align-items: flex-end;

  &__text {
  }

  &__total {
  }
}

.btn {
}

.btn {
  background: url("../assets/keyboard_arrow_right.svg") no-repeat 90% 50%;
  background-color: #0baf4f;
  &:hover {
    background-position: 95% 50%;
    background-color: darken($color: #0baf4f, $amount: 3);
  }
}
</style>
