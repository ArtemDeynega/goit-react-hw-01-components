import user from '../../data/user.json';
import data from '../../data/data.json';
import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </>
  );
};
