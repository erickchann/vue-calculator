<template>
  <div id="main">
    <div class="calculator">
      <div class="display">{{current || 0}}</div>
      <div class="buttons">
        <div class="button atas clear" @click="clear"><i class="fab fa-cuttlefish"></i></div>
        <div class="button atas" @click="percent"><i class="fas fa-percentage"></i></div>
        <div class="button atas" @click="divide"><i class="fas fa-divide"></i></div>

        <div class="number" @click="inputNumber('7')">7</div>
        <div class="number" @click="inputNumber('8')">8</div>
        <div class="number" @click="inputNumber('9')">9</div>
        <div class="button kanan" @click="times"><i class="fas fa-times"></i></div>

        <div class="number" @click="inputNumber('4')">4</div>
        <div class="number" @click="inputNumber('5')">5</div>
        <div class="number" @click="inputNumber('6')">6</div>
        <div class="button kanan" @click="minus"><i class="fas fa-minus"></i></div>

        <div class="number" @click="inputNumber('1')">1</div>
        <div class="number" @click="inputNumber('2')">2</div>
        <div class="number" @click="inputNumber('3')">3</div>
        <div class="button kanan" @click="add"><i class="fas fa-plus"></i></div>

        <div class="number zero" @click="inputNumber('0')">0</div>
        <div class="number" @click="dothandler">.</div>
        <div class="button kanan" @click="equal"><i class="fas fa-equals"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: "",
      operator: null,
      prev: null,
      operatorClicked: false
    }
  },
  methods: {
    clear() {
      this.current = "";
    },
    inputNumber(number) {

      if (this.operatorClicked) {
        this.current = '';
        this.operatorClicked = false;
      }

      if (this.current.length > 10) {
        alert("Maximun char reached!");
      } else {
        this.current = `${this.current}${number}`;
      }

    },
    percent() {
      this.current = `${parseFloat(this.current) / 100}`;
    },
    dothandler() {
      if (this.current.indexOf('.') === -1) {
        this.current = `${this.current}${"."}`;
      }
    },
    setPrev() {
      this.prev = this.current;
      this.operatorClicked = true;
    },
    minus() {
      this.operator = (a,b) => a - b;
      this.setPrev();
    },
    add() {
      this.operator = (a,b) => a + b;
      this.setPrev();
    },
    divide() {
      this.operator = (a,b) => a / b;
      this.setPrev();
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