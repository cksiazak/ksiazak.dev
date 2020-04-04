import React from 'react';
import { IoLogoGithub } from 'react-icons/io';

// styling
import styled from 'styled-components';
import { theme } from '../../constants/themes';

const CardContainer = styled.div``;

const CardInfo = styled.div``

const Metadata = styled.div``

const TechList = styled.ul``

const ImgContainer = styled.div``

const ProjectCard = ({ project: { default: Default, meta } }) => {
  return (
    <CardContainer>
      <CardInfo>
        <Metadata>
          <h3>{meta.title}</h3>
          <span>
            <IoLogoGithub />
          </span>
        </Metadata>
        <Default />
        <TechList>
          {meta.tech.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </TechList>
      </CardInfo>
      <ImgContainer>
        <img src={meta.image} />
      </ImgContainer>
    </CardContainer>
  );
};

export default ProjectCard;
