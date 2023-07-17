import { RichtextTitleFragment } from '@/app/_graphql/generated/types.generated';
import { section } from '@/app/_styles/section';
import { text } from '@/app/_styles/text';
import { HygraphRichtext } from '../common/HygraphRichtext';

interface HomeTwoColProps {
  heading: string;
  content: RichtextTitleFragment[];
}

export const HomeTwoCol = ({ heading, content }: HomeTwoColProps) => {
  return (
    <section className={section.root}>
      <h2 className={section.heading}>{heading}</h2>
      <ul className="grid lg:grid-cols-2 gap-y-9 md:gap-y-24 gap-x-4">
        {content.map((item, index) => {
          return (
            <li key={index} className="space-y-2.5 max-w-[300px]">
              <h3 className={text({ size: 'lg', weight: 'bold' })}>
                {item.title}
              </h3>

              {item.content?.raw ? (
                <HygraphRichtext content={item.content.raw} />
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
