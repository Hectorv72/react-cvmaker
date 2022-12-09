import React from 'react'
import { KnowledgesIcon, StudiesIcon, WorkIcon } from '../../data/SectionIcons'
import SectionName from './SectionName'
import SectionSkills from './SectionSkills'
import SectionSummary from './SectionSummary'
import SectionTimeLine from './SectionTimeLine'

const Sections = () => {
  const WorkTimeline = [
    {
      date: 'may 2022 - current',
      title: "Fullstack Developer - Government House of the Province of Formosa",
      subtitle: "Formosa city",
      content: 'Development of a system for geo-referenced reports of the GGP of the province.'
    }
  ]

  const CertificatesTimeline = [
    {
      date: '2013 - 2020',
      title: "Programming Technician",
      subtitle: "Provincial School of Technical Education N°7, Formosa city",
    }
  ]

  const SkillsList = [
    'Linux', 'Git/Github', 'Javscript', 'Nodejs',
    'ReactJs', 'Typescript', 'Vue', 'ExpressJs',
    'Docker', 'MongoDB', 'SocketIO', 'Python', 'Django',
    'Tailwind', 'Bootstrap', 'MaterialUI',
    'Php', 'Laravel', 'Mysql', 'Postgresql', 'Java', 'C++'
  ]

  return (
    <section className="sections">
      <SectionName label="Hector Daniel Valdez" />
      <SectionSummary
        title="Backend developer - nodejs"
        subtitle="More than 5 years of experience in software development"
        description="Self-thaught. Very interested in learning new tecnologies. Challenging my knowledge to continue improving and developing as a professional."
      />
      <SectionTimeLine icon={WorkIcon} title="work experience" list={WorkTimeline} />
      <SectionTimeLine icon={StudiesIcon} title="studies and certifications" list={CertificatesTimeline} />
      <SectionSkills icon={KnowledgesIcon} title="knowledges" list={SkillsList} />
    </section>
  )
}

export default Sections