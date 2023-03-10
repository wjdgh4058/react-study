class App extends React.Component {
  constructor(props) {
    super(props);
    // component state
    this.state = {
      headline: "React Application",
    };

    // component methods binding `this`
    this.handleChangeHeadline = this.handleChangeHeadline.bind(this);
  }

  // this.handleChangeHeadline
  handleChangeHeadline() {
    this.setState({
      headline: "NEW HEADLINE!! ð¯",
    });
  }

  render() {
    return (
      <div data-component="App">
        <h1>{this.state.headline}</h1>
        {/* Reactì JSX(React ìë¦¬ë¨¼í¸)ì ì°ê²°í ì´ë²¤í¸ ë¦¬ì¤ë(í¨ì)ë ì¸ì  ì¤íëëê°? */}
        <button type="button" onClick={this.handleChangeHeadline}>
          í¤ëë¼ì¸ ë³ê²½
        </button>
      </div>
    );
  }
}

/* -------------------------------------------------------------------------- */

const reactDomRoot = ReactDOM.createRoot(document.getElementById("root"));

reactDomRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
