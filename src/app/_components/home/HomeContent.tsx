import { PageHomeContentQuery } from '@/app/_graphql/generated/types.generated';
import { section } from '@/app/_styles/section';
import { text } from '@/app/_styles/text';
import { HygraphRichtext } from '../common/HygraphRichtext';
import { HomeExperience } from './HomeExperience';
import { HomeTwoCol } from './HomeTwoCol';

export const HomeContent = async ({
  promise,
}: {
  promise: Promise<PageHomeContentQuery | null>;
}) => {
  const data = await promise;
  const { recommendations, experience, education, volunteering, awards } =
    data?.pageHome ?? {};

  return (
    <>
      {experience ? <HomeExperience experiences={experience} /> : null}

      {education && education.length > 0 ? (
        <HomeTwoCol heading="Education" content={education} />
      ) : null}

      {volunteering && volunteering.length > 0 ? (
        <HomeTwoCol heading="Volunteering" content={volunteering} />
      ) : null}

      {awards && awards.length > 0 ? (
        <HomeTwoCol heading="Honors & Awards" content={awards} />
      ) : null}

      <section className={section.root}>
        <h2 className={section.heading}>Recommendations</h2>
        <ul className="space-y-9 md:space-y-24">
          {recommendations?.map((rec, index) => (
            <li key={index}>
              <figure className="grid lg:grid-cols-2 gap-4">
                <figcaption className="space-y-2.5">
                  <div className={text({ size: 'lg', weight: 'bold' })}>
                    {rec.name}
                  </div>
                  <div className={text()}>{rec.title}</div>
                </figcaption>
                <blockquote>
                  <HygraphRichtext content={rec.content.raw} />
                </blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
