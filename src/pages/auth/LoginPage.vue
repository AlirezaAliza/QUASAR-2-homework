<template>
  <div class="background">
    <div class="page">
      <label>Username</label>
      <q-input/>
      <label>Password</label>
      <q-input/>
      <q-btn outline rounded color="primary" label="Sing in" /><br><br>
      <q-btn outline rounded color="primary" label="You don't have an account" />
    </div>
  </div>
</template>
<style>
  * {
    color: white;
  }
  .background {
    background-image: url(/public/images/Jowhareh_galleries_poster_956cce9f-36c0-4c1a-b0d8-ae5c37d5c235.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 698px;
  }
  .page {
    background-color: rgba(0 0 0 / 0.8);
    /* background-color: red; */
    position: relative;
    left: 34%;
    top: 20%;
    padding: 10px 50px 50px;
    border-radius: 14px;
    width: 500px;
    height: auto;
    text-align: center;
  }
</style>
