import Vue from "vue";

Vue.directive("d",{
    bind: function(el, bindding){
        el.textContent = Math.pow(bindding.value, 2)
    },
    update: function(el, bindding){
        el.textContent = Math.pow(bindding.value, 2)
    }
});