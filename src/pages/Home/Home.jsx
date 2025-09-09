import NoticePanel from './NoticePanel'
import VisionMission from './LatestEvents'
import NewsPanel from './NewsPanel'
import NewsDetails from './NewsDetails'
import Contact from './ContactUs'
import AboutUsSection from './AboutUsSection'
import OurAlumni from './OurAlumni'
import NewAlumni from './NewAlumni'
import Gallery from './Gallery'
import EventCalendar from './EventCalendar'
import bannerImg from "../../assets/home/banner.png"
import Achievements from './Achievements';
import RecentUpdates from "../RecentUpdates.jsx";  

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

      <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch">
        <VisionMission />
        <div className="flex justify-center items-stretch">
          <NewsPanel />
        </div>
      </div>

      <NoticePanel />
      <Achievements />
      <Gallery />
      <NewAlumni />
      {/* <OurAlumni /> */}
      <Contact />
    </div>
  )
}

export default Home;