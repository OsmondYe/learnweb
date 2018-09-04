//
// React
//
// react demo
const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);


// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.like_button_container')
    .forEach(domContainer => {
        // Read the comment ID from a data-* attribute.
        const commentID = parseInt(domContainer.dataset.commentid, 10);
        ReactDOM.render(
            e(LikeButton, { commentID: commentID }),
            domContainer
        );
    });




// <script type="text/babel">  must marked as type= text/babel
const name ="a person has a name";
// embed {name} will expand automatically
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
);


const e2=<h6>haha</h6>;
ReactDOM.render(e2,document.getElementById('div1'));



function tick() {
    const e=(
        <div>
            <h1>It is {new Date().toLocaleTimeString()}.</h1>
        </div>
    );
    ReactDOM.render(e,document.getElementById('div1'));
}

setInterval(tick,1000);

