import { ExperienceFragment } from '@/app/_graphql/generated/types.generated';
import { list2Col } from '@/app/_styles/list';
import { section } from '@/app/_styles/section';
import { text } from '@/app/_styles/text';
import clsx from 'clsx';
import { HygraphRichtext } from '../common/HygraphRichtext';

export const HomeExperience = ({
  experiences,
}: {
  experiences: ExperienceFragment[];
}) => {
  return (
    <section className={section.root}>
      <h2 className={section.heading}>Experience</h2>

      <ul className={list2Col.root}>
        {experiences.map(
          (
            {
              title,
              date,
              position,
              location,
              description,
              responsibilities,
              software,
            },
            index,
          ) => {
            return (
              <li key={index} className={list2Col.item}>
                <div className="space-y-2.5">
                  <h3 className={text({ size: 'lg', weight: 'bold' })}>
                    {title}
                  </h3>
                  <div className={text()}>{position}</div>
                  <div className={text()}>
                    {date}
                    <br />
                    {location}
                  </div>
                </div>

                <div className="space-y-4">
                  <HygraphRichtext content={description?.raw} />

                  <div className="grid grid-cols-[1.25fr_1fr]">
                    <div>
                      <h4 className={text({ weight: 'bold' })}>
                        Responsibilities
                      </h4>

                      <ul>
                        {responsibilities.map((item, index) => {
                          return (
                            <li className={innerListItem} key={index}>
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <div>
                      <h4 className={text({ weight: 'bold' })}>Software</h4>

                      <ul>
                        {software.map((item, index) => {
                          return (
                            <li className={innerListItem} key={index}>
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            );
          },
        )}
      </ul>
    </section>
  );
};

const innerListItem = clsx(text(), 'before:content-["•"] before:px-[0.75ch]');
