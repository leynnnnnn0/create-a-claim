import "./About.css";
import Nav from "../../components/Navigation/Nav";
import { userStore } from "../../Store/userStore";
import { useEffect } from "react";

const About = () => {
  const { fetchUserData, users } = userStore();
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div className="about">
      <div className="nav-section">
        <Nav />
      </div>
      <div className="about-website">
        <div className="website-info">
          <h3>About</h3>
          <p>
            Welcome to our website! I would like to emphasize that this platform
            is exclusively designed for educational purposes, and there is
            absolutely no intention to infringe upon any copyrights. Our primary
            goal is to foster learning and provide a valuable educational
            experience for users. To enrich the educational content on this
            website, I utilize an external API, specifically the JSONPlaceholder
            API, to fetch and display sample user data. This API serves as a
            valuable resource for obtaining placeholder data that closely mimics
            real-world scenarios, allowing users to interact with realistic
            information in a controlled environment. The use of the
            JSONPlaceholder API enhances the learning experience by providing a
            dynamic and interactive way for users to explore and understand
            various concepts. From user profiles to posts and comments, this API
            contributes to the overall functionality and realism of the
            educational content presented on our platform. As I continue to
            strive for excellence in educational content, rest assured that the
            utilization of the JSONPlaceholder API is solely for the purpose of
            enhancing your learning journey. I appreciate your engagement with
            our platform and hope you find the content both informative and
            beneficial. Thank you for choosing our educational platform. Happy
            learning!
          </p>
        </div>
        <div className="emails">
          <h3>List of emails that you can try.</h3>
          {users.map((item, index) => {
            return <p key={index}>{item.email}</p>;
          })}
        </div>
        <div className="responsive-design">
          <h3>Responsiveness and Design</h3>
          <p>
            In the development of this website, I've chosen not to prioritize
            responsiveness and intricate design aspects at this stage. Instead,
            my primary focus has been on crafting and refining the underlying
            logic that governs the functionality of this insurance claim system.
            By directing attention towards the core functionality, I aim to
            ensure that the system operates seamlessly and efficiently,
            addressing the key requirements and objectives. While acknowledging
            that the website's design may currently lack the sophistication and
            aesthetic elements associated with a fully developed user interface,
            this decision is intentional. The intention is to create a space
            where the primary emphasis is on showcasing the intricacies of the
            insurance claim system itself, allowing users to interact with and
            understand the underlying mechanisms without distraction.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About