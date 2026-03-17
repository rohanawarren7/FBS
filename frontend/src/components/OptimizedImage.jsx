import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './OptimizedImage.css';

/**
 * OptimizedImage Component
 * 
 * Features:
 * - WebP format with JPEG fallback
 * - Lazy loading with Intersection Observer
 * - Blur-up placeholder effect
 * - Responsive srcsets
 * - Error handling
 * - Accessibility support
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  sizes = '100vw',
  priority = false,
  objectFit = 'cover',
  placeholder = 'blur',
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  // Generate WebP and fallback URLs
  const getImageUrls = (originalSrc) => {
    // If src is already a full URL or doesn't have extension, return as-is
    if (!originalSrc || originalSrc.startsWith('http') || originalSrc.startsWith('data:')) {
      return { webp: originalSrc, fallback: originalSrc };
    }

    // Extract base path and extension
    const lastDotIndex = originalSrc.lastIndexOf('.');
    if (lastDotIndex === -1) {
      return { webp: originalSrc, fallback: originalSrc };
    }

    const basePath = originalSrc.substring(0, lastDotIndex);
    const extension = originalSrc.substring(lastDotIndex + 1).toLowerCase();

    // If already WebP, no conversion needed
    if (extension === 'webp') {
      return { webp: originalSrc, fallback: `${basePath}.jpg` };
    }

    // Generate WebP version
    return {
      webp: `${basePath}.webp`,
      fallback: originalSrc
    };
  };

  // Generate srcset for responsive images
  const generateSrcSet = (baseSrc) => {
    if (!baseSrc || baseSrc.startsWith('http') || baseSrc.startsWith('data:')) {
      return null;
    }

    const lastDotIndex = baseSrc.lastIndexOf('.');
    if (lastDotIndex === -1) return null;

    const basePath = baseSrc.substring(0, lastDotIndex);
    const extension = baseSrc.substring(lastDotIndex + 1);

    // Generate srcset for common widths
    const widths = [320, 640, 960, 1280, 1920];
    return widths
      .map(w => `${basePath}-${w}.${extension} ${w}w`)
      .join(', ');
  };

  const { webp, fallback } = getImageUrls(src);
  const webpSrcSet = generateSrcSet(webp);
  const fallbackSrcSet = generateSrcSet(fallback);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !containerRef.current) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  // Handle image error
  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate blur hash placeholder (simplified - using CSS blur instead)
  const placeholderStyle = placeholder === 'blur' && !isLoaded ? {
    filter: 'blur(20px)',
    transform: 'scale(1.1)'
  } : {};

  return (
    <div
      ref={containerRef}
      className={`optimized-image-container ${className}`}
      style={{
        position: 'relative',
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : '100%',
        overflow: 'hidden',
        backgroundColor: '#f5f5f5'
      }}
    >
      {/* Blur placeholder */}
      {placeholder === 'blur' && !isLoaded && !hasError && (
        <div
          className="optimized-image-placeholder"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%)',
            ...placeholderStyle
          }}
        />
      )}

      {/* Error state */}
      {hasError && (
        <div className="optimized-image-error">
          <span>Failed to load image</span>
        </div>
      )}

      {/* Actual image */}
      {isInView && !hasError && (
        <picture>
          {/* WebP source */}
          <source
            srcSet={webpSrcSet || webp}
            sizes={sizes}
            type="image/webp"
          />
          
          {/* Fallback source */}
          <source
            srcSet={fallbackSrcSet || fallback}
            sizes={sizes}
            type={`image/${fallback.split('.').pop()}`}
          />
          
          {/* Fallback img */}
          <img
            ref={imgRef}
            src={fallback}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            onLoad={handleLoad}
            onError={handleError}
            className={`optimized-image ${isLoaded ? 'loaded' : ''}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit,
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease'
            }}
            {...props}
          />
        </picture>
      )}
    </div>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  sizes: PropTypes.string,
  priority: PropTypes.bool,
  objectFit: PropTypes.oneOf(['cover', 'contain', 'fill', 'none', 'scale-down']),
  placeholder: PropTypes.oneOf(['blur', 'none']),
  onLoad: PropTypes.func,
  onError: PropTypes.func
};

export default OptimizedImage;
