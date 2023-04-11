import { useUser } from '@auth0/nextjs-auth0/client';

const UserProfile = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) return <div>No user profile available</div>;

  return (
    <div>
      <h2>User Profile</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default UserProfile;
