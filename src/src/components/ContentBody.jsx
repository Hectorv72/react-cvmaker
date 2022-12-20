import React, { useContext } from 'react'
import ContentContext from '../context/ContentContext'
import { KnowledgesIcon, StudiesIcon, WorkIcon } from '../data/SectionIcons'
import SectionName from '../layouts/Sections/SectionName'
import SectionSkills from '../layouts/Sections/SectionSkills'
import SectionSummary from '../layouts/Sections/SectionSummary'
import SectionTimeLine from '../layouts/Sections/SectionTimeLine'

const ContentBody = () => {
  const { content, language } = useContext(ContentContext)
  const { work_experience, titles_and_certifications, knowledges } = language
  const { body } = content
  return (
    <section className="sections">
      <SectionName label={body.name || 'Nombre'} />
      <SectionSummary
        title={body.summary.title}
        subtitle={body.summary.subtitle}
        description={body.summary.description}
      />
      <SectionTimeLine icon={WorkIcon} title={work_experience} list={body?.works || []} />
      <SectionTimeLine icon={StudiesIcon} title={titles_and_certifications} list={body?.certifications || []} />
      <SectionSkills icon={KnowledgesIcon} title={knowledges} list={body?.knowledges || []} />
    </section>
  )
}

export default ContentBody