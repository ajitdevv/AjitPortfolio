import NotfoundImage from "./404page.jpg";
export default function NotFoundPage() {
  return (
    <div>
      <h1 className="w-full flex justify-center items-center">
        <img
          className="w-250 h-100 mt-20 flex justify-center items-center"
          src={NotfoundImage}
          alt="404 - Page Not Found"
        />
      </h1>
    </div>
  );
}
