<template>
  <div class="application__content">
    <p class="application__title-step">Шаг 2.</p>
    <p class="application__user">
      Пользователь: {{ firstName }} {{ lastNameOneLetter }}
    </p>
    <form
      name="form"
      action="#"
      class="application__form form"
      method="get"
      id="form1"
      v-on:submit.prevent="alert"
    >
      <div class="form__item form__item_first-name">
        <label for="first-name" class="form__label">Имя</label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          class="form__input"
          placeholder="Введите Имя"
          v-model="firstName"
          @input="firstLetter"
        />
      </div>

      <div class="form__item form__item_last-name">
        <label for="last-name" class="form__label">Фамилия</label>
        <input
          type="text"
          name="last-name"
          id="last-name"
          class="form__input"
          placeholder="Введите фамилию"
          v-model="lastName"
          @input="oneLetter"
        />
      </div>

      <div class="form__item form__item_date-of-birth">
        <label for="date-of-birth" class="form__label">Дата рождения</label>
        <input
          type="date"
          name="date-of-birth"
          id="date-of-birth"
          class="form__input"
          v-model="dateOfBirth"
        />
      </div>

      <select5
        :selectedNationality="selectedNationality"
        @select="optionSelect5"
      ></select5>
    </form>
    <div class="application__row row">
      <div class="row__top">
        <div class="row__cost cost">
          <p class="cost__span-visa">Виза</p>
          <div class="cost__item-list">
            <div class="cost__item">
              <p class="cost__country cost__visa">
                Страна: {{ this.$store.state.country }}
              </p>
              <p class="cost__kind-visa cost__visa">
                Вид визы: {{ this.$store.state.visa }}
              </p>
            </div>
            <div class="cost__item">
              <p class="cost__entry cost__visa">
                Въезд: {{ this.$store.state.entry }}
              </p>
              <p class="cost__time cost__visa">
                Время обработки: {{ this.$store.state.time }}
              </p>
            </div>
            <div class="cost__item">
              <p class="cost__text">Предварительная стоимость:</p>
            </div>
            <div class="cost__item">
              <p class="cost__total">€{{ this.$store.state.total }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row__bottom">
        <router-link to="/" class="btn">Вернуться</router-link>
        <button class="btn btn__form" type="submit" form="form1">Готово</button>
      </div>
    </div>
  </div>
</template>

<script>
import select5 from "@/components/select5.vue";

export default {
  name: "step2",
  components: {
    select5,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      selectedNationality: "Россия",
    };
  },
  watch: {
    firstName: function () {
      this.$store.state.firstName = this.firstName;
    },
    lastName: function () {
      this.$store.state.lastName = this.lastName;
    },
    dateOfBirth: function () {
      this.$store.state.dateOfBirth = this.dateOfBirth;
    },
    selectedNationality: function () {
      this.$store.state.nationality = this.selectedNationality;
    },
  },
  methods: {
    alert() {
      console.log(JSON.stringify(this.$store.state));
    },
    firstLetter() {
      this.firstName =
        this.firstName[0].toUpperCase() + this.firstName.slice(1);
    },
    oneLetter() {
      this.lastName = this.lastName[0].toUpperCase() + this.lastName.slice(1);
      this.lastNameOneLetter = this.lastName[0] + ".";
    },
    optionSelect5(option) {
      this.selectedNationality = option.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.application {
  &__content {
  }

  &__title-step {
    margin-bottom: 48px;
  }

  &__form {
  }

  &__row {
  }

  &__user {
    padding: 0 0 7px 0;
    display: inline-block;
    font-weight: 500;
    font-size: 1.25rem;
    border-bottom: 3px solid #ffffff;
    margin-bottom: 21px;
  }
}

.application {
  &__form {
  }
}
.form {
  grid-template-columns: repeat(4, auto);
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 300px);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 250px);
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }

  &__item {
    &_first-name {
    }

    &_last-name {
    }

    &_date-of-birth {
      // width: 157px;
      .form__input::after {
        background: url(../assets/date.svg) no-repeat;
      }
    }

    &_nationality {
      // width: 349px;
    }
  }

  &__label {
  }

  &__input:hover::placeholder {
    color: #3748aa;
  }
}

.row {
  flex-direction: column;

  &__top {
    margin-bottom: 44px;
  }

  &__cost {
  }

  &__bottom {
    margin-left: auto;
    @media (max-width: 576px) {
      margin-left: 0;
    }
    @media (max-width: 450px) {
      display: flex;
      flex-direction: column;
    }
  }
}

.row {
  &__cost {
  }
}
.cost {
  padding: 41px 64px;
  flex-direction: column;
  @media (max-width: 576px) {
    padding: 21px 34px;
  }

  &__span-visa {
    font-weight: 500;
    font-size: 0.8125rem;
    margin-bottom: 7px;
  }

  &__item-list {
    display: grid;
    grid-template-columns: max-content max-content;
    grid-gap: 27px;
    @media (max-width: 576px) {
      grid-template-columns: auto;
    }
  }

  &__item {
  }

  &__visa {
    font-size: 0.75rem;
    line-height: 150%;
    color: #a5afec;
  }

  &__country {
  }

  &__kind-visa {
  }

  &__entry {
  }

  &__time {
  }

  &__text {
  }

  &__total {
    height: 100%;
    display: flex;
    align-items: flex-end;
  }
}

.btn {
  position: relative;
  background-color: #3748aa;
  @media (max-width: 450px) {
    margin-bottom: 30px;
  }
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 10px;
    height: 10px;
    left: 15%;
    background: url("../assets/keyboard_arrow_right.svg") no-repeat 50%;
    transition: 0.2s ease;
    transform: rotate(180deg);
  }
  &:hover {
    background-color: darken($color: #3748aa, $amount: 3);
  }
  &:hover::after {
    left: 10%;
  }
  &__form {
    margin-left: 27px;
    background-color: #0baf4f;
    @media (max-width: 450px) {
      margin-left: 0;
    }
    &::after {
      transform: rotate(360deg);
      left: 80%;
    }
    &:hover {
      background-color: darken($color: #0baf4f, $amount: 3);
    }
    &:hover::after {
      left: 85%;
    }
  }
}
</style>