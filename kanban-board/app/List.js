import React, { Component, PropTypes } from 'react';
import Card from './Card';
import { DropTarget } from 'react-dnd';
import constants from './constants';

const listTargetSpec = {
    hover(props, monitor) {
        const draggedId = monitor.getItem().id;
        props.cardCallbacks.updateStatus(draggedId, props.id)
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget()
    }
}

class List extends Component {
    render() {
        const { connectDropTarget } = this.props;

        let cards = this.props.cards.map((card) => {
            return <Card id={card.id}
                         title={card.title}
                         description={card.description}
                         color={card.color}
                         tasks={card.tasks}
                         taskCallbacks={this.props.taskCallbacks}
                         cardCallbacks={this.props.cardCallbacks}
                         key={card.id}/>
        });

        return connectDropTarget(
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        );
    }
}

List.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object,
    cardCallbacks: PropTypes.object,
    connectDropTarget: PropTypes.func.isRequired
}

export default DropTarget(constants.CARD, listTargetSpec, collect)(List);
