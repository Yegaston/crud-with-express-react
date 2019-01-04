import React, { Component } from 'react';


class App extends Component {
    addTask(e) {

        console.log('Adding task');
        e.preventDefault();
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
                                                <input type="text" placeholder="Task title" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                              <textarea placeholder="Task description" className="materialize-textarea"></textarea>
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

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;