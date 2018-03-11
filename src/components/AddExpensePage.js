import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm 
                    // props.dispatch(addExpense(expense));
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

// The commented out lines in this file were the way redux was handled previously.
// The reason for the updates, i.e. the additional function below, is because
// a spy can be used when testing for the onSubmit function and not dispatch
const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
})

// export default connect()(AddExpensePage);
export default connect(undefined, mapDispatchToProps)(AddExpensePage);