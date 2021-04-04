import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { fetchTrendingNow, TYPES } from '@/actions/TrendingActions';
import { NAVIGATION } from '@/constants';
import { ErrorView, Spinner, HorizontalList } from '@/components';
import { getTrending } from '@/selectors/TrendingSelectors';
import { errorsSelector } from '@/selectors/ErrorSelectors';
import { isLoadingSelector } from '@/selectors/StatusSelectors';
import { strings } from '@/localization';

export function TrendingNow() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const trending = useSelector(getTrending, shallowEqual);
  const isLoading = useSelector(state =>
    isLoadingSelector([TYPES.TRENDING], state)
  );
  const errors = useSelector(
    state => errorsSelector([TYPES.TRENDING], state),
    shallowEqual
  );

  const onShowDetails = movieId => {
    navigation.navigate(NAVIGATION.myList, { movieId: movieId }); // TODO: Add go to details
  };

  useEffect(() => {
    dispatch(fetchTrendingNow());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  if (errors?.length) {
    return <ErrorView errors={errors} />;
  }

  return (
    <HorizontalList
      title={strings.common.trendingNow}
      posters={trending}
      onPress={onShowDetails}
    />
  );
}
