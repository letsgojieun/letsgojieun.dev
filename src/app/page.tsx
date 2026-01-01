import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Image
        src="/images/home.png"
        alt='Home Image: "Better to be blurry but exciting than clearly boring!"'
        width={350}
        height={350}
        priority
      />
    </div>
  );
}
