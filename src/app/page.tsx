import Image from "next/image";
import Solution from "./_components/Solution";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col w-full items-center justify-between p-5">
          <Solution
              imageOne="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg"
              imageTwo="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg"
              likes="345"
              location="ldasflkjsdfh"
              title="Tree"
              user="Husni "
          />
      </main>
  );
}
