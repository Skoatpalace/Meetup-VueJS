export default {
    bind (el) {
        el.__autoResizer__ = () => {
            setTimeout(() => {
                el.style.cssText = 'height: auto'
                const height = el.scrollHeight + 2
                el.style.cssText = 'height:' + height + 'px'
            }, 0);
        }

        el.addEventListener('keydown', el.__autoResizer__)
    },
    unbind (el) {
        el.removeEventListener('keydown', el.__autoResizer__)
    }
}