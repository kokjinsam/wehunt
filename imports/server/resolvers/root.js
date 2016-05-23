// @flow

import {
  Stories,
  VoteHistories,
  StoryComments,
} from '../../lib/collections';

type rootType = {
  _: null,
};

type feedType = {
  type: string,
};

type storyType = {
  id: string,
};

type createStoryType = {
  company: string,
  title: string,
  content: string,
};

type voteType = {
  id: string,
  type: string,
};

type commentType = {
  storyId: string,
  content: string,
};

const rootResolvers = {
  Query: {
    async feed(_: rootType, { type }: feedType) {
      // type: string
      return Stories.find({
        type,
      }).fetch();
    },
    async story(_: rootType, { id }: storyType) {
      // type: id
      return Stories.findOne({
        _id: id,
      }).fetch();
    },
  },
  Mutation: {
    async createStory(_: rootType, { company, title, content }: createStoryType) {
      const createdAt = new Date();
      return Stories.insert({
        company,
        title,
        content,
        createdAt,
        votes: 0,
      });
    },
    async vote(_: rootType, { id, type }: voteType) {
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
    async comment(_: rootType, { storyId, content }: commentType) {
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
