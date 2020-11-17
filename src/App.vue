<template>
  <div id="app">
    <div class="application">
      <div class="container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss">
* {
  padding: 0;
  margin: 0;
  border: 0;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}

a:focus,
a:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1.2;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
  font-family: inherit;
  font-size: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a {
  color: inherit;
}

a,
a:visited,
a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  max-width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}

::placeholder {
  font-size: 0.875rem;
  color: rgb(255, 255, 255);
}
/*--------------------*/

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
  @media (max-width: 1200px) {
    max-width: 960px;
  }
  @media (max-width: 992px) {
    max-width: 720px;
  }
  @media (max-width: 768px) {
    max-width: 540px;
  }
  @media (max-width: 576px) {
    max-width: auto;
  }
}

$color-background: #3748aa;

body {
  font-family: "Roboto", Arial, sans-serif;
}

.application {
  padding: 92px 0 156px 0;
  color: rgb(255, 255, 255);
  background-color: $color-background;
  @media (max-width: 576px) {
    padding: 42px 0 70px 0;
  }
  &__title-step {
    font-weight: 300;
    font-size: 2.5rem;
  }
}

.form {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-gap: 33px;
  margin-bottom: 33px;
  @media (max-width: 992px) {
    justify-content: center;
    grid-template-columns:
      minmax(300px, max-content)
      repeat(auto-fill, 300px);
  }
  @media (max-width: 768px) {
    grid-template-columns:
      minmax(250px, max-content)
      repeat(auto-fill, 250px);
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
  &__item {
    position: relative;
    display: flex;
    flex-direction: column;

    // animation: fade-in-fwd 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    &:hover {
      cursor: pointer;
    }
    // @keyframes fade-in-fwd {
    //   0% {
    //     transform: translateZ(-80px);
    //     opacity: 0;
    //   }
    //   100% {
    //     transform: translateZ(0);
    //     opacity: 1;
    //   }
    // }
  }

  &__label {
    font-weight: 500;
    font-size: 1.25rem;
    margin-bottom: 10px;
  }

  &__input {
    position: relative;
    padding: 12px 15px;
    background-color: #273795;
    border-radius: 4px;
    color: #ffffff;
    transition: 0.2s ease;
    @media (max-width: 576px) {
      padding: 16px 15px;
    }
    &::after {
      content: "";
      position: absolute;
      display: inline-block;
      width: 25px;
      height: 25px;
      right: 11px;
      top: 8px;
      background: url(assets/select.svg) no-repeat;
      @media (max-width: 576px) {
        top: 13px;
        right: 14px;
      }
    }
    &:hover {
      color: $color-background;
      background-color: #ffffff;
      box-shadow: rgb(19, 1, 85) 0px 3px 8px;
    }
    &:focus {
      color: $color-background;
      background-color: #ffffff;
      box-shadow: rgb(19, 1, 85) 0px 3px 8px;
    }
  }

  &__options {
    position: absolute;
    width: 100%;
    background-color: rgb(255, 255, 255);
    top: 95%;
    border-top: 1px solid #3748aa;
    z-index: 10;
  }

  &__option {
    display: block;
    padding: 12px 15px;
    color: #ff6700;
    transition: 0.1s ease;
    &:hover {
      color: #ffffff;
      background: #ff6700;
    }
  }
}

.row {
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  &__left {
  }

  &__cost {
  }

  &__right {
  }

  &__btn {
  }
}

.cost {
  padding: 25px 64px;
  display: flex;
  border: 1px solid #ffffff;
  border-radius: 4px;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
  @media (max-width: 576px) {
    padding: 15px 30px;
    flex-direction: column;
  }
  &__text {
    max-width: 220px;
    font-weight: 300;
    font-size: 1.25rem;
    margin-right: 31px;
  }

  &__total {
    font-weight: 500;
    font-size: 1.875rem;
    color: #ff6700;
  }
}
.btn {
  display: inline-flex;
  width: 190px;
  height: 61px;
  justify-content: center;
  align-items: center;
  font-size: 1.125rem;
  color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 20px 40px #0b1a73;
  transition: 0.2s ease;
  &:hover {
    transform: translateY(3px);
    box-shadow: 0px 15px 20px #071149;
  }
}

.inputBackcolor {
  color: #3748aa;
  background-color: rgb(255, 255, 255);
}
</style>
