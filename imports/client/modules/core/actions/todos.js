// @flow

import { apollo } from 'apollo-tools';
import { Random } from 'meteor/random';

type contextType = {
  Client: any,
};

export default {
  addTodo({ Client }: contextType) {
    const options = {
      mutation: `
        mutation {
          createTodo(todo: "whut new todo ${Random.id()}")
        }
      `,
    };

    apollo(Client).mutateWith(options, (err, res) => {
      if (err) {
        console.log(err);
      }

      if (res) {
        console.log(res);
      }
    });
  },
};
