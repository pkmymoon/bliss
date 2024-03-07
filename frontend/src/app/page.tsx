import Image from "next/image";
import Solution from "./_components/Solution";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col w-full items-center justify-between p-5">
          <Solution
              imageOne="/images/clean5.png"
              imageTwo="/images/garbagesA.png"
              likes="345"
              location="ldasflkjsdfh"
              title="Tree"
              user="Husni "
          />
      </main>
  );
}
