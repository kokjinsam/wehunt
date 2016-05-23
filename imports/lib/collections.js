import { Mongo } from 'meteor/mongo';

export const Stories = new Mongo.Collection('stories');
export const VoteHistories = new Mongo.Collection('vote_histories');
export const StoryComments = new Mongo.Collection('story_comments');
