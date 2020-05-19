const customPlugin = {
        install: function (Vue, options) {

            // 1. Add global method or property
            Vue.myGlobalMethod = function () {
                alert('I am global method!')
            }

            Vue.myCustomProperty = 'I am custom property'
            
            // 2. Add global asset
            Vue.directive('blue-color', {
                bind (el, binding) {
                    el.style.color = 'blue'
                }
            })

            // 3. Inject some component options, mixins
            Vue.mixin({
                data() {
                    return {
                        custom_message: 'rarrrrr'
                    }
                },
                created () {
                    console.log('custom mixin created')
                },
                methods: {
                    scream () {
                        alert(this.custom_message)
                    }
                },
            })

            // 4. Add an instance method or property
            Vue.prototype.$customMethod = function () {
                alert('I am custom instance method')
            }
        }
}

export default customPlugin