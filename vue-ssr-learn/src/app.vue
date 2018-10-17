<template>
    <!--<div class="app">-->
        <!--name:{{name}}-->
        <!--<input type="text" v-model = "surname">-->
        <!--<input type="text" v-model = "relName">-->
        <!--<span style = "color: red;">{{fallName}}</span>-->
    <!--</div>-->
    <!--&lt;!&ndash;<div>&ndash;&gt;-->
        <!--&lt;!&ndash;<input type="text" v-model = "surname">&ndash;&gt;-->
        <!--&lt;!&ndash;<input type="text" v-model = "relName">&ndash;&gt;-->
        <!--&lt;!&ndash;<span>{{fallName}}</span>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <Todo></Todo>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "./todo/header.vue";
    import Footer from "./todo/footer.jsx";
    import Todo from "./todo/todo.vue";
    export default {
        components: {
            Header,
            Footer,
            Todo,
        }
    }
    // export default {
    //     data() {
    //         return{
    //             surname:"",
    //             relName: "",
    //             name:"Younger",
    //             // fallName:""
    //         }
    //     },
    //     computed :{
    //         fallName: function () {
    //             return this.surname + this.relName;
    //         }
    //     }
    // }
</script>

<style  scoped>
    #app{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0
    }
    #cover{
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: #999;
        opacity: .3;
        z-index: -1;
    }
</style>
