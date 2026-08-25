import React, { useEffect, useState } from 'react';


const Thumbnail = ({ s3Bucket, s3KeyName }) => {
  const assetBaseUrl = `https://${s3Bucket}.s3.amazonaws.com/${s3KeyName}`;
  const image = `${assetBaseUrl}/${s3KeyName}.png`;
  const gif = `${assetBaseUrl}/${s3KeyName}.gif`;
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/demos/${s3KeyName}/metadata.json`);
        const data = await response.json();
        setMetadata(data);
      } catch (error) {
        console.error('Error fetching metadata:', error);
      }
    };

    fetchMetadata();
  }, [s3KeyName]);

  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };

    preloadImage(image);
    preloadImage(gif);
  }, [assetBaseUrl, s3KeyName, image, gif]);

  return (
    <div className="viewer-thumbnail group">
      <a
        href={`${process.env.PUBLIC_URL}/viewer.html?asset=${s3KeyName}`}
        className="block"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="gif-thumbnail w-full h-48 bg-gray-900 border border-gray-800 group-hover:border-accent transition-colors duration-300"
          style={{ backgroundImage: `url(${image})` }}
          data-static={image}
          data-gif={gif}
        ></div>
        <div className="mt-2 text-left">
          <p className="text-sm font-semibold group-hover:text-accent transition-colors duration-300">
            {metadata.title}
          </p>
          <p className="text-xs text-gray-500">Photographer: {metadata.author}</p>
        </div>
      </a>
    </div>
  );
};

export default Thumbnail;
