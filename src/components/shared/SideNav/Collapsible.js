class Collapsible extends React.Component {
    constructor(props){
    super(props);
    this.state = {
    open: false
    }
    this.togglePanel = this.togglePanel.bind(this);
    }
    togglePanel(e){
    this.setState({open: !this.state.open})
    }
    render() {
    return (<div>
  
    </div>);
    }
    }
    export default Collapsible;