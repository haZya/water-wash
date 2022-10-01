import { gql } from 'graphql-request';

export const NavLinkFragment = gql`
  fragment NavLinkFragment on ComponentLayoutNavLink {
    title
    url
    color
    type
  }
`;
