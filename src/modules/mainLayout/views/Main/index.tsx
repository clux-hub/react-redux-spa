import React from 'react';
import {RouteState, APPState} from '@/APP';
import {Switch} from '@clux/react-web';
import {connectRedux} from '@clux/react-web/lib/with-redux';
import NotFound from '@/components/NotFound';
import Navigation from '../Navigation';
import TabBar from '../TabBar';
import styles from './index.m.less';

// const Photos = LoadView('route', 'main');

export interface StoreProps {
  subView: RouteState['params'];
}
export interface OwnerProps {}
export interface DispatchProps {}

const Component: React.FC<StoreProps & DispatchProps & OwnerProps> = ({subView}) => {
  return (
    <>
      <Navigation />
      <div className={styles.root}>
        <Switch elseView={<NotFound />}>ddd</Switch>
      </div>
      <TabBar />
    </>
  );
};

function mapStateToProps(appState: APPState): StoreProps {
  return {subView: appState.route.params};
}

export default connectRedux(mapStateToProps)(React.memo(Component));
