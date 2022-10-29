<script setup>
import Calendar from "./components/Calendar.vue";
import TheLayout from "./components/TheLayout.vue";
import {
  getFirstDate,
  getLastDate,
  getPrevEndDateList,
  getNextDateStartDateList,
  getCurrentMonthDateList,
} from "./data/date";

let date = new Date();

console.log("first date: ", getFirstDate(date));
console.log("laset date: ", getLastDate(date));
// console.log("prevList: ", getPrevEndDateList(date));
console.log("nextList: ", getNextDateStartDateList(date));
console.log("currentList: ", getCurrentMonthDateList(date));
</script>

<template>
  <TheLayout>
    <Calendar />
  </TheLayout>
</template>

<style scoped></style>
