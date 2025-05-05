import { useEffect } from "react";
import PageHeader from "../components/common/pageHeader";
import { useCards } from "../context/cardsContext";

function About() {
  const { resetSearch } = useCards();

  useEffect(() => {
    resetSearch();
  }, []);

  return (
    <div className="container col-10 col-md-8">
      <PageHeader title="About Me" classNameTitle="my-3" />
      <p>
        The website was developed as a final project for the React module,
        aiming to showcase my skills in building modern web applications. It
        includes features such as user authentication, content management, and
        dynamic user interfaces.
      </p>
      <p>
        Users can create and manage digital business cards, view detailed
        business profiles, and interact with the system based on their
        permissions.
      </p>
      <p>
        The project uses modern technologies like React, Axios, JSON Web Tokens,
        and responsive CSS.
      </p>
      <p>
        It reflects my attention to detail, commitment to clean code practices,
        and ability to build a complete user experience. Additionally, I
        strengthened my understanding of web development while ensuring security
        and working with a secure authentication system based on role-based
        access.
      </p>
      <p>
        This project was created by me, Tehila Nagar, as part of a professional
        web development course.
      </p>
      <p>
        I significantly advanced my practical skills and had the opportunity to
        apply everything I’ve learned in a real-world scenario, feeling proud of
        the outcome and what I’ve accomplished.
      </p>
    </div>
  );
}

export default About;
