import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions/ActionCreators";
import { StoreState } from "../reducers/rootReducer";

interface IProps {
    todos: Todo[];
    fetchTodos: Function;
    deleteTodo: typeof deleteTodo;
};

interface IState {
    fetching: boolean;    
};

class JTodos extends React.Component <IProps, IState> {
    state = { fetching: false };

    componentDidUpdate(prevProps: IProps): void {
        if (!prevProps.todos.length && this.props.todos.length) {
            this.setState({ fetching: false });
        }
    };

    onButtonClick = (): void => {
        this.props.fetchTodos();
        this.setState({ fetching: true });
    };

    onTodoClick = (id: number): void => {
        this.props.deleteTodo(id);
    };

    renderList = (): JSX.Element[] => {
        return this.props.todos.map((todo: Todo) => {
            return (
                <main key={todo.id}>
                    {todo.title}
                </main>
            );
        })
    };

    render() {
        return (
            <React.Fragment>
                <button onClick={this.onButtonClick}>Fetch</button>
                {this.state.fetching ? "LOADING" : null}
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
    { fetchTodos, deleteTodo }
)(JTodos);


