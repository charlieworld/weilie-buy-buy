
export default function WeilieFooter() {
  return (
    <footer className='flex justify-center items-center w-full fixed left-0 bottom-0 bg-black p-1 text-white'>
      Made by @Weilie with
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        className="h-4 w-4 md:h-6 md:w-6 ml-2"
      >
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>
    </footer>
  );
}
