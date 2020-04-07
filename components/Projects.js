import React, { useContext } from 'react';

// themes
import styled from 'styled-components';
import { theme } from '../constants/themes';
import ThemeContext from '../lib/ThemeContext';

// Components
import ProjectCard from './Projects/ProjectCard';

// Markdown Data
import * as SwagDragon from '../data/projects/swag-dragon.mdx';
import * as Ksiazakdev from '../data/projects/ksiazak-dev.mdx';
import * as AirBnBPricing from '../data/projects/airbnb-optimal-pricing.mdx';
import * as SongSight from '../data/projects/song-sight.mdx';

const ProjectSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 75px;

  @media (max-width: 900px) {
    padding-top: 50px;
  }
`;

const SectionHeader = styled.h2`
  font-size: 3.75rem;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};

  @media (max-width: 900px) {
    margin-top: 0px;
    margin-bottom: 10px;
  }
`;

const InnerProjectWrapper = styled.div`
  width: ${theme.global.pageWidth};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    width: 90%;
  }
`;

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <ProjectSection>
      <SectionHeader darkMode={darkMode}>Things I've Built</SectionHeader>
      <InnerProjectWrapper>
        <ProjectCard project={SwagDragon} />
        <ProjectCard project={Ksiazakdev} />
        <ProjectCard project={AirBnBPricing} />
        <ProjectCard project={SongSight} />
      </InnerProjectWrapper>
    </ProjectSection>
  );
};

export default Projects;
