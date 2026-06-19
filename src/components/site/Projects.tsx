import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projectsSection } from "@/content/dictionary";
import { projects } from "@/content/projects";
import { t, type Locale } from "@/lib/i18n";

type ProjectsProps = {
  locale: Locale;
};

/** §04 — three representative case studies with a technical HUD overlay. */
export function Projects({ locale }: ProjectsProps) {
  const labels = projectsSection.labels;

  return (
    <section
      className="blk"
      id="projets"
      style={{
        background: "var(--charcoal-2)",
        borderTop: "1px solid var(--steel-line)",
        borderBottom: "1px solid var(--steel-line)",
      }}
    >
      <Container>
        <SectionHeader
          index={projectsSection.index}
          kicker={t(projectsSection.kicker, locale)}
          title={t(projectsSection.title, locale)}
          lede={t(projectsSection.lede, locale)}
        />
        <div className="proj-grid">
          {projects.map((project, index) => (
            <Reveal className="proj" key={index}>
              <div className="proj-img">
                <Image
                  src={project.image.src}
                  alt={t(project.image.alt, locale)}
                  fill
                  sizes="(max-width: 980px) 100vw, 33vw"
                />
                <span className="tag">{t(project.tag, locale)}</span>
                <div className="proj-hud" aria-hidden="true">
                  <span className="fig">{project.figure}</span>
                  <span className="weld">
                    <Icon name="weld" />
                  </span>
                  <span className="measure" />
                  <span className="cnr" />
                </div>
              </div>
              <div className="proj-body">
                <h3>{t(project.title, locale)}</h3>
                <dl className="proj-spec">
                  <div>
                    <dt>{t(labels.client, locale)}</dt>
                    <dd>{t(project.spec.client, locale)}</dd>
                  </div>
                  <div>
                    <dt>{t(labels.challenge, locale)}</dt>
                    <dd>{t(project.spec.challenge, locale)}</dd>
                  </div>
                  <div>
                    <dt>{t(labels.scope, locale)}</dt>
                    <dd>{t(project.spec.scope, locale)}</dd>
                  </div>
                  <div>
                    <dt>{t(labels.process, locale)}</dt>
                    <dd>{project.spec.process}</dd>
                  </div>
                </dl>
                <div className="proj-result">
                  <b>{t(labels.result, locale)}</b>
                  <span>{t(project.result, locale)}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
