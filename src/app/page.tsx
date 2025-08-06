"use client";
import SplitText from "../components/SplitText";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center h-full">
      <SplitText
        text="Hi there, I'm Jieun"
        className="lg:text-7xl sm:text-5xl text-2xl font-bold text-center font-solway"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
      <span className="lg:text-3xl sm:text-2xl text-xl text-center text-subtitle font-gaegu">
        A front-end developer in Australia.
      </span>
    </div>
  );
}
