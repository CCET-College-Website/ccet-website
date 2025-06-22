import NoticePanel from './NoticePanel'
import LatestEvents from './LatestEvents'
import NewsPanel from './NewsPanel'
import Contact from './ContactUs'
import OurAlumni from './OurAlumni'
import Gallery from './Gallery'
import EventCalendar from './EventCalendar'

function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <LatestEvents />
        <div className="flex justify-center items-center">
          <NewsPanel />
        </div>
      </div>
      <EventCalendar />
      <NoticePanel />
      <Gallery />
      <OurAlumni />
      <Contact />
    </div>
  )
}

export default Home