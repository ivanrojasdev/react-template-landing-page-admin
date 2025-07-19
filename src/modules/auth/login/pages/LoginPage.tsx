export default function LoginPage() {
  return (
    <>
      <h1 className="text-xl leading-tight font-bold tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Sign in to your account
      </h1>
      <form className="space-y-4 md:space-y-6" action="#">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                Remember me
              </label>
            </div>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign in
        </button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet?{' '}
          <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
            Sign up
          </a>
        </p>
      </form>
    </>
  );
}
