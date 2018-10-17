import "../assets/styles/footer.styl"

export default {
    data(){
        return {
            author: "Younger"
        }
    },
    render() {
        return (
            <div id = "footer">
                <span>write by {this.author}</span>
            </div>
        )
    }
}