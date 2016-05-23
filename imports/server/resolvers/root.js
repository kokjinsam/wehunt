import {
  Stories,
  VoteHistories,
  StoryComments,
} from '../../lib/collections';

const rootResolvers = {
  Query: {
    async feed(_, { type }) {
      return Stories.find({
        type,
      }).fetch();
    },
    async story(_, { id }) {
      return Stories.findOne({
        _id: id,
      }).fetch();
    },
  },
  Mutation: {
    async createStory(_, { company, title, content }) {
      const createdAt = new Date();
      return Stories.insert({
        company,
        title,
        content,
        createdAt,
        votes: 0,
      });
    },
    async vote(_, { id, type }) {
      const voteValue = {
        UP: 1,
        DOWN: -1,
        CANCEL: 0,
      }[type];

      // update votes
      const selector = {
        _id: id,
      };

      const modifier = {
        $inc: {
          votes: voteValue,
        },
      };

      Stories.update(selector, modifier);

      // insert vote history
      // TODO: insert userId as well
      const createdAt = new Date();
      return VoteHistories.insert({
        storyId: id,
        createdAt,
        type,
      });
    },
    async comment(_, { storyId, content }) {
      const selector = {
        _id: storyId,
      };

      const story = Stories.findOne(selector);

      if (story) {
        const createdAt = new Date();

        // TODO: insert userId as well
        return StoryComments.insert({
          storyId,
          content,
          createdAt,
        });
      }

      throw new Error(`Unable to find story ${storyId}`);
    },
  },
};

export default rootResolvers;
