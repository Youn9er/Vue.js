<template>
   <div class="hello">
      <h1>{{ msg }}</h1>
      <div v-html="message" v-bind:id="id">
      </div>
       <div>
           {{number ? name : fullName}}
       </div>
       <div v-d="3">

       </div>
   </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            message: "<span style='font-size: 22px;color: red;'>hhhh</span>", //v-html可以渲染原生
            id: "txt",
            number: 1,
            name: "Younger",
            fullName: "Gang"
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
