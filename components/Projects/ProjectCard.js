import React from 'react';
import { IoLogoGithub, IoIosLink } from 'react-icons/io';

// styling
import styled from 'styled-components';
import { theme } from '../../constants/themes';

const CardContainer = styled.div`
  width: 100%;
  max-width: ${theme.global.maxPageWidth};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;

  &:nth-child(even) {
    flex-direction: row-reverse;

    .card-information {
      align-items: flex-end;

      .project-meta {
        .project-title {
          justify-content: flex-end;
        }
      }

      .project-card-info {
        margin-left: -125px;
        margin-right: 0px;
      }

      .project-tech {
      }

      .project-links {
      }
    }
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Content = styled.div`
  max-width: 600px;
  background: red;
  padding: 15px;
  margin-right: -125px;
  margin-left: 0px;
  margin-top: 15px;
  margin-bottom: 15px;
  position: relative;
  z-index: 2;

  p {
    margin: 0px;
    font-size: 1.8rem;
  }
`;

const Metadata = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.5rem;
`;

const Title = styled.h3`
  margin: 0px;
`;

const LinkContainer = styled.div`
  font-size: 2rem;
  padding-bottom: 10px;

  a {
    &:nth-child(2) {
      padding: 0px 5px;
    }

    text-decoration: none;
    transition: ${theme.global.transitionTime};

    &:hover {
      color: yellow;
      transform: scale(1.25);
    }
  }
`;

const TechWrapper = styled.div`
  padding: 10px 0px;
  font-size: 1.8rem;
`;

const ImgContainer = styled.div`
  width: 600px;
  position: relative;
  z-index: 1;

  img {
    height: auto;
    width: 100%;
  }
`;

const ProjectCard = ({ project: { default: ProjectContent, meta } }) => {
  return (
    <CardContainer>
      <CardInfo className='card-information'>
        <LinkContainer className='project-links'>
          {meta.href && (
            <a href={meta.href}>
              <IoLogoGithub />
            </a>
          )}
          {meta.git && (
            <a href={meta.git}>
              <IoIosLink />
            </a>
          )}
        </LinkContainer>
        <Metadata className='project-meta'>
          <TitleWrapper className='project-title'>
            <Title>{meta.title}</Title>
          </TitleWrapper>
        </Metadata>
        <Content className='project-card-info'>
          <ProjectContent />
        </Content>
        <TechWrapper className='project-tech'>
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
