<template>
  <div v-bind:class="{red: item.active, sub_container: item.sub_container, item: !item.sub_container}" v-on:click.stop="onClick(item)">
		<CubeItem v-for="child in item.childs" v-bind:item="child" @callback="onClick"></CubeItem>
	</div>
</template>

<script>
export default {
  name: 'CubeItem',
  props: ['item','callback'],
  methods:{
    showItems: function(){
      console.log(this.items);
    },
    onClick: function(elm){
      this.$emit('callback', elm);
    }
  }
}
</script>
