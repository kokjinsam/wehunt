import React from 'react';
import { mount } from 'react-mounter';
import { AppContainer } from 'react-hot-loader';

import { setTitle, addMetas, addLinks } from 'komorebi-utils/dochead';
import { defaultMetas, defaultLinks } from '../../configs/head';

import ConsoleErrorReporter from './components/console-error-reporter';

let localFlowRouter;
export default function (injectDeps, { FlowRouter }) {
  localFlowRouter = FlowRouter;

  const TrioLayoutCtx = (props) => {
    const TrioLayout = require('./components/layout.trio').default;
    const FullTrioLayout = injectDeps(TrioLayout);
    return (
      <AppContainer errorReport={ConsoleErrorReporter}>
        <FullTrioLayout {...props} />
      </AppContainer>
    );
  };

  FlowRouter.route('/', {
    name: 'hello',
    action() {
      setTitle('WeHunt');
      addMetas(defaultMetas);
      addLinks(defaultLinks);

      mount(TrioLayoutCtx, {
        topNavigation: () => (<p>Top navigation</p>),
        content: () => (<p>Content Page</p>),
        footer: () => (<p>Footer</p>),
      });
    },
  });
}

if (module.hot) {
  module.hot.accept([
    './components/layout.trio',
  ], () => {
    localFlowRouter._current.route._action(localFlowRouter._current.params);
  });
}
