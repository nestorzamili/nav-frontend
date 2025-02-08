import useAuthStore from "../../stores/authStore";

const Dashboard = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div>
      <h1>Welcome, {user?.name}!</h1>
      <p>You are logged in as {user?.role}.</p>
    </div>
  );
};

export default Dashboard;
