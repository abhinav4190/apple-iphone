import { hightlightsSlides } from "../constants";

function VideoCarousel() {
  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, index) => (
          <div key={list.id} id="slider">
            <div className="video-carousel_container">{list.textLists}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default VideoCarousel;
