import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';

const PopupVideo = ({ videoUrl }) => {
  const openPopup = () => {
    window.open(videoUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="popup-video bg-danger p-4" onClick={openPopup} style={{borderRadius:"1vw"}}>
      <YouTubeIcon style={{height:"4vw", width:"4vw"}}/>
    </div>
  );
};

export default PopupVideo;
