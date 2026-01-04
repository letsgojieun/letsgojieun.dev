"use client";

import { useEffect, forwardRef } from "react";
import Image from "next/image";

import { useAspectRatio } from "@/hooks/useAspectRatio";
import { useMediaControls } from "@/hooks/useMediaControls";
import {
  getContainerClasses,
  getVideoClasses,
  getImageClasses,
} from "@/utils/mediaUtils";
import { Work } from "@/types/work";

interface WorkDetailProps {
  work: Work | null;
}

export const WorkDetail = forwardRef<HTMLDivElement, WorkDetailProps>(
  function WorkDetail({ work }, ref) {
    // media controls
    const {
      showControls,
      show: handleShowControls,
      hide: handleHideControls,
      touch: handleTouchStart,
    } = useMediaControls();

    // aspect ratio detection
    const {
      aspectRatio: imageAspectRatio,
      handleLoad: handleImageLoad,
      reset: resetImageAspect,
    } = useAspectRatio<HTMLImageElement>();
    const {
      aspectRatio: videoAspectRatio,
      handleLoad: handleVideoLoad,
      reset: resetVideoAspect,
    } = useAspectRatio<HTMLVideoElement>();

    useEffect(() => {
      resetImageAspect();
      resetVideoAspect();
    }, [work?.id, resetImageAspect, resetVideoAspect]);

    if (!work) {
      return (
        <div className="flex items-center justify-center h-full project-text-muted">
          <div className="text-center">
            <div className="text-4xl mb-4">📋</div>
            <p className="text-lg">Select a project to view details</p>
          </div>
        </div>
      );
    }

    const isVideo = Boolean(work?.image && work.image.endsWith(".mp4"));

    const containerClasses = getContainerClasses(
      isVideo,
      imageAspectRatio,
      videoAspectRatio
    );

    return (
      <div ref={ref} className="w-4/5 mx-auto pt-8 space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="project-title">{work.title}</h1>
          <p className="text-lg project-text-muted">{work.subtitle}</p>
          <p className="project-period font-medium font-gaegu">{work.period}</p>
        </div>

        {/* Project Image */}
        <div
          className={`${containerClasses} bg-button rounded-lg overflow-hidden transition-all duration-500`}
        >
          {work.image ? (
            isVideo ? (
              <video
                src={work.image}
                autoPlay
                loop
                muted
                playsInline
                controls={showControls}
                className={getVideoClasses(videoAspectRatio)}
                onMouseEnter={handleShowControls}
                onMouseLeave={handleHideControls}
                onTouchStart={handleTouchStart}
                onLoadedMetadata={handleVideoLoad}
              />
            ) : (
              <Image
                src={work.image}
                alt={`${work.title} preview`}
                width={800}
                height={600}
                className={getImageClasses(imageAspectRatio)}
                unoptimized={work.image.endsWith(".gif")}
                onLoad={handleImageLoad}
              />
            )
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center project-text-muted">
                <div className="text-4xl mb-2">🖼️</div>
                <p>Project Image</p>
                <p className="text-sm">(Coming Soon)</p>
              </div>
            </div>
          )}
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="project-detail-title">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {work.techStack.map((tech) => (
              <span key={tech} className="project-badge-primary">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Other Tools */}
        {work.otherTools && work.otherTools.length > 0 && (
          <div>
            <h3 className="project-detail-title">Other Tools</h3>
            <div className="flex flex-wrap gap-2">
              {work.otherTools.map((tool) => (
                <span key={tool} className="project-badge-accent">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Role & Responsibilities */}
        <div>
          <h3 className="project-detail-title">Role & Responsibilities</h3>
          <ul className="space-y-2">
            {work.role.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="project-period mt-1">•</span>
                <span className="project-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Achievements */}
        <div>
          <h3 className="project-detail-title">Key Achievements & Impact</h3>
          <ul className="space-y-2">
            {work.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-project-accent mt-1">✓</span>
                <span className="project-text">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
);
