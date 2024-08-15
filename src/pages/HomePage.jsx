import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
        <Hero title="Página Inicial" subtitle="Aqui é a página inicial." />
        <HomeCards />
        <JobListings isHome="true" />
        <ViewAllJobs />
    </>
  )
}

export default HomePage