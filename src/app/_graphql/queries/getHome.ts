import { gql } from 'graphql-request';

export const GET_HOME_INTRO_QUERY = gql`
  query PageHomeIntro {
    pageHome(where: { id: "clin6ligz11u80blil5d3db7h" }) {
      brands
      introHeading
      introContent {
        raw
      }
    }
  }
`;

export const GET_HOME_CONTENT_QUERY = gql`
  query PageHomeContent {
    pageHome(where: { id: "clin6ligz11u80blil5d3db7h" }) {
      experience(first: 12) {
        ...Experience
      }
      recommendations(first: 15) {
        name
        title
        content {
          raw
        }
      }
    }
  }
  fragment Experience on Experience {
    title
    position
    date
    responsibilities
    software
    description {
      raw
    }
  }
`;
