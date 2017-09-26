import React from 'react';

class Burger extends React.Component {
    render() {
        return (
            <p>
                {this.props.details.name}
                <span>- {this.props.details.resume}</span>
                <span>- {this.props.details.price}</span>
            </p>
        )
    }
}

export default Burger;