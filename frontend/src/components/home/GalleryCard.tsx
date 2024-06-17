import * as React from 'react';
import { useState, useEffect } from 'react';
import globalVariables from '../../Config';
import { IImage } from "../../Types";
import ImageSkelaton from './GalleryCardSkelaton';

type TProps = {
  Image: IImage;
  index: number;
}

const GalleryCard: React.FC<TProps> = (props: TProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [imagePath, setImagePath] = useState<string | null>(null);

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

  return (
    <>
            {isLoading ? (
              <ImageSkelaton />
            ) : isError || !imagePath ? (
              <ImageSkelaton />
            ) : (
              <article className="xl:m-7">
                <a href={'/galeri/' + props.index.toString()}>
                  <div className="bg-[#73DEE4] bg-opacity-40 rounded-lg ">
                  <img
                    className="block h-28 xs:h-44 sm:h-56 md:h-72 lg:h-80 object-cover object-center w-full rounded-md hover:border-2 hover:border-sky-300 hover:scale-105"
                    src={imagePath}
                    alt={'Image ' + props.Image.image_id}
                    onError={handleImageError}
                  />
                  </div>
                </a>
              </article>
            )}

    </>
  );
}

export default GalleryCard;
