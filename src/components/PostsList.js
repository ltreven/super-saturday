import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'



export default function PostsList(props) {
    console.log("posts: ", props.posts)
    return (
        <div className="PostCard-container">
            {props.posts.items.map(post =>
                <Card.Body
                    key={post.id}
                >
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.description}</Card.Text>
                </Card.Body>
            )}

            <Link to='/posts/add'>
                <Button variant="warning">
                    Add Post
                </Button>
            </Link>
        </div>
    )
}
