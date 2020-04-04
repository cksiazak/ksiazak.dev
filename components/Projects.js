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
  justify-content: center;
  background: #0E79B2;
  box-shadow: inset 1px 1px 4px -1px rgba(42, 42, 42, 0.6);
`;

const InnerProjectWrapper = styled.div`
  width: ${theme.global.pageWidth};
`;

const Projects = () => {
  return (
    <ProjectSection>
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
