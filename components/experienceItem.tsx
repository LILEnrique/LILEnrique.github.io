interface ExperienceItemProps {
  title: string;
  company: string;
  description: string;
  date: string;
}

const ExperienceItem = ({ title, company, description, date }: ExperienceItemProps) => {
  return (
    <div className="relative mx-4 md:mx-12 grid before:absolute before:left-[-32px] before:top-0 before:block before:h-full beforeBorderBW md:grid-cols-5 md:gap-10">
      <div className="relative pb-6 md:col-span-2">
        <div className="sticky top-0">
          <span className="text-primary -left-[40px] absolute rounded-full text-3xl select-none">•</span>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
          <h4 className="text-md text-gray-700 dark:text-white">{company}</h4>
          <time className="text-sm text-primary">{date}</time>
        </div>
      </div>

      <div className="relative flex flex-col gap-2 pb-4  md:col-span-3">
        <p className="text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;
