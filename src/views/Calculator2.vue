<template>
  <div id="main">
    <div class="calculator">
      <div class="display">{{current || 0}}</div>
      <div class="buttons">
        <div @click="clear" class="button atas clear"><i class="fab fa-cuttlefish"></i></div>
        <div @click="percent" class="button atas"><i class="fas fa-percentage"></i></div>
        <div @click="divide" class="button atas"><i class="fas fa-divide"></i></div>

        <div @click="input('7')" class="number">7</div>
        <div @click="input('8')" class="number">8</div>
        <div @click="input('9')" class="number">9</div>
        <div @click="times" class="button kanan"><i class="fas fa-times"></i></div>

        <div @click="input('4')" class="number">4</div>
        <div @click="input('5')" class="number">5</div>
        <div @click="input('6')" class="number">6</div>
        <div @click="minus" class="button kanan"><i class="fas fa-minus"></i></div>

        <div @click="input('1')" class="number">1</div>
        <div @click="input('2')" class="number">2</div>
        <div @click="input('3')" class="number">3</div>
        <div @click="add" class="button kanan"><i class="fas fa-plus"></i></div>

        <div @click="input('0')" class="number zero">0</div>
        <div @click="dot" class="number">.</div>
        <div @click="equal" class="button kanan"><i class="fas fa-equals"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: '',
      prev: null,
      operator: null,
      operatorClicked: false
    }
  },
  methods: {
    clear() {
      this.current = '';
    },
    input(num) {
      this.current = `${this.current}${num}`;
    },
    dot() {
      if (this.current.indexOf('.') === -1) {
        this.current = `${this.current}${'.'}`;
      }
    },
    setPrev() {
      this.prev = this.current;
      this.current = '';
      this.operatorClicked = true;
    },
    add() {
      this.operator = (a,b) => a + b;
      this.setPrev();
    },
    minus() {
      this.operator = (a,b) => a - b;
      this.setPrev();
    },
    divide() {
      this.operator = (a,b) => a / b;
      this.setPrev();
    },
    percent() {
      this.current = parseFloat(this.current)/100;
    },
    times() {
      this.operator = (a,b) => a * b;
      this.setPrev();
    },
    equal() {
      this.current = this.operator(parseFloat(this.prev), parseFloat(this.current));
      this.prev = null;
    }
  }
}
</script>

<style scoped>

div#main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

body {
  margin: 0 !important;
}

.calculator {
  font-size: 25px;
  padding: 10px;
  height: 60vh;
  width: 250px;
  background-color: white;
  box-shadow: 0 0 20px rgba(0,0,0,.2);
  border-radius: 10px;
}

.buttons {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  grid-gap: 5px;
}

div.button {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 53px;
  box-shadow: 0 0 5px rgba(0,0,0,.2);
  border-radius: 50%;
  height: 53.75px;
  margin: 2.5px 0;
  transition: .3s;
  cursor: pointer;
}

.button.kanan {
  background-color: #992bee;
  color: #fff;
}

.button.kanan:hover {
  background-color: #a546ef;
}

.button.atas {
  background-color: #fdb82c;
  color: #fff;
}

.button.atas:hover {
  background-color: #fddf2c;
}

div.number {
  line-height: 53.75px;
  text-align: center;
  margin: 2.5px 0;
  transition: .3s;
  cursor: pointer;
}

div.number:hover {
  background-color: #d9efff;
}

.zero {
  grid-column: 1/3;
}

.button.clear {
  border-radius: 30px;
  grid-column: 1/3;
}



.display {
  grid-column: 1/5;
  height: 70px;
  text-align: right;
  padding: 10px;
  text-overflow: ellipsis;
  overflow: hidden  ;
}

</style>