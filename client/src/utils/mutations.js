import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $username: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      username: $username
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ARTIST = gql`
  mutation addArtist($artistName: String!) {
    addArtist(artistName: $artistName)
  }
`;

export const ADD_ART = gql`
  mutation addArt(
    $artist: String!
    $title: String!
    $year: String
    $description: String!
    $imageUrl: String!
    $size: String
    $price: String!
    $createdAt: String
  ) {
    addArt(
      artist: $artist
      title: $title
      year: $year
      description: $description
      imageUrl: $imageUrl
      size: $size
      price: $price
      createdAt: $createdAt
    )
  }
`;

export const REMOVE_ARTIST = gql`
  mutation removeArtist($_id: String!) {
    removeArtist(_id: $_id)
  }
`;

export const REMOVE_ART = gql`
  mutation removeArt($_id: String!) {
    removeArt(_id: $_id)
  }
`;
