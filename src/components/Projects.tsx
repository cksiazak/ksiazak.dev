import styled from 'styled-components'

const ProjectSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 75px;

  @media (max-width: 900px) {
    padding-top: 50px;
  }
`

const SectionHeader = styled.h2`
  font-size: 3.75rem;
  color: white;

  @media (max-width: 900px) {
    margin-top: 0px;
    margin-bottom: 10px;
  }
`

const InnerProjectWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    width: 90%;
  }
`

const Sentence = styled.p`
  width: 40%;
  text-align: center;
  font-size: 2.5rem;
  padding-bottom: 25px;
  color: white;

  @media (max-width: 1800px) {
    font-size: 2rem;
  }

  @media (max-width: 1500px) {
    width: 50%;
  }

  @media (max-width: 1000px) {
    width: 60%;
  }

  @media (max-width: 600px) {
    width: 80%;
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
  }
`

const GithubLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 2.2rem;
  padding: 15px 20px;
  border: 2px solid white;
  text-align: center;
  margin: 5px 0px;
  border-radius: 5px;
  transition: 0.2s;;
  margin-bottom: 4rem;

  @media (max-width: 450px) {
    font-size: 1.75rem;
  }
`

const Projects = () => {
  return (
    <ProjectSection>
      <SectionHeader>Things I've Built</SectionHeader>
      <InnerProjectWrapper>
        <Sentence>
          I've been pretty busy over the last few years between COVID,
          dedicating myself to my work and side hobbies, that I deleted all my
          projects as they don't accurately reflect who I am, what I do, or my
          current abilities.
          <br />
          <br />
          I'm working on new things :)
        </Sentence>
        <GithubLink
          href='https://github.com/cksiazak'
          title='Cksiazak GitHub'
         
        >
          Check out my GitHub?
        </GithubLink>
      </InnerProjectWrapper>
    </ProjectSection>
  )
}

export default Projects
