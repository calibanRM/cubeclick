<template>
  <div id="app">
			<div class="container">
				<h1>Cubeclick</h1>
				<div class="counter">
					<span>Points: {{points}}</span> <span>Combo: {{combo}}<span v-if="combo == maxCombo">MAX</span></span>
				</div>
				<div class="game-container">
					<div class="game">
            <div class="game-content">
  						<div @click.stop="selectParent(item)" v-for="(item, index) in initial" v-bind:class="{red: item.active, sub_container: item.sub_container, item: !item.sub_container}">
  							<CubeItem v-for="child in item.childs" v-bind:item="child" @callback="selectParent"></CubeItem>
  						</div>
            </div>
					</div>
					<div class="history">
						<h3>History</h3>
						<ul>
							<li v-for="item in history">{{item.points}}</li>
						</ul>
					</div>
				</div>
			</div>
	</div>
</template>

<script>
import CubeItem from './components/CubeItem.vue'

export default {
  name: 'app',
  components: {
    CubeItem
  },
  data: ()=>({
    initial: [
        {active: false, childs:[], sub_container: false},
        {active: false, childs:[], sub_container: false},
        {active: false, childs:[], sub_container: false},
        {active: false, childs:[], sub_container: false}
    ],
    allElements: [],
    points: 0,
    started: false,
    history: [],
    combo: 0,
    maxCombo: 10,
    latestClick: false
  }),
  methods: {
    selectParent: function(elm) {
      if(elm.active){
        this.points++;
        if(this.combo < this.maxCombo){
          this.combo++;
        }
        this.latestClick = new Date();
        if(this.combo > 2){
          this.points += Math.round(this.combo/2);
        }
        elm.active = false;
        elm.childs = [
          {active: false, childs:[]},
          {active: false, childs:[]},
          {active: false, childs:[]},
          {active: false, childs:[]}
        ];
        this.allElements = this.allElements.filter(function(current){
            return current !== elm;
        });
        this.allElements = this.allElements.concat(elm.childs);
        elm.sub_container = true;
      }else if(elm.childs.length === 0){
        this.restart();
      }
    },
    clearActives: function() {
      this.allElements.forEach(function(item){
        item.active = false;
      });
    },
    activeRandom: function(){
      this.clearActives();
      var count = Math.abs(this.allElements.length / 3);
      var selected = 0;
      while (selected < count) {
        var index = Math.floor(Math.random() * this.allElements.length);
        if(!this.allElements[index].active){
          this.allElements[index].active = true;
          selected++;
        }
      }
    },
    compare: function(a, b) {
      if (a.points > b.points) {
        return -1;
      }
      if (a.points < b.points) {
        return 1;
      }
      return 0;
    },
    restart: function(){
        this.history.push({points: this.points});
        this.history = this.history.sort(this.compare);
        this.combo = 0;
        this.latestClick = false;
        this.initial = [
            {active: false, childs:[], sub_container: false},
            {active: false, childs:[], sub_container: false},
            {active: false, childs:[], sub_container: false},
            {active: false, childs:[], sub_container: false}
        ];
        this.points = 0;
        this.allElements = this.allElements.concat(this.initial);
    },
    startInterval: function() {
      this.interval = setInterval(function(){
        this.activeRandom();
      }.bind(this), 1000);
    },
    clearIntervals: function() {
      clearInterval(this.interval);
      clearInterval(this.comboTimer);
    },
    checkCombo: function() {
      let date = new Date();
      date.setSeconds(date.getSeconds() - 1.5);
      if(this.latestClick && this.latestClick < date){
        this.combo = 0;
      }
    }
  },

  created: function() {
    this.allElements = this.allElements.concat(this.initial);
    this.comboTimer = setInterval(this.checkCombo.bind(this),500)
    this.startInterval();
  },
  beforeDestroy: function() {
    this.clearIntervals();
  }
}
</script>

<style>

#app {
    font-family: 'Aldrich';font-size: 22px;
}
.container{
	margin: auto;
	text-align: center;
	width: 80%;
}
.game-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.game{
	background-color: #000;
	max-height: 500px;
	width: 80%;
  border: solid 5px black;
  max-width: 500px;
  margin: auto;
  position: relative
}
.game:after{
  content:"";
  display:block;
  padding-bottom: 100%;
}
.game-content{
  position: absolute;
  height: 100%;
  width: 100%;
}

.history{
  padding: 0 20px;
}
.item{
	background-color: #fff;
	border-radius: 2%;
	float: left;
	height:calc(50% - 2 * 3px);
	margin: 3px;
	width:calc(50% - 2 * 3px);
}
.sub_container{
	float: left;
	height:calc(50% - 2 * 0px);
	margin: 0px;
	width:calc(50% - 2 * 0px);
}
.red{
	background-color: red;
}
.removed{
	visibility: hidden;
}
#clock:disabled{
	color: #1d1d1d;
}
#start:disabled{
	color: #1d1d1d;
}
#popup{
	display: none;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 100;
	background-color: rgba(0,0,0,0.75);
}

#message{
	position: absolute;
	top: 50%;
	left: 50%;
	width: 300px;
	height: 200px;
	margin-left: -150px;
	margin-top: -100px;
	background-color: white;
	display: table;
	border-radius: 10px;
	background-color: #DAFA5A;
}
#finish{
	display: table-cell;
	vertical-align: middle;
	text-align: center;
	cursor: pointer;
}
.counter{
  padding: 10px;
}
.container span {
  padding: 10px;
}
@media (max-width: 768px){
  .game-container {
    flex-direction: column;
  }
  .container{
    width: 100%;
  }
}

</style>
