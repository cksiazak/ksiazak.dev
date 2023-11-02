import { ComponentType, FC } from "react"
import styled from "styled-components"
import { IoLogoGithub, IoIosLink } from "react-icons/io"
import Image from 'next/image'

// styling
import { theme } from "../../theme/themes"
 import { useTheme } from "../../theme/ThemeContext"

const CardContainer = styled.div`
  width: 100%;
  max-width: ${theme.global.maxPageWidth};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;

  &:nth-child(even) {
    flex-direction: row-reverse;

    @media (max-width: 900px) {
      flex-direction: column-reverse;
    }

    .card-information {
      align-items: flex-end;

      @media (max-width: 900px) {
        align-items: center;
      }

      .project-meta {
        .project-title {
          justify-content: flex-end;

          @media (max-width: 900px) {
            justify-content: center;
          }
        }
      }

      .project-card-info {
        margin-left: -125px;
        margin-right: 0px;

        @media (max-width: 1350px) {
          margin-left: -100px;
        }

        @media (max-width: 900px) {
          margin-left: 0px;
        }
      }
    }
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 900px) {
    align-items: center;
  }
`

const Content = styled.div<{
  isDarkMode: boolean
}>`
  max-width: 700px;
  background: ${({ isDarkMode }) =>
    isDarkMode
      ? "rgba(90,92,106, 0.95)"
      : "linear-gradient(315deg,rgba(179, 205, 209, 0.94) 0%,rgba(159, 164, 196, 0.94) 74%)"};
  margin-right: -125px;
  margin-left: 0px;
  margin-top: 15px;
  margin-bottom: 15px;
  position: relative;
  z-index: 2;
  box-shadow: 3px 3px 8px 0px rgba(42, 42, 42, 0.6);
  color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};

  p {
    padding: 5px 15px;

    &:first-child {
      padding-top: 15px;
    }

    &:last-child {
      padding-bottom: 15px;
    }

    margin: 0px;
    font-size: 2.2rem;

    @media (max-width: 1800px) {
      font-size: 2rem;
    }

    @media (max-width: 1350px) {
      font-size: 1.8rem;
    }

    @media (max-width: 900px) {
      font-size: 1.8rem;
    }

    @media (max-width: 500px) {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 1350px) {
    margin-right: -100px;
    max-width: 800px;
  }

  @media (max-width: 900px) {
    margin-right: 0px;
    order: 3;
    margin-top: 0px;
  }
`

const Metadata = styled.div<{
  isDarkMode: boolean
}>`
  display: flex;
  flex-direction: column;
  color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h3`
  margin: 0px;
  font-size: 3.5rem;

  @media (max-width: 900px) {
    font-size: 3rem;
    order: 1;
    padding: 15px 0px 10px;
  }

  @media (max-width: 450px) {
    font-size: 2.5rem;
  }

  @media (max-width: 450px) {
    font-size: 2rem;
  }
`

const LinkContainer = styled.div<{
  isDarkMode: boolean
}>`
  font-size: 3rem;
  padding-bottom: 10px;

  @media (max-width: 900px) {
    order: 2;
    padding-bottom: 10px;
  }

  @media (max-width: 450px) {
    font-size: 2.5rem;
  }

  a {
    color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};
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
`

const TechWrapper = styled.div<{
  isDarkMode: boolean
}>`
  font-size: 2.2rem;
  color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};

  @media (max-width: 1500px) {
    font-size: 2rem;
  }

  @media (max-width: 900px) {
    font-size: 1.8rem;
    order: 4;
  }

  @media (max-width: 500px) {
    font-size: 1.6rem;
  }

  @media (max-width: 450px) {
    font-size: 1.4rem;
  }
`

const ImgContainer = styled.div`
  width: 650px;
  position: relative;
  z-index: 1;
  box-shadow: 3px 3px 8px 0px rgba(42, 42, 42, 0.6);

  img {
    height: auto;
    width: 100%;
  }

  @media (max-width: 1500px) {
    width: 575px;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`

type ProjectCardProps = {
  project: {
    default: ComponentType,
    meta: {
      git: string,
      title: string,
      href: string,
      image: string,
      tech: string[]
    }
  }
}

const ProjectCard: FC<ProjectCardProps> = ({ project: { default: ProjectContent, meta } }) => {
  const { isDarkMode } = useTheme()
  return (
    <CardContainer>
      <CardInfo className="card-information">
        <LinkContainer className="project-links" isDarkMode={isDarkMode}>
          {meta.git !== "" ? (
            <a href={meta.git} title={`${meta.title} github`}>
              <IoLogoGithub />
            </a>
          ) : null}
          {meta.href !== "" ? (
            <a href={meta.href} title={`${meta.title} deployment`}>
              <IoIosLink />
            </a>
          ) : null}
        </LinkContainer>
        <Metadata className="project-meta" isDarkMode={isDarkMode}>
          <TitleWrapper className="project-title">
            <Title>{meta.title}</Title>
          </TitleWrapper>
        </Metadata>
        <Content className="project-card-info" isDarkMode={isDarkMode}>
          <ProjectContent />
        </Content>
        <TechWrapper className="project-tech" isDarkMode={isDarkMode}>
          <span>{meta.tech.join(" | ")}</span>
        </TechWrapper>
      </CardInfo>
      <ImgContainer>
        <Image src={meta.image} alt={`${meta.title} image`} />
      </ImgContainer>
    </CardContainer>
  )
}

export default ProjectCard
