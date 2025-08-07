type AspectRatio = "portrait" | "landscape" | null;

export function getContainerClasses(
  isVideo: boolean,
  imageAspectRatio: AspectRatio,
  videoAspectRatio: AspectRatio
) {
  if (isVideo) {
    switch (videoAspectRatio) {
      case "landscape":
        return "w-full h-[400px] flex items-center justify-center";
      case "portrait":
        return "w-full h-[500px] flex items-center justify-center";
      default:
        return "w-full h-[450px] flex items-center justify-center";
    }
  }
  switch (imageAspectRatio) {
    case "landscape":
      return "w-full h-[400px] flex items-center justify-center";
    case "portrait":
      return "w-full max-w-sm aspect-[9/16] mx-auto max-h-[60vh]";
    default:
      return "w-full h-[350px] flex items-center justify-center";
  }
}
