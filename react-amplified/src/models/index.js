// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PostStatus = {
  "DRAFT": "DRAFT",
  "PUBLISHED": "PUBLISHED"
};

const { Task, Post, PrivateNote, User, DailyWins } = initSchema(schema);

export {
  Task,
  Post,
  PrivateNote,
  User,
  DailyWins,
  PostStatus
};