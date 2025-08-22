export const mixinVar = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
}

export const mixinData = {
    data() {
        return {
            x: 100,
            y: 200
        }
    }
}