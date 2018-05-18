import React, { Component } from 'react';
import { Input, Card, Button, Popup, Grid, Segment } from 'semantic-ui-react';
import * as API from '../../api';
import './Classroom.css';
import 'semantic-ui-css/semantic.min.css';
import EditPost from './EditPosts';
import DeletePost from './DeletePost';

class ClassroomCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments : [],
      content: '',
      author : JSON.parse(localStorage.getItem('login')).email,
      timestamp : new Date(),
      likeCount : 0
    };
  }

  async componentDidMount() {
    try {
      const { data } = await API.viewPosts(this.props.classId);
      console.log(data.data)
      this.setState({ posts : data.data });

      const { data : com } = await API.getAllComment();
      this.setState({ comments : com.data })
    } catch(err) {
      console.log(err);
    }
  }

  handleChangeA = (e, data) => {
    const { posts } = this.state;
     console.log(data.value)

    const lol = posts.filter(x => x.content.includes(data.value))

    this.setState({ posts : lol })
  }

  handleChange = (e, data) => {
    const state = this.state;
    state[data.name] = data.value;
    this.setState(state);
  }

  handleSubmit = async (e) => {
    try {
      console.log(this.state)
      const { data } = await API.addPost(this.state);
      console.log(data.message)
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    const { posts, comments } = this.state; 
    return (
      <div>
        <Input label="Search posts" fluid placeholder='Search...' onChange={this.handleChangeA} />
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
                
                  {
                    comments.map((com, i) => 
                      <Segment key={i}>
                        {com.author} - {com.content}
                        <Button floated='right' icon='delete' />
                        <Button floated='right' icon='edit' />
                      </Segment>
                  )
                  }

                  <Input
                    placeholder="Add a comment"
                    type="text"
                    onChange={this.handleChange}
                    name="content"
                    id="comment-input" />
                    <Button content='Comment' onClick={this.handleSubmit} />
              </Card.Content>
            </Card>
          })
        }
      </div>


    );
  }
}

export default ClassroomCards;
