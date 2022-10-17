import {
    Timeline,
    Events,
    UrlButton,
    ImageEvent,
    TextEvent,
    YouTubeEvent,
  } from '@merc/react-timeline';

function OurStory(props) {
    return (
        <div id = "ourstory">
            <p className= "ourStory">Story time</p>
            <Timeline>
                <Events>
                <TextEvent date="September 23, 2016" text="Up da **club**" />
        
                <ImageEvent
                    date="4/13/19"
                    text="You can embed images..."
                    src="https://res.cloudinary.com/dovoq8jou/image/upload/v1564772194/jellyfish.jpg"
                    alt="jellyfish swimming"
                    credit="Photo by [@tavi004](https://unsplash.com/@tavi004)"
                >
                    <div>
                    <UrlButton href="https://unsplash.com/search/photos/undersea">
                        View more undersea photos
                    </UrlButton>
                    </div>
                </ImageEvent>
        
                <YouTubeEvent
                    date="6/18/19"
                    id="6UnRHtwHGSE"
                    name="General Tso's Chicken recipe"
                    text="... and YouTube videos!"
                />
                </Events>
            </Timeline>
      </div>
    )
}

export default OurStory