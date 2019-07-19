import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "../actions/ActionCreators";
import { StoreState } from "../reducers/rootReducer";

interface IProps {
    todos: Todo[];
    fetchTodos(): any;
};

class JTodos extends React.Component <IProps> {
    onButtonClick = (): void => {
        this.props.fetchTodos();
    };
    renderList = (): JSX.Element[] => {
        return this.props.todos.map((todo: Todo) => {
            return (
                <main key={todo.id}>{todo.title}</main>
            );
        })
    };
    render() {
        return (
            <React.Fragment>
                <button onClick={this.onButtonClick}>Fetch</button>
                {this.renderList()}
            </React.Fragment>
        );
    }
};

const mapStateToProps = ({todos}: StoreState): { todos: Todo[] } => {
    return { todos };
};

export const JTodosConnect = connect(
    mapStateToProps,
    { fetchTodos }
)(JTodos);


