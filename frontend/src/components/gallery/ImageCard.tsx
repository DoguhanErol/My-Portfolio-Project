// ImageCard.tsx
import  { useState, useEffect } from 'react';
import globalVariables from '../../Config';
import { IImage } from '../../Types';
import ImageSkeleton from '../gallery/ImageSkelaton';
import * as React from 'react';
import { Link } from 'react-router-dom';

interface ImageCardProps {
  Image: IImage;
  index: string;
  pageNumber: number; // pageNumber prop'u ekledik.
}

const ImageCard: React.FC<ImageCardProps> = ( props:ImageCardProps ) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [imagePath, setImagePath] = useState<string | null>(null);

  // Image path fetch function
  useEffect(() => {
    const fetchImage = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        // Simulate fetching image path
        const imgPath = globalVariables.baseUrl + props.Image.image_path;

        if (!imgPath) {
          throw new Error("Image path is empty");
        }

        setImagePath(imgPath);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImage();
  }, [props.Image.image_path]);

  const handleImageError = () => {
    setIsError(true);
  };

  const imageIdStr = props.index;
  const imgId = imageIdStr;

  return (
    <>
      {isLoading || isError || !imagePath ? (
        <ImageSkeleton />
      ) : (
        <article className="inline-grid rounded-xl shadow-md dark:bg-gray-900 dark:text-gray-100 hover:border-2 hover:rounded-md hover:border-blue-400 hover:bg-slate-800 hover:scale-105">
          {/* Image Card */}
          <figure className="cursor-pointer">
          <Link to={`/galeri/${props.pageNumber}/${imgId}`}>
              <img
                src={imagePath}
                alt={'Gallery Image ' + props.Image.image_id}
                id={props.Image.image_id.toString()}
                className="block h-28 xs:h-44 sm:56 md:h-72 lg:h-80 object-cover object-center w-full rounded-md dark:bg-gray-500"
                onError={handleImageError}
              />
          </Link>
          </figure>

        </article>
      )}
    </>
  );
};

export default ImageCard;
