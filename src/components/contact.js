import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Brandon Chao</h2>
            <img
              src="https://media.istockphoto.com/vectors/vector-hipster-man-bearded-face-with-bun-black-and-white-vector-id963072476?k=6&m=963072476&s=612x612&w=0&h=60wVAYTRP5eU9DDZvj48G8D9VhsbYiKDUrO1jg5Vvz4="
              alt="avatar"
              style={{ height: "250px" }}
            />
            <div>
              <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
                My name is Brandon Chao. 24 year old born and raised in Boston,
                Ma. Got my GED and went to UMass Boston to study exercise and
                health sciences. Have done odds jobs such as an electrician
                apprentice and meter maid. Decided to learn how to code at the
                start of the pandemic, and after many tutorials and free classes
                on Youtube, here I am today just looking to advance my future
                and career.
              </p>
            </div>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (123) 456-7890
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    Lofu6@yahoo.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
