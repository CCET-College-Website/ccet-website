import NoticePanel from './NoticePanel'
import VisionMission from './VissionMission.jsx'
import NewsPanel from './NewsPanel'
import Contact from './ContactUs'
import AboutUsSection from './AboutUsSection'
import NewAlumni from './NewAlumni'
import Gallery from './Gallery'
import EventCalendar from './EventCalendar'
import bannerImg from "../../assets/home/banner.png"
import Achievements from './Achievements';
import RecentUpdates from "./RecentUpdates.jsx";

function Home() {
    return (
        <div>
            <div>
                <style>
                    {`
            .home-banner {
              width: 100vw;
              max-width: 100vw;
              margin-left: calc(-50vw + 50%);
              display: block;
            }
          `}
                </style>
                <img className="home-banner" src={bannerImg} alt="Banner" />
            </div>

            <RecentUpdates />

            <AboutUsSection />

            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center px-4">
                <VisionMission />
                <div className="flex justify-center items-center">
                    <NewsPanel />
                </div>
            </div>

            <EventCalendar />

            <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch px-4">
                <div className="flex-1">
                    <NoticePanel />
                </div>
                <div className="flex-1">
                    <Achievements />
                </div>
            </div>

            <Gallery />
            <NewAlumni />
            <Contact />
        </div>
    )
}

export default Home;