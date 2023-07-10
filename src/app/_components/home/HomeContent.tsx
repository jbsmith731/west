import { PageHomeContentQuery } from '@/app/_graphql/generated/types.generated';
import { section } from '@/app/_styles/section';
import { text } from '@/app/_styles/text';
import { HygraphRichtext } from '../common/HygraphRichtext';
import { HomeExperience } from './HomeExperience';

export const HomeContent = async ({
  promise,
}: {
  promise: Promise<PageHomeContentQuery | null>;
}) => {
  const data = await promise;
  const { recommendations, experience } = data?.pageHome ?? {};

  return (
    <>
      {experience ? <HomeExperience experiences={experience} /> : null}

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
