import {createApp} from '@clux/react-web';
import {createRedux} from '@clux/react-web/lib/with-redux';
import {moduleGetter} from './project';
import '@/assets/css/global.m.less';

createApp(moduleGetter)
  .useStore(createRedux({initState: {}, enhancers: []}))
  .render()
  .run()
  .then(() => {
    const initLoading = document.getElementById('g-init-loading');
    if (initLoading) {
      initLoading.parentNode!.removeChild(initLoading);
    }
  });
