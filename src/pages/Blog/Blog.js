import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Blog = () => {
    return (
        <Container className='my-5'>
            <Card>
                <Card.Body>
                    <Card.Title>Top 5 Reasons to Learn JavaScript</Card.Title>
                    <Card.Text>
                    Being a developer it is overwhelming to learn multiple languages to build different kinds of applications. Most of the time we need to learn more than one language just to build a single application or to build various applications. For the frontend part, you learn a different language and for the backend one a different language. For mobile, you learn a different one, for game development you learn a different one. Every time learning a new language becomes quite confusing or sometimes frustrating for developers… Surely we all want to stick to one language that can perform pretty much any task. <br />

                    So whats the solution for the above problems? Can we just learn a single language and manage multiple things together? Is there any language that can fulfill most of the tasks? Is there any language that can be used everywhere…? <br />

                    JavaScript is everywhere…whether its a small startup or a big company, most of them are working on this language to build various kinds of applications. Earlier JavaScript was only used to make your page interactive and it was limited to the web browser only. But now this language has become a part of server-side coding as well and its giving tough competition to the other languages in the market.  <br />

                    Today, JavaScript is visible almost everywhere. A lot of frameworks and libraries are also available that can do pretty much anything you want.  It is used by 95% of all the websites which you can check here. According to Stack Overflow Developer Survey 2020, JavaScript is the #1 programming language. 
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Blog;