import React, { useEffect } from 'react';
import Thumbnail from './Thumbnail';

import { S3_BUCKET } from './consts';


const ThumbnailGrid = () => {
  useEffect(() => {
    const thumbnails = document.querySelectorAll('.gif-thumbnail');
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('mouseenter', () => {
        thumbnail.style.backgroundImage = `url('${thumbnail.dataset.gif}')`;
      });
      thumbnail.addEventListener('mouseleave', () => {
        thumbnail.style.backgroundImage = `url('${thumbnail.dataset.static}')`;
      });
    });
  }, []);

  // todo: hide hybrid.js and viewer.html?
  // todo: should we be using something like gatsby.js?
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <Thumbnail
        s3Bucket={S3_BUCKET}
        s3KeyName="tennis-demo"
      />
      <Thumbnail
        s3Bucket={S3_BUCKET}
        s3KeyName="football-demo"
      />
      <Thumbnail
        s3Bucket={S3_BUCKET}
        s3KeyName="tennis-seg"
      />
    </div>
  );
};

export default ThumbnailGrid;
