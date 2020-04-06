import React from 'react';

// themes
import styled from 'styled-components';
import { theme } from '../constants/themes';

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
`;

const SectionHeader = styled.h2`
  font-size: 3.5rem;
`

const InnerProjectWrapper = styled.div`
  width: ${theme.global.pageWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Projects = () => {
  return (
    <ProjectSection>
      <SectionHeader>Things I've Built</SectionHeader>
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
