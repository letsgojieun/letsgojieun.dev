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

export function getVideoClasses(aspectRatio: AspectRatio) {
  if (aspectRatio === "landscape") {
    return "w-4/5 aspect-[3/2] object-contain transition-all duration-300 rounded-lg shadow-xl";
  }
  if (aspectRatio === "portrait") {
    return "w-64 aspect-[9/16] object-cover transition-all duration-300 rounded-lg shadow-xl";
  }
  return "w-80 aspect-video object-cover transition-all duration-300 rounded-lg shadow-xl";
}

export function getImageClasses(aspectRatio: AspectRatio) {
  if (aspectRatio === "landscape" || aspectRatio === null) {
    return "w-4/5 object-contain rounded-lg shadow-xl";
  }
  return "w-full h-full object-cover";
}
