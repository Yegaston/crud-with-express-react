import React, { Component } from 'react';


class App extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            description: '',
            tasks: [],
            id: '',
        };
        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.fetchTask = this.fetchTask.bind(this)
    }

    addTask(e) {
        if(this.state.id){
            fetch(`/api/tasks/${this.state.id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json)
                .then(data => {
                    console.log(data)
                    M.toast({html: 'Updated'});
                    this.setState({title: '', description: '', id: ''})
                    this.fetchTask();
                })

        } else {
            fetch('/api/tasks',
        {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({html: "task saved"})
                this.setState({title: '', description: ''});
                this.fetchTask();

            })
            .catch(err => console.log(err));

        }

        e.preventDefault();
    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    async fetchTask(){
        const res = await fetch('/api/tasks');
        const data = await res.json();

        this.setState({ tasks: data});
        console.log(this.state.tasks);
    }

    deleteTask(id){
      if(confirm('Are you sure you want deleted that task??')){
        fetch(`/api/tasks/${id}`,{
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        })
            .then(res => res.json)
            .then(data => {
                console.log(data);
                M.toast({html: 'task deleted'})
                this.fetchTask();
            })
      }   
    }

    async editTask(id){
        const res = await fetch(`/api/tasks/${id}`);
        const data = await res.json();
        this.setState({
            title: data.title,
            description: data.description,
            id: data._id
        })
    }

    componentDidMount(){
        this.fetchTask();
    }
    
    render() {
        return (
            <div>
                {/* Navigation */}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a href="/" className="brand-logo">Bien alto</a>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="title" onChange={this.handleChange} type="text" placeholder="Task title" value={this.state.title} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                              <textarea onChange={this.handleChange} name="description" placeholder="Task description" className="materialize-textarea" value={this.state.description}></textarea>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn light-blue darken-4">
                                            Send
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tasks.map(task => {
            return (
                <tr key={task._id}>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>
                        <button className='btn ligh-blue darken-4'
                            onClick={() => this.deleteTask(task._id)}>
                            <i className='material-icons'>delete</i>
                        </button>
                        <button className='btn ligh-blue darken-4' style={{margin: '4px'}}
                            onClick={() => this.editTask(task._id)}>
                            <i className="material-icons">edit</i>
                        </button>
                    </td>
                </tr>
            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;