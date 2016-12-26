import * as React from "react";
import {Redirect} from "react-router";

class Redirector extends React.Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.state = {
            to: "/",
            push: false
        }
    }

    update(e) {
        if(e.target.name === "push") {
            this.setState({push: e.target.checked });
            console.log("update", e.target.checked);
            return;
        }

        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div>
                <h1>Redirector</h1>
                <p>Change the settings below and see how we redirect - {this.state.push}</p>
                <form>
                    <input type="text" name="to" onChange={this.update} value={this.state.to} placeholder="to" />
                    <input type="checkbox" name="push" onClick={this.update} 
                        checked={this.state.push} placeholder="push" />
                    <input type="submit" value="submit"/>
                </form>
                <p>
                {this.props.location.query ? <p>
                    Redirecting to ...
                    <Redirect {...this.props.location.query} /> 
                    </p>: ''}
                </p>
            </div>
        )
    }
}

export default Redirector;