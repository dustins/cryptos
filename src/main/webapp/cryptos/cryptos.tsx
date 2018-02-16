import React, {Component} from 'react';

export interface CryptosComponentProps {
    name?: String
}

export interface CryptosComponentState {
    name: String
}

export class CryptosComponent extends Component<CryptosComponentProps, CryptosComponentState> {
    constructor(props: CryptosComponentProps, context: any) {
        super(props);

        this.state = {
            name: props.name || "World"
        };

        ["Universe", "Crypto", "Friends"].forEach((name, index) => {
            setTimeout(() => {
                this.setState({"name": name})
            }, (index * 2 + 2) * 1000);
        });
    }

    render() {
        return <h1>Hello {this.state.name}</h1>
    }
}
