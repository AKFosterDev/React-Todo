import React, { Component } from 'react'

class AddTodo extends Component {
	state = {
		title: '',
	}

	onSubmit = e => {
		e.preventDefault()
		this.props.addTodo(this.state.title)
		this.setState({ title: '' })
	}

	onChange = e => this.setState({ [e.target.name]: e.target.value })
	// [e.target.name] matches name input below. This way if you had more than one type of input (ie name, email, password, etc) the onChange will work dynamically based on the name property on the input tag

	render() {
		return (
			<form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
				<input
					type='text'
					name='title'
					placeholder='Add Todo...'
					style={{ flex: '10', padding: '5px' }}
					value={this.state.title}
					onChange={this.onChange}
				/>
				<input
					type='submit'
					value='Submit'
					className='btn'
					style={{ flex: '1' }}
				/>
			</form>
		)
	}
}

export default AddTodo
