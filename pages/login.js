import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  console.log(providers);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt="" />
      {Object.values(providers).map((provider) => (
        <div>
          <button
            className="bg-[#18D860] text-white p-5 rounded-full"
            onClick={() => signIn(provider.id, { callback: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return { props: { providers } };
}
