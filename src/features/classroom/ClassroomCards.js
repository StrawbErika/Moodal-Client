import React, { Component } from 'react';
import { Input, Card, Button, Popup, Grid } from 'semantic-ui-react';
import * as API from '../../api';
import './Classroom.css';
import 'semantic-ui-css/semantic.min.css';
import EditPost from './EditPosts';
import DeletePost from './DeletePost';

class ClassroomCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    try {
      const { data } = await API.viewPosts(this.props.classId);
      console.log(data.data)
      this.setState({ posts : data.data });
    } catch(err) {
      console.log(err);
    }
  }

  handleChange = (e, data) => {
    const { posts } = this.state;
     console.log(data.value)

    const lol = posts.filter(x => x.content.includes(data.value))

    this.setState({ posts : lol })
  }

  render() {
    const { posts } = this.state; 
    return (
      <div>
        <Input label="Search posts" fluid placeholder='Search...' onChange={this.handleChange} />
        {
          posts.map((post, index) => {
            return <Card id="classroom-card-size" key={index}>
              <Card.Content
                header={
                  <div>
                    <span>
                      {post.author}
                            <EditPost />
                            <DeletePost />
                    </span>
                    <Card.Meta>{post.timestamp}</Card.Meta>
                  </div>
                }
              />
              <Card.Content description={post.content} />
              <Card.Content extra id="comment-segment">
                <form onSubmit={this.handleSubmit}>
                  <Input
                    placeholder="Add a comment"
                    type="submit"
                    value={this.state.value}
                    onChange={this.handleChange}
                    id="comment-input"
                  />
                </form>
              </Card.Content>
            </Card>
          })
        }
      </div>


    );
  }
}

export default ClassroomCards;
