
Vue.component('subitem',{
  template:'#subitem-template',
  props: ['item','callback'],
  methods:{
    showItems: function(){
      console.log(this.items);
    },
    onClick: function(elm){
      this.$emit('callback', elm);
    }
  }
})
new Vue({
  el: '#app',
  data: {
    initial: [
        {active: false, childs:[], sub_container: false},
        {active: false, childs:[], sub_container: false},
        {active: false, childs:[], sub_container: false},
        {active: false, childs:[], sub_container: false}
    ],
    allElements: [],
    points: 0,
    started: false,
    history: []
  },
  methods: {
    selectParent: function(elm) {
      if(elm.active){
        this.points++;
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
      }else{
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
      var count = Math.abs(this.allElements.length / 2);
      var selected = 0;
      while (selected < count) {
        var index = Math.floor(Math.random() * this.allElements.length);
        if(!this.allElements[index].active){
          this.allElements[index].active = true;
          selected++;
        }
      }
    },
    restart: function(){
        this.history.push({points: this.points});
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
    clearInterval: function() {
      clearInterval(this.interval)
    }
  },
  created: function() {
    this.allElements = this.allElements.concat(this.initial);
    this.startInterval();
  },
  beforeDestroy: function() {
    this.clearInterval();
  }
});
