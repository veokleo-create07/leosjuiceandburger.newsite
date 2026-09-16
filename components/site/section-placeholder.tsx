import { Container } from '@/components/site/container';

type SectionTone = 'cream' | 'warm-white' | 'sand' | 'olive' | 'charcoal';

type SectionPlaceholderProps = {
  id: string;
  index: string;
  title: string;
  tone: SectionTone;
};

export function SectionPlaceholder({
  id,
  index,
  title,
  tone,
}: SectionPlaceholderProps) {
  const isDark = tone === 'olive' || tone === 'charcoal';

  return (
    <section
      id={id}
      className={`section-placeholder section-placeholder--${tone}`}
      aria-labelledby={`${id}-title`}
    >
      <Container className="section-placeholder__inner">
        <p className={isDark ? 'eyebrow eyebrow--light' : 'eyebrow'}>
          {index} / Homepage
        </p>
        <h2 id={`${id}-title`} className="display-title">
          {title}
        </h2>
        <div className="section-placeholder__rule" aria-hidden="true" />
      </Container>
    </section>
  );
}
