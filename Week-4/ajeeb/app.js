let a1 = new Vue({
    el: '#a1',
    data: {
        message: "Hello World-1"
    }
})
let a2 = Vue({
    el: '#a2',
    data: {
        message: "Hello World-2"
    }
})
let a3 = Vue({
    el: '#a3',
    data: {
        message: "Hello World-3"
    }
})

/**
 * You can create as many Vue instances as you want and can assign to whatever
 * variable you want to.
 * To use the variables and all the data used declared in that particular
 * Vue instance you can access it inside a HTML tag with the same id mentioned
 * in the Vue instance
 */