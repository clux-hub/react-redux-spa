import React from 'react';
import {Switch} from '@clux/react-web';
import {connectRedux, Provider} from '@clux/react-web/lib/with-redux';
import {LoadView, RouteState, APPState} from '@/APP';
import NotFound from '@/components/NotFound';

const MainLayout = LoadView('mainLayout', 'main');

interface StoreProps {
  subView: RouteState['params'];
}
interface OwnerProps {}
interface DispatchProps {}

const Component: React.FC<StoreProps & DispatchProps & OwnerProps> = ({subView}) => {
  return (
    <>
      <Switch elseView={<NotFound />}>{subView.mainLayout && <MainLayout />}</Switch>
    </>
  );
};

function mapStateToProps(appState: APPState): StoreProps {
  return {subView: appState.route.params};
}

const APP = connectRedux(mapStateToProps)(React.memo(Component));

export default function Root({store}) {
  return (
    <Provider store={store}>
      <APP />
    </Provider>
  );
}
