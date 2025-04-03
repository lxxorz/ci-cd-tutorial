<script setup lang="ts">
import { ref } from 'vue'

interface CounterProps {
  initialValue?: number
  step?: number
}

const props = withDefaults(defineProps<CounterProps>(), {
  initialValue: 0,
  step: 1
})

const count = ref(props.initialValue)

const increment = (): void => {
  count.value += props.step
}

const decrement = (): void => {
  count.value -= props.step
}

const reset = (): void => {
  count.value = props.initialValue
}
</script>

<template>
  <div class="counter">
    <h2>计数器组件</h2>
    <div class="counter-display">{{ count }}</div>
    <div class="counter-controls">
      <button @click="decrement" class="counter-button decrement">-</button>
      <button @click="reset" class="counter-button reset">重置</button>
      <button @click="increment" class="counter-button increment">+</button>
    </div>
  </div>
</template>

<style scoped>
.counter {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
}

.counter-display {
  font-size: 2rem;
  font-weight: bold;
  margin: 16px 0;
  padding: 8px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.counter-controls {
  display: flex;
  justify-content: space-between;
}

.counter-button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;
}

.increment {
  background-color: #4caf50;
  color: white;
}

.decrement {
  background-color: #f44336;
  color: white;
}

.reset {
  background-color: #2196f3;
  color: white;
}

.counter-button:hover {
  opacity: 0.9;
}
</style>
