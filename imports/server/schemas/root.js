// @flow

const rootSchema = [`
  enum FeedType {
    TRENDING
    NEW
    POPULAR
  }

  enum VoteType {
    UP
    DOWN
    CANCEL
  }

  type Story {
    _id: String
    title: String
    content: String
    createdAt: String
  }

  type VoteHistory {
    _id: String
    storyId: String
    userId: String
    createdAt: String
    type: String
  }

  type StoryComment {
    _id: String
    storyId: String
    authorId: String
    content: String
    createdAt: String
  }

  type Query {
    feed(type: FeedType!): [Story]
    story(id: String!): Story
  }

  type Mutation {
    createStory(
      company: String!,
      title: String!,
      content:String!,
    ): String

    vote(
      id: String!,
      type: VoteType!
    ): String

    comment(
      storyId: String!,
      content: String!
    ): String
  }

  schema {
    query: Query
    mutation: Mutation
  }
`];

export default rootSchema;
