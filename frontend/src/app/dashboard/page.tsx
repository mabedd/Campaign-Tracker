import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

const Dashboard = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-dark-foreground rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-primary dark:text-dark-text">
        Dashboard
      </h2>
      <p>Welcome to your dashboard!</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);

  if (!cookies.token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Dashboard;
