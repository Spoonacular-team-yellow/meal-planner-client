import { Component } from "react";
import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image'
import "./About.css"

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return(
      <Container>

        <div className="about-content">
          <h1>About us:</h1>
          <section>
            <h2 class="bioHeader">Phillip Chaplin</h2>
              <img src='../img/Phillip.jpeg'/>
              <p>A software developer with two years experience working with python, django and AWS.  His background in automation and controls informs his logical approach to developing websites that meet customer demands. After two years  His quest for knowledge and adaptability to any situation has contributed to his most recent success working for Practical Computing Solutions. </p>
          </section>
          <section>
            <h2 className="bioHeader">Daniel Yoon</h2>
            <img src='../img/DanieImg.jpeg'/>
              <p>I’m currently a Software Developer specializing in web applications. I build useful and visually appealing tools using modern Javascript libraries such as React. Previously, I used to work in roles involving logistics and retail. Working with clients and teams across different businesses has helped me gain a sense of the kind of needs and expectations that users have for different industries and platforms. I'm excited to work on projects that make a strong impact on the world. </p>
          </section>

          <section>
          <h2 className="bioHeader">Joel Myrtil</h2>
          <img src='../img/Joelmg.jpeg'/>
            <p>Dedicated technician/maintenance professional aspiring to become a Software Developer, with a history of meeting company goals utilizing consistent and organized practices.</p>
          </section>

          <section>
          <h2 className="bioHeader">Ahmed Mohamed</h2>
          <img src='../img/ahmedImg.jpeg'/>
            <p>Aspiring web developer. He has previous experience in IT, where he dealt with troublshooting hardware and softeware issues. He want to be apart of building something great. </p>
          </section>
        </div>
      </Container>
    )
  }
};

export default Profile;
