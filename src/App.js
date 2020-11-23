// https://www.youtube.com/watch?v=sBws8MSXN7A&t=1860s
import React, { Component } from 'react'
import Header from './components/layout/Header'
import Todos from './components/todos/Todos'
import AddTodo from './components/todos/AddTodo'
import { uuid } from 'uuidv4'

import './App.css'

class App extends Component {
	state = {
		todos: [
			{
				id: uuid(),
				title: 'Take out the trash',
				completed: false,
			},
			{
				id: uuid(),
				title: 'Finish laundry',
				completed: false,
			},
			{
				id: uuid(),
				title: 'Make dinner',
				completed: false,
			},
		],
	}

	// Toggle Complete
	toggleComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed // sets it to the opposite of what it is currently set to
				}
				return todo
			}),
		})
	}

	// Delete Todo
	delTodo = (id) => {
		this.setState({
			todos: [...this.state.todos.filter((todo) => todo.id !== id)],
		})
	}

	// Add Todo
	addTodo = (title) => {
		const newTodo = {
			id: uuid(),
			title,
			completed: false,
		}
		this.setState({
			todos: [...this.state.todos, newTodo],
		})
	}

	render() {
		return (
			<div className='App'>
				<div className='container'>
					<Header />
					<AddTodo addTodo={this.addTodo} />
					<Todos
						todos={this.state.todos}
						toggleComplete={this.toggleComplete}
						delTodo={this.delTodo}
					/>
				</div>
			</div>
		)
	}
}

export default App
