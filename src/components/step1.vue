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
        @selectedOption="selectedOption"
      >
      </select1>

      <select2 
        :selectedVisa="selectedVisa" 
        @selectedOption="selectedOption"
      >
      </select2>

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
        @selectedOption="selectedOption"
      >
      </select3>

      <select4
        :selectedTime="selectedTime"
        :selectedId="selectedId"
        @selectedOption="selectedOption"
      >
      </select4>

    </form>

    <div class="application__row row">
      <div class="row__left">
        <div class="row__cost cost">
          <p class="cost__text">Предварительная стоимость:</p>
          <p class="cost__total">€{{ totalAmount }}</p>
        </div>
      </div>

      <div class="row__right">
        <span @click="nextStep" class="btn">Продолжить</span>
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
      selectedCountry: this.$store.state.options.countries[0].name,
      selectedVisa: this.$store.state.options.types[0].name,
      selectedAmount: this.$store.state.options.try[0].name,
      selectedTime: this.$store.state.options.timespent[8].name,
      priceVisa: +this.$store.state.options.types[0].price.replace(/,/g, "."),
      priceAmount: +this.$store.state.options.try[0].price.replace(/,/g, "."),
      priceTime: +this.$store.state.options.timespent[8].price.replace(/,/g, "."),
      selectedEntry: "",
      selectedExit: "",
      selectedId: "",
      totalAmount: "",
    };
  },
  created: function () {
    this.selectedId = this.$store.state.options.countries[0].id;
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
      this.$store.state.readyData.country = this.selectedCountry;
    },
    selectedVisa: function () {
      this.$store.state.readyData.visa = this.selectedVisa;
    },
    selectedTime: function () {
      this.$store.state.readyData.time = this.selectedTime;
    },
    selectedAmount: function () {
      this.$store.state.readyData.amount = this.selectedAmount;
    },
    selectedEntry: function () {
      this.$store.state.readyData.entry = this.selectedEntry;
    },
    selectedExit: function () {
      this.$store.state.readyData.exit = this.selectedExit;
    },
    totalAmount: function () {
      this.$store.state.readyData.total = this.totalAmount;
    },
  },
  methods: {
    selectedOption(option) {
      if (this.$store.state.options.countries.includes(option)) {
        this.selectedCountry = option.name;
        this.selectedId = option.id;         
      }
      if (this.$store.state.options.types.includes(option)) {
        this.selectedVisa = option.name;
        this.priceVisa = +option.price.replace(/,/g, ".");       
      }
      if (this.$store.state.options.try.includes(option)) {
        this.selectedAmount = option.name;
        this.priceAmount = +option.price.replace(/,/g, ".");     
      }
      if (this.$store.state.options.timespent.includes(option)) {
        this.selectedTime = option.name;
        this.priceTime = +option.price.replace(/,/g, ".");
      } 
    },    
    nextStep() {
      this.$emit('nextStep')
    }
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
