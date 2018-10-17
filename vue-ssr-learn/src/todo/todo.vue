<template>
    <div class="todo">
        <input
            type = "text"
            placeholder = "请输入待办事项"
            autofocus = "autofocus"
            class = "input"
            @keyup.enter="todo"
            v-model="todoItem"
        />
        <ul class="item">
            <li v-for="item in todoList" :key="item">
                <div class="content">
                    <input type="checkbox" />
                    <div>{{item}}</div>
                </div>
                <button type="reset">X</button>
            </li>
        </ul>
        <ul class="bottom">
            <li><span>0</span> items left</li>
            <li>all</li>
            <li>active</li>
            <li>completed</li>
            <li>clear completed</li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                todoItem:"",
                todoList:[],
            }
        },
        methods: {
            todo(){
                this.todoList.push(this.todoItem);
                this.todoItem = "";
                // alert("hh")
            }
        }
    }
</script>
<style>
    ul li {
        list-style: none;
    }
    .todo {
        width: 800px;
        /*height: 300px;*/
        background-color: #fff;
        padding: 10px 20px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        color: #999;
    }
    .input {
        padding: 10px 0 15px 0;
        height: 20px;
        width: 100%;
        font-size: 18px;
        color: #8c8c8c;
        border:none;
        outline: none;
        border-bottom: 1px #999999 solid;
    }
    .item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 20px;
        padding: 20px;
        margin: 0;
        /*max-height: 100px;*/
        /*overflow: auto;*/
    }
    .item li{
        display: flex;
        flex: 1;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px #999 solid;
        padding: 10px;
        height: 30px;
    }
    .item input {
        width: 20px;
        height: 20px;
    }
    .item .content {
        display: flex;
        flex-direction: row;
    }
    .item button {
        font-size: 24px;
        background-color: #ffffff;
        border: 0;
        outline: none;
        color: #999;
        font-weight: 200;
    }
    .item button:hover {
        border: 1px #9d9d9d solid;
        cursor: pointer;
    }
    .bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0;
    }
    .bottom li{
        padding: 5px;
    }
    .bottom li:hover{
        border: 2px #9d9d9d solid;
        border-radius: 5px;
        cursor: pointer;
    }
</style>