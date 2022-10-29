<template>
  <div class="calendar">
    <div class="date-head">
      <span class="date-info">2022年10月</span>
      <div class="date-function">
        <button>&lt;</button>
        <button>今天</button>
        <button>&gt;</button>
      </div>
    </div>
    <div class="date-week">
      <div>日</div>
      <div>一</div>
      <div>二</div>
      <div>三</div>
      <div>四</div>
      <div>五</div>
      <div>六</div>
    </div>
    <div class="date-list">
      <div class="date-item" v-for="n in 36" :key="n">
        {{ n }}
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.calendar {
  width: 60%;
  height: 70%;
  padding: 0 1rem;
  background-color: #313131;
  color: white;
}

.calendar .date-head {
  width: 100%;
  height: 3rem;
  background-color: #2d2d2d;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.calendar .date-head .date-function {
  display: flex;
}

.calendar .date-head .date-function button {
  background-color: white;
  outline: none;
  border: 1px solid #eee;
}

.calendar .date-head .date-function :nth-child(1) {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.calendar .date-head .date-function :nth-last-child(1) {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.calendar .date-week {
  width: 100%;
  height: 2rem;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.calendar div {
  text-align: center;
  line-height: 2rem;
}

.calendar .date-list {
  width: 100%;
  height: 75%;
  background-color: #3ae872;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  justify-items: center;
}

.calendar .date-list .date-item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.calendar .date-list .date-item:hover {
  background-color: #3ae872;
}
</style>
