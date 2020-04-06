import React, { useContext } from 'react';
import { IoLogoGithub, IoIosLink } from 'react-icons/io';

// styling
import styled from 'styled-components';
import { theme } from '../../constants/themes';
import ThemeContext from '../../lib/ThemeContext';

const CardContainer = styled.div`
  width: 100%;
  max-width: ${theme.global.maxPageWidth};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;

  &:nth-child(even) {
    flex-direction: row-reverse;

    @media (max-width: 800px) {
      flex-direction: column-reverse;
    }

    .card-information {
      align-items: flex-end;

      @media (max-width: 800px) {
        align-items: center;
      }

      .project-meta {
        .project-title {
          justify-content: flex-end;

          @media (max-width: 800px) {
            justify-content: center;
          }
        }
      }

      .project-card-info {
        margin-left: -125px;
        margin-right: 0px;

        @media (max-width: 800px) {
          margin-left: 0px;
        }
      }

      .project-tech {
      }

      .project-links {
      }
    }
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 800px) {
    align-items: center;
  }
`;

const Content = styled.div`
  max-width: 600px;
  background: ${(props) =>
    props.darkMode
      ? 'rgba(90,92,106, 0.95)'
      : 'linear-gradient(315deg,rgba(179, 205, 209, 0.94) 0%,rgba(159, 164, 196, 0.94) 74%)'};
  margin-right: -125px;
  margin-left: 0px;
  margin-top: 15px;
  margin-bottom: 15px;
  position: relative;
  z-index: 2;
  box-shadow: 3px 3px 8px 0px rgba(42, 42, 42, 0.6);
  color: ${(props) => (props.darkMode ? 'white' : 'black')};

  p {
    padding: 5px 15px;

    &:first-child {
      padding-top: 15px;
    }

    &:last-child {
      padding-bottom: 15px;
    }

    margin: 0px;
    font-size: 1.8rem;

    @media (max-width: 1000px) {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 800px) {
    margin-right: 0px;
  }

  @media (max-width: 800px) {
    order: 3;
    margin-top: 0px;
  }
`;

const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  margin: 0px;
  font-size: 3rem;

  @media (max-width: 1000px) {
    font-size: 2.5rem;
  }

  @media (max-width: 800px) {
    order: 1;
    padding: 10px 0px;
  }

  @media (max-width: 400px) {
    font-size: 2.25rem;
  }
`;

const LinkContainer = styled.div`
  font-size: 2.5rem;
  padding-bottom: 10px;

  @media (max-width: 800px) {
    order: 2;
    padding-bottom: 10px;
  }

  a {
    color: ${(props) => (props.darkMode ? 'white' : 'black')};
    text-decoration: none;
    transition: ${theme.global.transitionTime};

    &:nth-child(2) {
      padding: 0px 5px;
    }

    &:hover {
      color: ${theme.lightMode.linkHover};
      transform: scale(1.25);
    }
  }
`;

const TechWrapper = styled.div`
  font-size: 1.8rem;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};

  @media (max-width: 1000px) {
    font-size: 1.6rem;
  }

  @media (max-width: 800px) {
    order: 4;
  }
`;

const ImgContainer = styled.div`
  width: 600px;
  position: relative;
  z-index: 1;
  box-shadow: 3px 3px 8px 0px rgba(42, 42, 42, 0.6);

  img {
    height: auto;
    width: 100%;
  }

  @media (max-width: 1000px) {
    width: 500px;
  }

  @media (max-width: 800px) {
    width: 450px;
  }

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const ProjectCard = ({ project: { default: ProjectContent, meta } }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <CardContainer>
      <CardInfo className='card-information'>
        <LinkContainer className='project-links' darkMode={darkMode}>
          {meta.href !== '' ? (
            <a href={meta.href} title={`${meta.title} github`}>
              <IoLogoGithub />
            </a>
          ) : null}
          {meta.git !== '' ? (
            <a href={meta.git} title={`${meta.title} deployment`}>
              <IoIosLink />
            </a>
          ) : null}
        </LinkContainer>
        <Metadata className='project-meta' darkMode={darkMode}>
          <TitleWrapper className='project-title'>
            <Title>{meta.title}</Title>
          </TitleWrapper>
        </Metadata>
        <Content className='project-card-info' darkMode={darkMode}>
          <ProjectContent />
        </Content>
        <TechWrapper className='project-tech' darkMode={darkMode}>
          <span>{meta.tech.join(' | ')}</span>
        </TechWrapper>
      </CardInfo>
      <ImgContainer>
        <img src={meta.image} alt={`${meta.title} image`} />
      </ImgContainer>
    </CardContainer>
  );
};

export default ProjectCard;
